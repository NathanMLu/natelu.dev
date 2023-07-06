<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    let showHamburger = false;
    let yPos = 0;

    // TODO: use the yPos to create animations :D
    const yMax = 150;

    function toggleHamburger() {
        showHamburger = !showHamburger;
    }
</script>

<svelte:window bind:scrollY={yPos}/>

<!-- sticky nav -->
<!--<nav class="flex flex-wrap items-center justify-between px-10 py-5 text-dark sticky top-0" class:backdrop-blur-md={yPos > yMax}>-->
<nav class="flex flex-wrap items-center justify-between px-10 py-5">
    <div class="flex items-center mr-14">
        <a class="cursor-pointer" href="/">
            <img alt="favicon" class="w-12" src="favicon.png">
        </a>
    </div>

    <div class="hidden md:flex md:flex-grow md:items-center md:justify-center gap-10">
        <a class="text-dark dark:text-secondary text-lg font-semibold lowercase hover:text-dark-blue hover:dark:text-light-blue" href="#about">About</a>
        <a class="text-dark dark:text-secondary text-lg font-semibold lowercase hover:text-dark-blue hover:dark:text-light-blue" href="#projects">Projects</a>
        <a class="text-dark dark:text-secondary text-lg font-semibold lowercase hover:text-dark-blue hover:dark:text-light-blue" href="#river">Shop</a>
    </div>

    <div class="hidden md:block">
        <a href="/resume" target="_blank" rel="noopener noreferrer">
            <Button lowercase="true" class="bg-dark text-white dark:bg-secondary dark:text-dark">
                Resume
            </Button>
        </a>
    </div>

    <div class="md:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-dark dark:text-secondary border-dark dark:border-secondary hover:bg-white hover:dark:bg-black"
                on:click={toggleHamburger}>
            <iconify-icon height="25px" icon="quill:hamburger" width="25px"></iconify-icon>
        </button>
    </div>
</nav>

{#if showHamburger}
    <div class="fixed top-0 left-0 w-screen h-screen bg-secondary dark:bg-dark z-20" on:click={toggleHamburger}>
        <div class="flex flex-col items-center justify-center h-full">
            <a href="#about" class="mx-3 my-2 text-dark dark:text-secondary text-lg font-semibold lowercase hover:text-dark-blue">About</a>
            <a href="#projects" class="mx-3 my-2 text-dark dark:text-secondary text-lg font-semibold lowercase hover:text-dark-blue">Projects</a>
            <a href="#river"
               class="mx-3 mt-2 mb-4 text-dark dark:text-secondary text-lg font-semibold lowercase hover:text-dark-blue">Shop</a>
            <a href="/resume">
                <Button lowercase="true" class="bg-dark text-secondary dark:bg-secondary dark:text-dark">
                    Resume
                </Button>
            </a>
        </div>
    </div>
{/if}