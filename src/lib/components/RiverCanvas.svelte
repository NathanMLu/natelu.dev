<script lang="ts">
    import {afterUpdate, onMount} from "svelte";

    import {SCALE_RIVER_HEIGHT} from "$lib/models/constants";
    import type {RiverItem} from "$lib/models/river";
    import {SHOP_ITEMS} from "$lib/models/river";

    import riverbed from '$lib/images/river/riverbed.png';
    import {getItems} from "$lib/utils/riverUtils";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let bgImage: HTMLImageElement;

    let items: Array<RiverItem> = []
    let itemImages: Array<HTMLImageElement> = [];

    onMount(() => {
        loadBackground();
        handleResize();
        loadItems();

        ctx = canvas.getContext('2d');
        drawScreen();
    });

    afterUpdate(() => {
        handleResize();
    });

    /*
     * Load Functions
     */
    export const loadItems = async () => {
        items = [];
        let riverItems = await getItems();
        riverItems.forEach((item) => {
            let shopItem = SHOP_ITEMS.find((shopItem) => shopItem.name === item.name);
            if (shopItem) {
                items.push({
                    name: item.name,
                    customMessage: item.customMessage,
                    image: shopItem.image,
                    x: scaleXCoordinate(item.x, shopItem.width),
                    y: scaleYCoordinate(item.y, shopItem.height),
                    width: scaleWidth(shopItem.width),
                    height: scaleHeight(shopItem.height),
                    showTooltip: false,
                });
            }

            let image = new Image();
            if ("image" in shopItem) {
                image.src = shopItem.image;
            }
            itemImages.push(image);
        });
    }

    const loadBackground = () => {
        bgImage = new Image();
        bgImage.src = riverbed;
    }


    /*
     * Draw Functions
     */
    const drawScreen = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMap();
        drawItems();
        // moveItems();

        requestAnimationFrame(drawScreen);
    }

    const drawItems = () => {
        items.forEach((item) => {
            const image = itemImages.find((image) => image.src.includes(item.image));
            if (image) {
                ctx.drawImage(image, item.x, item.y, item.width, item.height);

                if (item.showTooltip && item.customMessage) {
                    const tooltipPadding = 5;
                    const tooltipHeight = 25;
                    const tooltipWidth = ctx.measureText(item.customMessage).width + tooltipPadding * 2;
                    const tooltipX = item.x + item.width / 2 - tooltipWidth / 2;
                    const tooltipY = item.y - tooltipHeight;

                    ctx.fillStyle = "black";
                    ctx.beginPath();
                    ctx.moveTo(tooltipX, tooltipY + tooltipHeight);
                    ctx.arcTo(tooltipX, tooltipY, tooltipX + tooltipWidth, tooltipY, 5);
                    ctx.arcTo(tooltipX + tooltipWidth, tooltipY, tooltipX + tooltipWidth, tooltipY + tooltipHeight, 5);
                    ctx.arcTo(tooltipX + tooltipWidth, tooltipY + tooltipHeight, tooltipX, tooltipY + tooltipHeight, 5);
                    ctx.arcTo(tooltipX, tooltipY + tooltipHeight, tooltipX, tooltipY, 5);
                    ctx.closePath();
                    ctx.fill();

                    ctx.fillStyle = "white";
                    ctx.font = "16px Arial";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(item.customMessage, tooltipX + tooltipWidth / 2, tooltipY + tooltipHeight / 2);
                }
            }
        });
    };

    const drawMap = () => {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    }

    /*
     * Update Functions
     */
    const moveItems = () => {
    }

    /*
     * Helper Functions
     */
    const scaleXCoordinate = (coordinate: number, width: number) => {
        return coordinate * canvas.width / 1000 - width / 2;
    }

    const scaleYCoordinate = (coordinate: number, height: number) => {
        return coordinate * canvas.height / 1000 - height / 2;
    }

    const scaleWidth = (width: number) => {
        return width * canvas.width / 1000;
    }

    const scaleHeight = (height: number) => {
        return height * canvas.width / 1000;
    }

    /*
     * Event Handlers
     */
    const handleResize = () => {
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight * SCALE_RIVER_HEIGHT;
    }

    const handleMouseMove = (event) => {
        const {left, top, width, height} = canvas.getBoundingClientRect();
        const x = (event.clientX - left) * (canvas.width / width);
        const y = (event.clientY - top) * (canvas.height / height);

        items.forEach((item) => {
            item.showTooltip = x >= item.x && x <= item.x + item.width && y >= item.y && y <= item.y + item.height;
        });
    };


</script>

<svelte:window on:resize={handleResize}/>
<canvas class="bg-green" bind:this={canvas} on:mousemove={handleMouseMove}>
</canvas>