<script>
import Button from "$lib/components/Button.svelte";
</script>

<nav class="flex items-center justify-between px-10 py-6 text-dark">
    <div class="flex items-center">
        <img src="favicon.png" alt="favicon" class="h-12">
    </div>
    <div class="hidden md:flex md:items-center md:justify-center">
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
            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/>
            </svg>
        </button>
    </div>
</nav>
