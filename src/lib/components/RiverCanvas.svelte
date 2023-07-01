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

    const loadItems = async () => {
        let riverItems = await getItems();
        riverItems.forEach((item) => {
            let shopItem = SHOP_ITEMS.find((shopItem) => shopItem.name === item.name);
            if (shopItem) {
                items.push({
                    name: item.name,
                    customMessage: item.customMessage,
                    image: shopItem.image,
                });
            }
        });
    }

    const loadBackground = () => {
        bgImage = new Image();
        bgImage.src = riverbed;
    }

    const drawScreen = () => {
        drawMap();

        requestAnimationFrame(drawScreen);
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