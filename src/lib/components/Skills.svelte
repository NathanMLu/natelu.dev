<script lang="ts">
    import {onMount} from "svelte";

    import Button from "$lib/components/Button.svelte";
    import {technologies, technologyTypes} from "$lib/models/skills";

    // The icons will be floating around on the screen and be moving diagonally to the top right from the bottom left.
    // When the user drags the mouse and is over the #skills-logos div, the icons will move in the opposite direction of the mouse, as if the user is dragging them.
    // When the user is not dragging the mouse, the icons will move in the direction of the top right corner, and using acceleration and velocity variables.
    // When the icons go off of the visible screen, they will be reset to the bottom left corner, and will continue moving in the direction of the top right corner.

    let selectedTechnology: string = 'Angular';
    let showFullList: boolean = false;

    const updateTechnology = (technology: string) => {
        selectedTechnology = technology;
    }

    const toggleList = () => {
        showFullList = !showFullList;
    }

    const getTechnology = (technology: string) => {
        return technologies.filter(tech => tech.type === technology);
    }

    onMount(() => {
        // TODO: Add animation for the icons

    });

</script>

<div id="skills-container">
    <div class="flex flex-col justify-center lg:gap-8 items-center lg:items-start lg:flex-row lg:pl-36 lg:justify-between">
        <div class="order-2 lg:order-1">
            <div id="skills-logos"
                 class="border-4 rounded-2xl border-dark-blue dark:border-light-blue grid lg:grid-cols-8 md:grid-cols-8 grid-cols-5 gap-4 p-4 overflow-y-scroll bg-secondary">
                {#each technologies as technology}
                    <img src="{technology.logo}" alt="{technology.name}"
                         class="w-full h-full object-contain cursor-pointer"
                         on:focus={() => updateTechnology(technology.name)}
                         on:mouseover="{() => updateTechnology(technology.name)}">
                {/each}
            </div>
            <Button lowercase="true" class="bg-dark dark:bg-white text-white dark:text-dark mt-6" on:click={toggleList}>Full List</Button>
        </div>

        <div class="flex items-center justify-center flex-col flex-grow p-12 lg:px-12 lg:pt-12 lg:pb-0 order-1">
            <h2 class="text-dark font-bold text-3xl text-center dark:text-secondary">
                My Skills
            </h2>
            <h4 class="text-primary text-xl font-semibold text-center mt-10">
                {selectedTechnology}
            </h4>
            <ul class="list-disc">
                {#each technologies.sort((a, b) => a.name.localeCompare(b.name)) as technology}
                    {#if technology.name === selectedTechnology}
                        {#each technology.facts as fact}
                            <li class="text-black dark:text-light-blue text-left mt-4 font-esteban">
                                {fact}
                            </li>
                        {/each}
                    {/if}
                {/each}
            </ul>
        </div>
    </div>


    {#if showFullList}
        <div id="full-list" class="grid grid-cols-8 lg:ml-28 md:ml-16 lg:p-8 md:p-8 p-4 items-center gap-y-4 md:gap-y-2 lg:gap-y-1">
            <h4 class="text-primary text-xl font-semibold lg:col-span-2 md:col-span-2 col-span-3">
                Languages
            </h4>
            <p class="lg:col-span-6 md:col-span-6 col-span-5 dark:text-white">
                {#each getTechnology(technologyTypes.language) as technology, index}
                    {technology.name}{index !== getTechnology(technologyTypes.language).length - 1 ? ', ' : ''}
                {/each}
            </p>
            <h4 class="text-primary text-xl font-semibold lg:col-span-2 md:col-span-2 col-span-3">
                Frameworks
            </h4>
            <p class="lg:col-span-6 md:col-span-6 col-span-5 dark:text-white">
                {#each getTechnology(technologyTypes.framework) as technology, index}
                    {technology.name}{index !== getTechnology(technologyTypes.framework).length - 1 ? ', ' : ''}
                {/each}
            </p>
            <h4 class="text-primary text-xl font-semibold lg:col-span-2 md:col-span-2 col-span-3">
                Libraries
            </h4>
            <p class="lg:col-span-6 md:col-span-6 col-span-5 dark:text-white">
                {#each getTechnology(technologyTypes.library) as technology, index}
                    {technology.name}{index !== getTechnology(technologyTypes.library).length - 1 ? ', ' : ''}
                {/each}
            </p>
            <h4 class="text-primary text-xl font-semibold lg:col-span-2 md:col-span-2 col-span-3">
                Tools
            </h4>
            <p class="lg:col-span-6 md:col-span-6 col-span-5 dark:text-white">
                {#each getTechnology(technologyTypes.tool) as technology, index}
                    {technology.name}{index !== getTechnology(technologyTypes.tool).length - 1 ? ', ' : ''}
                {/each}
            </p>
        </div>
    {/if}
</div>

<style>
    #skills-container {
        margin-top: 10vh;
        margin-bottom: 5vh;
    }

    #skills-logos {
        width: 50vw;
        height: 25vw;
    }

    @media (max-width: 1024px) {
        #skills-container {
            margin-top: 5vh;
            margin-bottom: 2.5vh;
        }

        #skills-logos {
            width: 80vw;
            height: 45vw;
        }
    }

    @media (max-width: 764px) {
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
