<script lang="ts">
import Button from "$lib/components/Button.svelte";
</script>

<nav class="flex flex-wrap items-center justify-between px-10 py-5 text-dark">
    <div class="flex items-center">
        <img src="favicon.png" alt="favicon" class="h-12">
    </div>
    <div class="hidden md:flex md:items-center md:justify-center md:flex-grow">
        <a href="#" class="mx-3 text-dark text-lg font-semibold lowercase">About</a>
        <a href="#" class="mx-3 text-dark text-lg font-semibold lowercase">Projects</a>
        <a href="#" class="mx-3 text-dark text-lg font-semibold lowercase">Leaderboard</a>
    </div>
    <div class="hidden md:block">
        <Button color="dark" lowercase="true">
            Contact
        </Button>
    </div>
    <div class="md:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-dark border-dark hover:text-dark hover:border-dark focus:outline-none">
            <iconify-icon icon="quill:hamburger" height="30px" width="30px" class="text-dark"></iconify-icon>
        </button>
    </div>
</nav>
