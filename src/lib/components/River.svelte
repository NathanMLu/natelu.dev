<script lang="ts">
    import coin from '$lib/images/coin.svg';
    import riverbed from '$lib/images/river/riverbed.png';
    import Button from "$lib/components/Button.svelte";
    import {SCALE_RIVER_HEIGHT} from "$lib/models/constants";

    import {afterUpdate, onMount} from 'svelte';

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let showModal = false;

    onMount(() => {
        handleResize();
        ctx = canvas.getContext('2d');

        drawScreen();
    });

    afterUpdate(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        handleResize();
    });

    const openShop = () => {
        showModal = true;
    }

    const closeShop = () => {
        showModal = false;
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
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight * SCALE_RIVER_HEIGHT;
    }
</script>

<svelte:window on:resize={handleResize}/>
{#if showModal}
    <div class="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-light-blue rounded-3xl w-1/2">
            <div class="flex flex-col items-center justify-center p-8">
                <h1 class="text-3xl font-bold text-dark mb-6">
                    Nate's Shop
                </h1>
                <p class="text-dark mb-6">
                    Nate's shop is currently under construction. Please check back later!
                </p>
                <Button color="primary" on:click={closeShop}>Close</Button>
            </div>
        </div>
    </div>
{/if}

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