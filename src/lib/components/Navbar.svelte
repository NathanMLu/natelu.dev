<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    let showHamburger = false;
    let yPos = 0;

    // TODO: use the yPos to create animations :D
    // const yMax = 150;

    function toggleHamburger() {
        showHamburger = !showHamburger;
    }
</script>

<svelte:window bind:scrollY={yPos}/>

<!-- sticky nav -->
<!--<nav class="flex flex-wrap items-center justify-between px-10 py-5 text-dark sticky top-0" class:backdrop-blur-md={yPos > yMax}>-->

<nav class="flex flex-wrap items-center justify-between px-10 py-5 text-dark">
    <div class="flex items-center">
        <a href="" class="cursor-pointer">
            <img src="favicon.png" alt="favicon" class="h-12">
        </a>
    </div>
    <div class="hidden md:flex md:items-center md:justify-center md:flex-grow">
        <a href="#about" class="mx-3 text-dark text-lg font-semibold lowercase hover:text-dark-blue">About</a>
        <a href="#projects" class="mx-3 text-dark text-lg font-semibold lowercase hover:text-dark-blue">Projects</a>
        <a href="#leaderboard"
           class="mx-3 text-dark text-lg font-semibold lowercase hover:text-dark-blue">Leaderboard</a>
    </div>
    <div class="hidden md:block">
        <a href="#contact">
            <Button color="dark" lowercase="true">
                Contact
            </Button>
        </a>
    </div>
    <div class="md:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-dark border-dark hover:bg-white"
                on:click={toggleHamburger}>
            <iconify-icon icon="quill:hamburger" height="25px" width="25px"></iconify-icon>
        </button>
    </div>
</nav>
{#if showHamburger}
    <div class="fixed top-0 left-0 w-screen h-screen bg-secondary" on:click={toggleHamburger}>
        <div class="flex flex-col items-center justify-center h-full">
            <a href="#about" class="mx-3 my-2 text-dark text-lg font-semibold lowercase hover:text-dark-blue">About</a>
            <a href="#projects" class="mx-3 my-2 text-dark text-lg font-semibold lowercase hover:text-dark-blue">Projects</a>
            <a href="#leaderboard"
               class="mx-3 mt-2 mb-4 text-dark text-lg font-semibold lowercase hover:text-dark-blue">Leaderboard</a>
            <a href="#contact">
                <Button color="dark" lowercase="true">
                    Contact
                </Button>
            </a>
        </div>
    </div>
{/if}