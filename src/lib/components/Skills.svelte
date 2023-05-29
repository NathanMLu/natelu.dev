<script lang="ts">
    import {onMount} from "svelte";

    import Button from "$lib/components/Button.svelte";
    import { technologies } from "$lib/models/constants";

    // The icons will be floating around on the screen and be moving diagonally to the top right from the bottom left.
    // When the user drags the mouse and is over the #skills-logos div, the icons will move in the opposite direction of the mouse, as if the user is dragging them.
    // When the user is not dragging the mouse, the icons will move in the direction of the top right corner, and using acceleration and velocity variables.
    // When the icons go off of the visible screen, they will be reset to the bottom left corner, and will continue moving in the direction of the top right corner.

    let selectedLanguage: string = "C#";

    const updateLanguage = (language: string) => {
        selectedLanguage = language;
    }

    const toggleList = () => {

    }

    onMount(() => {

    });

</script>

<div id="skills-container"
     class="flex flex-col justify-center lg:gap-8 items-center lg:items-start lg:flex-row lg:pl-36 lg:justify-between">
    <div class="order-2 lg:order-1">
        <div id="skills-logos" class="border-4 rounded-2xl border-dark-blue grid lg:grid-cols-8 md:grid-cols-8 grid-cols-5 gap-4 p-4 overflow-hidden">
            {#each technologies as technology}
                <img src="{technology.logo}" alt="{technology.name}" class="w-full h-full object-contain cursor-pointer" on:click="{() => updateLanguage(technology.name)}">
            {/each}
        </div>
        <Button lowercase="true" color="dark" customClass="mt-8" on:click={toggleList}>Full List</Button>
        <div id="full-list">


        </div>
    </div>

    <div class="flex items-center justify-center flex-col flex-grow p-12 lg:px-12 lg:pt-12 lg:pb-0  order-1">
        <h2 class="text-dark font-bold text-3xl text-center">
            My Skills
        </h2>
        <h4 class="text-primary text-xl font-semibold text-center mt-10">
            {selectedLanguage}
        </h4>
        <ul class="list-disc">
            {#each technologies as technology}
                {#if technology.name === selectedLanguage}
                    {#each technology.facts as fact}
                        <li class="text-black text-left mt-4 font-esteban">
                            {fact}
                        </li>
                    {/each}
                {/if}
            {/each}
        </ul>
    </div>
</div>

<style>
    #skills-container {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    #skills-logos {
        width: 55vw;
        height: 25vw;
    }

    @media (max-width: 1024px) {
        #skills-container {
            margin-top: 5vh;
            margin-bottom: 5vh;
        }

        #skills-logos {
            width: 80vw;
            height: 45vw;
        }
    }

    @media (max-width: 640px) {
        #skills-container {
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }

        #skills-logos {
            width: 90vw;
            height: 100vw;
        }
    }

    .font-esteban {
        font-family: 'Esteban', serif !important;
    }
</style>