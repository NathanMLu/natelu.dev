<script lang="ts">
    import {fade} from 'svelte/transition';

    import coin from '$lib/images/coin.svg'
    import {congratsMessages} from "$lib/models/constants";
    import {toast} from "$lib/models/stores";

    toast.subscribe((toast) => {
        if (toast.show) {
            if (toast.message === '') {
                toast.message = generateMsg();
            }

            setTimeout(() => {
                handleClose();
            }, 2000);
        }
    });

    const handleClose = () => {
        toast.set({show: false, heading: '', message: ''});
    };

    const generateMsg = () => {
        const randomIndex = Math.floor(Math.random() * congratsMessages.length);
        return congratsMessages[randomIndex];
    };
</script>

{#if $toast.show}
    <div class="bg-white rounded-lg flex flex-row p-2 border-l-8 border-orange fixed bottom-4 right-4 drop-shadow-lg z-10" transition:fade>
        <img src="{coin}" alt="coin" class="w-8">
        <div class="mx-5">
            <h2 class="text-xl font-bold">
                {$toast.heading}
            </h2>
            <p>
                {$toast.message}
            </p>
        </div>
        <div class="cursor-pointer" on:click={handleClose}>
            <iconify-icon height="25px" icon="material-symbols:close" width="25px"></iconify-icon>
        </div>
    </div>
{/if}