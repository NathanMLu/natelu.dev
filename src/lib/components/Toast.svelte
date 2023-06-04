<script lang="ts">
    import {afterUpdate} from "svelte";
    import {fade} from 'svelte/transition';

    import coin from '$lib/images/coin.svg'
    import {congratsMessages} from "$lib/models/constants";
    // TODO: Refactor this whole component

    export let points;
    export let isVisible: boolean = false;
    let msg;

    afterUpdate(() => {
        if (isVisible) {
            msg = generateMsg();
        }
    });

    const handleClose = () => {
        isVisible = false;
    };

    const generateMsg = () => {
        const randomIndex = Math.floor(Math.random() * congratsMessages.length);
        return congratsMessages[randomIndex];
    };
</script>

{#if isVisible}
    <div class="bg-white rounded-lg flex flex-row p-2 border-l-8 border-orange fixed bottom-4 right-4 drop-shadow-lg z-10" transition:fade>
        <img src="{coin}" alt="coin" class="w-8">
        <div class="mx-5">
            <h2 class="text-xl font-bold">
                +{points}
                {#if points > 1}
                    points!
                {:else}
                    point!
                {/if}
            </h2>
            <p>
                {msg}
            </p>
        </div>
        <div class="cursor-pointer" on:click={handleClose}>
            <iconify-icon height="25px" icon="material-symbols:close" width="25px"></iconify-icon>
        </div>
    </div>
{/if}