<script>
    import "../app.css";
    import "iconify-icon"
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
<main>
    <slot />
</main>
<div class="mt-14" style="height: 10000px"></div>
<div id="test">got here</div>

<style>
</style>