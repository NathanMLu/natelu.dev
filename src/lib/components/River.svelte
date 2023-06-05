<script lang="ts">
    import coin from '$lib/images/coin.svg';
    import riverbed from '$lib/images/river/riverbed.png';
    import Button from "$lib/components/Button.svelte";
    import {SCALE_RIVER_HEIGHT} from "$lib/models/constants";

    import {onMount} from 'svelte';

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    onMount(() => {
        handleResize();
        ctx = canvas.getContext('2d');

        drawScreen();
    });

    const openShop = () => {
        console.log('open shop');
    }

    const drawScreen = () => {
        drawMap();

        requestAnimationFrame(drawScreen);
    }

    const drawMap = () => {
        const img = new Image();
        img.src = riverbed;

        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * SCALE_RIVER_HEIGHT;
    }
</script>

<svelte:window on:resize={handleResize}/>
<div id="river">
    <div class="bg-gradient-to-b from-secondary to-green">
        <div class="flex flex-col items-start justify-center lg:px-24 px-12 pt-32 pb-28">
            <h1 class="text-3xl font-bold text-dark mb-6">
                Spend your
                <img src="{coin}" class="inline align-middle w-14 mx-2" alt="coin">
                tokens and add to the riverbed!
            </h1>
            <Button color="primary" on:click={openShop}>Nate's Shop</Button>
        </div>
    </div>
        <canvas id="riverbed" class="bg-green" bind:this={canvas}>
        </canvas>
</div>