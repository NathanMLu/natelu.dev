<script>
    import "../app.css";
    import "iconify-icon"
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Nate Lu</title>
    <!-- TODO: Add meta tags -->
</svelte:head>

<div class="flex flex-col min-h-screen">
    <Navbar/>
    <main class="flex-grow">
        <slot/>
        <!--        <div style="height: 1000px"></div>-->
    </main>
    <Footer/>
</div>


<style>

</style>