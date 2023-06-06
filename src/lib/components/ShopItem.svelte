<script lang="ts">
    import coin from '$lib/images/coin.svg'
    import Button from "$lib/components/Button.svelte";
    import {MAX_MESSAGE_LENGTH} from "$lib/models/river";

    export let selected: boolean = false;
    export let name: string = '';
    export let image: string = '';
    export let price: number = 0;
    export let description: string = '';
    export let customInput: string = '';

    let cardFront: boolean = true;

    const flipItem = (event) => {
        if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'BUTTON') {
            return;
        }

        cardFront = !cardFront;
    }

    const addToCart = () => {
        console.log('adding to cart')

        // does random stuff, then
        selected = true;
    }
</script>

<div class="flex flex-col bg-white items-center p-4 border-2 rounded-2xl border-dashed cursor-pointer hover:border-secondary border-white"
     class:selected={selected}
     on:click={flipItem}>
    {#if cardFront}
        <div class="rounded-2xl px-2 py-1.5 flex flex-row justify-between self-end bg-grey items-center drop-shadow-lg">
            <img alt="NateLu Coin" class="w-8" src="{coin}"/>
            <h5 class="text-xl font-bold ml-2">{price}</h5>
        </div>
        <div class="flex flex-col items-center">
            <img alt="{name}" class="w-36" src="{image}"/>
            <h5 class="text-2xl font-semibold">{name}</h5>
            <p class="text-sm text-dark-blue leading-tight text-center self-center">Fun Fact: {description}</p>
        </div>
    {:else}
        <div class="rounded-2xl px-2 py-1.5 flex flex-row justify-between self-end bg-grey items-center drop-shadow-lg">
            <img alt="NateLu Coin" class="w-8" src="{coin}"/>
            <h5 class="text-xl font-bold ml-2">{price}</h5>
        </div>
        <div class="flex flex-col items-start">
            <h5 class="text-2xl font-semibold mt-4">{name}</h5>
            <label for="customMessage-{name}" class="font-semibold mt-3">
                Message <span class="{customInput.length > MAX_MESSAGE_LENGTH ? 'text-red-500' : ''}">({customInput.length}/{MAX_MESSAGE_LENGTH})</span>:
            </label>
            <!-- TODO: randomize placeholder -->
            <textarea name="customMessage-{name}" placeholder="i like this website" id="customMessage-{name}"
                      class="rounded-md p-2 mt-1 font-esteban box-border w-full h-full resize-none border-2 border-grey" disabled={selected}
                      bind:value={customInput}></textarea>

            <Button color="primary" customClass="mt-3" disabled="{customInput.length > MAX_MESSAGE_LENGTH}" on:click={addToCart}>
                Add to Cart
            </Button>
        </div>
    {/if}
</div>

<style>
    .selected {
        border-color: theme('colors.dark-blue');
    }

    .selected:hover {
        border-color: theme('colors.dark-blue');
    }
</style>