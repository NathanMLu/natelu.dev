<script>
    import "../app.css";
    import "iconify-icon"

    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Points from "$lib/components/Points.svelte";
    import Spinner from "$lib/components/Spinner.svelte";
    import {loading} from "$lib/models/stores";
    import Toast from "$lib/components/Toast.svelte";
</script>

<svelte:head>
    <title>Nate Lu</title>
    <!-- TODO: Add meta tags -->
</svelte:head>

<div class="flex flex-col min-h-screen">
    <Toast></Toast>
    {#if $loading === true}
        <Spinner></Spinner>
    {/if}
    <Navbar/>
    <main class="flex-grow">
        <slot/>
    </main>
    <Points/>
    <Footer/>
</div>


<style>

</style>