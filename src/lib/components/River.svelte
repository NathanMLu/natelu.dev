<script lang="ts">
    import coin from '$lib/images/coin.svg';
    import riverbed from '$lib/images/river/riverbed.png';
    import Button from "$lib/components/Button.svelte";
    import {SCALE_RIVER_HEIGHT} from "$lib/models/constants";
    import {SHOP_DESCRIPTION, SHOP_ITEMS} from "$lib/models/river";
    import {user} from "$lib/models/stores";


    import {afterUpdate, onMount} from 'svelte';
    import ShopItem from "$lib/components/ShopItem.svelte";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let showModal = false;
    let bgImage: HTMLImageElement;

    let points = 0;

    user.subscribe(user => {
        points = user.points;
    });

    onMount(() => {
        loadBackground();
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

    const loadBackground = () => {
        bgImage = new Image();
        bgImage.src = riverbed;
    }

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            closeShop();
        }
    };

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
{#if showModal}
    <div class="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" on:click={handleBackgroundClick}>
        <div class="bg-light-blue rounded-3xl lg:w-3/4 md:w-4/5 w-5/6 overflow-y-auto" id="shop-modal">
            <div class="lg:py-10 lg:px-14 md:py-8 md:px-10 py-6 px-8">
                <div class="flex justify-between items-center flex-row">
                    <h1 class="lg:text-4xl md:text-2xl text-xl font-bold text-dark text-start">
                        Nate's Shop
                    </h1>
                    <iconify-icon icon="material-symbols:close" class="lg:text-4xl md:text-2xl text-xl text-dark cursor-pointer" width="40px" height="40px" on:click={closeShop}></iconify-icon>
                </div>
                <p class="text-black mt-2">{SHOP_DESCRIPTION}</p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
                    {#each SHOP_ITEMS as item}
                        <ShopItem
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                description={item.description}
                                >
                        </ShopItem>
                    {/each}
                </div>

                <div class="mt-8 flex flex-row justify-end items-center">
<!--                    <div class="flex justify-start items-center gap-x-2 w-min">-->
<!--                        <h1 class="text-2xl font-bold text-dark">-->
<!--                            Total:-->
<!--                        </h1>-->
<!--                        <div class="rounded-2xl px-2 py-1.5 flex flex-row justify-between self-end bg-grey items-center drop-shadow-lg w-20">-->
<!--                            <img alt="NateLu Coin" class="w-8" src="{coin}"/>-->
<!--                            <h5 class="text-xl font-bold ml-2">{points}</h5>-->
<!--                        </div>-->
<!--                    </div>-->

                    <Button color="primary" class="mt-4">Checkout</Button>
                </div>
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
    <canvas class="bg-green" bind:this={canvas}>
    </canvas>
</div>

<style>
    #shop-modal {
        max-height: 90%;
    }
</style>