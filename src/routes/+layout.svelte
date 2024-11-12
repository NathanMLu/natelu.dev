<script lang="ts">
    import "../app.css";
    import "iconify-icon"

    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Points from "$lib/components/Points.svelte";
    import Spinner from "$lib/components/Spinner.svelte";
    import {loading} from "$lib/models/stores";
    import Toast from "$lib/components/Toast.svelte";
    import Quiz from "$lib/components/Quiz.svelte";
    import FloatingCoins from "$lib/components/FloatingCoins.svelte";
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import Toggler from "$lib/components/Toggler.svelte";

    inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
    <title>Nate Lu</title>
    <meta name="description" content="Nate Lu's personal website"/>
    <meta name="keywords"
          content="Nate Lu, Nathan Lu, Nate, Nathan, Lu, natelu, nathanlu, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website, nathan lu website, nate lu website, nathan lu personal website, nate lu personal website"/>
    <meta name="author" content="Nate Lu"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta property="og:title" content="Nate Lu"/>
    <meta property="og:description" content="Nate Lu's personal website"/>
    <meta property="og:image" content="https://natelu.dev/favicon.png"/>
    <meta property="og:url" content="https://natelu.dev"/>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Nate Lu" />
</svelte:head>

<div class="flex flex-col min-h-screen">
    {#if $loading === true}
        <Spinner></Spinner>
    {/if}

    <Toast/>
    <Quiz/>
    <Navbar/>
    <main class="flex-grow">
        <slot/>
    </main>
    <Points/>
    <Footer/>
<!--    <FloatingCoins/>-->
    <Toggler/>
</div>


<style>

</style>

