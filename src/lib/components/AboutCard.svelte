<script>
    import {createEventDispatcher} from "svelte";
    import {toast} from "$lib/models/stores";

    export let name = "";
    export let image = "";
    export let headline = "";
    export let text = "";
    export let link = "";
    export let linkText = "";

    const dispatch = createEventDispatcher();

    const showAboutQuizPrompt = () => {
        console.log("showAboutQuizPrompt")
        toast.set({
            show: true,
            message: "Click on an icon to take a quiz!",
            heading: "Earn some points!",
        });
    }
</script>

<div class="bg-transparent">
    <div class="rounded-xl bg-secondary w-16 h-16 flex items-center justify-center cursor-pointer hover:opacity-75"
         on:click={() => dispatch('showQuiz')}
         on:mouseenter={showAboutQuizPrompt}>
        <img src={image} class="w-10 h-10" alt="{headline}"/>
    </div>
    <h2 class="font-semibold text-lg whitespace-nowrap mt-2">
        {headline}
    </h2>
    <p class="text-dark">
        {#if link && linkText}
            {#if text.includes(linkText)}
                {#if text.indexOf(linkText) === 0}
                    <a href={link} class="font-esteban underline hover:text-dark-blue" target="_blank" rel="noopener noreferrer">
                        {linkText}
                    </a>
                    {text.substring(linkText.length)}
                {:else}
                    {text.substring(0, text.indexOf(linkText))}
                    <a href={link} class="font-esteban underline hover:text-dark-blue" target="_blank" rel="noopener noreferrer">
                        {linkText}
                    </a>
                    {text.substring(text.indexOf(linkText) + linkText.length).trim()}
                {/if}
            {/if}
        {:else}
            {text}
        {/if}
    </p>
</div>

<style>
    .font-esteban {
        font-family: 'Esteban', serif !important;
    }
</style>