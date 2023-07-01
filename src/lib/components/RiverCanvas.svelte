<script lang="ts">
    import {afterUpdate, onMount} from "svelte";

    import {SCALE_RIVER_HEIGHT} from "$lib/models/constants";
    import {SHOP_ITEMS} from "$lib/models/river";

    import riverbed from '$lib/images/river/riverbed.png';
    import {getItems} from "$lib/utils/riverUtils";
    import type {RiverItem} from "$lib/models/river";

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
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height
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

    const drawScreen = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMap();
        drawItems();
        // moveItems();

        requestAnimationFrame(drawScreen);
    }

    const drawItems = () => {
        items.forEach((item) => {
            let image = itemImages.find((image) => image.src.includes(item.image));
            if (image) {
                ctx.drawImage(image, item.x, item.y, 100, 100);
            }
        });
    }

    const moveItems = () => {
        items.forEach((item) => {
            const speed = 4;
            const dx = (Math.random() - 0.5) * speed;
            const dy = (Math.random() - 0.5) * speed;

            // Update the item's position
            item.x += dx;
            item.y += dy;

            // Keep the item within the canvas bounds
            if (item.x < 0) item.x = 0;
            if (item.y < 0) item.y = 0;
            if (item.x + 100 > canvas.width) item.x = canvas.width - 100;
            if (item.y + 100 > canvas.height) item.y = canvas.height - 100;
        });
    }

    const drawMap = () => {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    }

    const handleResize = () => {
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight * SCALE_RIVER_HEIGHT;
    }

</script>

<svelte:window on:resize={handleResize}/>
<canvas class="bg-green" bind:this={canvas}>
</canvas>