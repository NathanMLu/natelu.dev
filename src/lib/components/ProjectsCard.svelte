<script lang="ts">
    export let isDefault = true;
    export let image = '';
    export let title = '';
    export let description = '';
    export let githubLink = '';
    export let youtubeLink = '';
    export let devpostLink = '';
    export let liveLink = '';
    export let languages = [];
</script>

{#if isDefault}
    <div class="grid grid-cols-12 projects-card items-center">
        <img src="{image}"
             class="object-cover brightness-90 duration-200 transition hover:brightness-100 lg:col-span-6 lg:col-start-3 md:col-start-2 md:col-span-7 col-start-1 col-span-12 lg:blur-0 md:blur-sm blur-md row-span-full rounded-sm shadow-lg h-96"
             alt="{title}">
        <div class="lg:col-span-5 lg:col-start-6 md:col-start-6 md:col-span-6 col-start-2 col-span-10 z-10 row-span-full flex content-end items-end flex-col">
            <h2 class="text-2xl font-semibold text-black">{title}</h2>
            <div class="w-full rounded-xl flex items-center justify-center mt-4 bg-white py-4 px-8 drop-shadow-xl">
                <p class="text-dark">
                    {description}
                </p>
            </div>
            <h5 class="text-primary font-semibold mt-2">
                {#each languages as language}
                    <span class="ml-2">
                        {language}
                    </span>
                {/each}
            </h5>
            <div class="flex flex-row gap-x-4 mt-2 items-center">
                {#if devpostLink}
                    <a href="{devpostLink}" target="_blank">
                        <iconify-icon icon="simple-icons:devpost" height="30px" width="30px"
                                      class="text-devpost"></iconify-icon>
                    </a>
                {/if}
                {#if youtubeLink}
                    <a href="{youtubeLink}" target="_blank">
                        <iconify-icon icon="simple-icons:youtube" height="30px" width="30px"
                                      class="text-youtube"></iconify-icon>
                    </a>
                {/if}
                {#if githubLink}
                    <a href="{githubLink}" target="_blank">
                        <iconify-icon icon="mdi:github" height="30px" width="30px" class="text-black"></iconify-icon>
                    </a>
                {/if}
                {#if liveLink}
                    <a href="{liveLink}" target="_blank">
                        <iconify-icon icon="mdi:web" height="30px" width="30px" class="text-black"></iconify-icon>
                    </a>
                {/if}

            </div>
        </div>
    </div>
{:else}
    <div class="grid grid-cols-12 projects-card items-center">
        <img src="{image}"
             class="object-cover brightness-90 duration-200 transition hover:brightness-100 lg:col-span-6 lg:col-start-5 md:col-start-5 md:col-span-7 col-start-1 col-span-12 lg:blur-0 md:blur-sm blur-md row-span-full rounded-sm shadow-lg h-96"
             alt="{title}">
        <div class="lg:col-span-5 lg:col-start-3 md:col-start-2 md:col-span-6 col-start-2 col-span-10 z-10 row-span-full flex content-end items-start flex-col">
            <h2 class="text-2xl font-semibold text-black">{title}</h2>
            <div class="w-full rounded-xl flex items-center justify-center mt-4 bg-white py-4 px-8 drop-shadow-xl">
                <p class="text-dark">
                    {description}
                </p>
            </div>
            <h5 class="text-primary font-semibold mt-2">
                {#each languages as language}
                    <span class="mr-2">
                        {language}
                    </span>
                {/each}
            </h5>
            <div class="flex flex-row gap-x-4 mt-2 items-center">
                {#if devpostLink}
                    <a href="{devpostLink}" target="_blank">
                        <iconify-icon icon="simple-icons:devpost" height="30px" width="30px"
                                      class="text-devpost"></iconify-icon>
                    </a>
                {/if}
                {#if youtubeLink}
                    <a href="{youtubeLink}" target="_blank">
                        <iconify-icon icon="simple-icons:youtube" height="30px" width="30px"
                                      class="text-youtube"></iconify-icon>
                    </a>
                {/if}
                {#if githubLink}
                    <a href="{githubLink}" target="_blank">
                        <iconify-icon icon="mdi:github" height="30px" width="30px" class="text-black"></iconify-icon>
                    </a>
                {/if}
                {#if liveLink}
                    <a href="{liveLink}" target="_blank">
                        <iconify-icon icon="mdi:web" height="30px" width="30px" class="text-black"></iconify-icon>
                    </a>
                {/if}
            </div>
        </div>
    </div>
{/if}


<style>
</style>