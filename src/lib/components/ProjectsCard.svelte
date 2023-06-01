<script lang="ts">
    export let image = '';
    export let title = '';
    export let description = '';
    export let githubLink = '';
    export let youtubeLink = '';
    export let devpostLink = '';
    export let liveLink = '';
    export let languages = [];
</script>

<div class="grid grid-cols-12 projects-card items-center">
    <img src="{image}" class="col-span-6 col-start-3 row-span-full rounded-sm shadow-lg h-96" alt="{title}">
    <div class="col-span-5 col-start-6 z-10 row-span-full flex content-end items-end flex-col">
        <h2 class="text-2xl font-semibold text-black">{title}</h2>
        <div class="w-full rounded-xl flex items-center justify-center mt-4 bg-white py-4 px-8 drop-shadow-xl">
            <p class="text-dark">
                {description}
            </p>
        </div>
        <div class="flex flex-row gap-x-2 mt-2">
            {#each languages as language}
                <span class="text-primary font-semibold">{language}</span>
            {/each}
        </div>
        <div class="flex flex-row gap-x-4 mt-2 items-center">
            {#if devpostLink}
                <a href="{devpostLink}" target="_blank">
                    <iconify-icon icon="simple-icons:devpost" height="30px" width="30px" class="text-devpost"></iconify-icon>
                </a>
            {/if}
            {#if youtubeLink}
                <a href="{youtubeLink}" target="_blank">
                    <iconify-icon icon="simple-icons:youtube" height="30px" width="30px" class="text-youtube"></iconify-icon>
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

<style>
</style>