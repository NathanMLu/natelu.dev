<script lang="ts">
    import { onMount } from 'svelte';

    let showMobileNav = false;

    function toggleMobileNav() {
        showMobileNav = !showMobileNav;
    }

    onMount(() => {
        function handleResize() {
            showMobileNav = false;
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<header class="flex items-center justify-between py-4 px-8">
    <div class="flex items-center">
        <img src="favicon.png" alt="Logo" class="h-8 w-8 mr-2">
        <h1 class="text-lg font-bold text-dark">My Website</h1>
    </div>

    <nav class="hidden md:flex md:items-center">
        <a href="#" class="mx-4 text-dark">About</a>
        <a href="#" class="mx-4 text-dark">Projects</a>
        <a href="#" class="mx-4 text-dark">Leaderboard</a>
        <a href="#" class="mx-4 text-dark">Contact</a>
    </nav>

    <button
            class="md:hidden focus:outline-none"
            aria-label="Toggle mobile navigation"
            on:click={toggleMobileNav}
    >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current text-dark">
            <path
                    class={showMobileNav ? 'hidden' : ''}
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
            />
            <path
                    class={showMobileNav ? '' : 'hidden'}
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
            />
        </svg>
    </button>

    {#if showMobileNav}
        <div class="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
            <nav class="flex flex-col items-center justify-center h-full">
                <a href="#" class="my-4 text-dark">About</a>
                <a href="#" class="my-4 text-dark">Projects</a>
                <a href="#" class="my-4 text-dark">Leaderboard</a>
                <a href="#" class="my-4 text-dark">Contact</a>
            </nav>
        </div>
    {/if}
</header>
