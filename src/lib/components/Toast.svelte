<script lang="ts">
    import coin from '$lib/images/coin.svg'
    import {afterUpdate} from "svelte";
    import {fade} from 'svelte/transition';

    export let points;
    export let msg;
    let isVisible: boolean = true;

    afterUpdate(() => {
        console.log("after update")
        if (points != undefined && msg != undefined) {
            isVisible = true;
            setTimeout(() => {
                isVisible = false;
            }, 3000);
        }
    });

    const handleClose = () => {
        isVisible = false;
    };
</script>

{#if isVisible}
    <div class="bg-white rounded-lg flex flex-row p-2 border-l-8 border-orange fixed bottom-4 right-6 drop-shadow-lg" transition:fade>
        <img src="{coin}" alt="coin image" class="w-8">
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