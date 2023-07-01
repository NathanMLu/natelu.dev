<script lang="ts">
    import {afterUpdate} from 'svelte';

    import coin from '$lib/images/coin.svg';
    import Button from "$lib/components/Button.svelte";
    import {loading, user} from "$lib/models/stores";

    import type {CartItem} from "$lib/models/river";
    import ShopItem from "$lib/components/ShopItem.svelte";
    import {buyItem} from "$lib/utils/riverUtils";
    import {SHOP_DESCRIPTION, SHOP_ITEMS} from "$lib/models/river";
    import {getPoints} from "$lib/utils/userUtils";
    import RiverCanvas from "$lib/components/RiverCanvas.svelte";

    let showModal = false;

    let cart: Array<CartItem> = [];
    let cartTotal = 0;
    let errorMsg = '';

    let points = 0;

    user.subscribe(user => {
        points = user.points;
    });

    afterUpdate(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    const buyItems = () => {
        if (cart.length === 0 || points < cartTotal) {
            return;
        }

        loading.set(true);
        const promises = cart.map(item => buyItem(item, $user));

        Promise.all(promises)
            .then(() => {
                getPoints($user).then((points: number) => {
                    user.update((u) => {
                        u.points = points;
                        return u;
                    });
                });
                closeShop();
                loading.set(false);
            })
            .catch((error) => {
                errorMsg = error;

                loading.set(false);
            });
    };

    const addToCart = (event) => {
        cart.push({name: event.detail.name, customMessage: event.detail.customMessage, price: event.detail.price});
        cartTotal += event.detail.price;
    }

    const removeFromCart = (event) => {
        cart = cart.filter(item => item.name !== event.detail.name);
        cartTotal = Math.max(0, cartTotal - event.detail.price);
    }

    const openShop = () => {
        showModal = true;

        resetFields();
    }

    const closeShop = () => {
        showModal = false;

        resetFields();
    }

    const resetFields = () => {
        errorMsg = '';
        cart = [];
        cartTotal = 0;
    }

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            closeShop();
        }
    };

</script>

{#if showModal}
    <div class="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
         on:click={handleBackgroundClick}>
        <div class="bg-light-blue rounded-3xl lg:w-3/4 md:w-4/5 w-5/6 overflow-y-auto" id="shop-modal">
            <div class="lg:py-10 lg:px-14 md:py-8 md:px-10 py-6 px-8">
                <div class="flex justify-between items-center flex-row">
                    <h1 class="lg:text-4xl md:text-2xl text-xl font-bold text-dark text-start">
                        Nate's Shop
                    </h1>
                    <iconify-icon icon="material-symbols:close"
                                  class="lg:text-4xl md:text-2xl text-xl text-dark cursor-pointer" width="40px"
                                  height="40px" on:click={closeShop}></iconify-icon>
                </div>
                <p class="text-black mt-2">{SHOP_DESCRIPTION}</p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
                    {#each SHOP_ITEMS as item}
                        <ShopItem
                                name={item.name}
                                prettyName={item.prettyName}
                                image={item.image}
                                price={item.price}
                                description={item.description}
                                on:addToCart={addToCart}
                                on:removeFromCart={removeFromCart}
                        >
                        </ShopItem>
                    {/each}
                </div>

                <div class="mt-6 flex flex-row justify-between items-start">
                    <div class="rounded-2xl px-2 py-1 flex flex-row justify-between bg-grey items-center drop-shadow-lg cost-width">
                        <img alt="NateLu Coin" class="w-6" src="{coin}"/>
                        <h5 class="text-lg font-bold ml-2">{points}</h5>
                    </div>

                    <div class="flex flex-col items-end justify-end">
                        {#if errorMsg}
                            <p class="text-red-500 text-lg font-semibold mb-2">{errorMsg}</p>
                        {/if}
                        <div class="flex justify-start items-center gap-x-2">
                            <h1 class="text-xl font-bold text-dark">
                                Total:
                            </h1>
                            <div class="rounded-2xl px-2 py-1 flex flex-row bg-grey items-center drop-shadow-lg">
                                <img alt="NateLu Coin" class="w-6" src="{coin}"/>
                                <h5 class="text-lg font-bold ml-2 {points < cartTotal ? 'text-red-500' : ''}">
                                    {cartTotal}</h5>
                            </div>
                        </div>
                        <Button color="primary" customClass="mt-3" on:click={buyItems}
                                disabled={cart.length === 0 || points < cartTotal}
                        >Buy</Button>
                    </div>
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
    <RiverCanvas></RiverCanvas>
</div>

<style>
    #shop-modal {
        max-height: 90%;
    }
</style>