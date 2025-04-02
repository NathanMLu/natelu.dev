<script lang="ts">
    import Curve from '$lib/images/bg-curve-two.png';
    import Button from "$lib/components/Button.svelte";
    import {socials} from "$lib/models/contact";
</script>

<div id="wait-container">
    <img alt="top curve" src="{Curve}" class="w-full scale-y-[-1]">
    <div class="bg-white lg:pl-36 md:pl-16 pl-8 pt-12 pb-8">
        <h2 class="text-dark font-bold text-3xl mb-8">Don't stop here. There's more to see!</h2>
        <a href="{socials.github}" target="_blank" rel="noopener noreferrer">
            <Button class="bg-primary text-white">More Projects</Button>
        </a>
    </div>
    <img alt="bottom curve" src="{Curve}" class="w-full -scale-x-100">
</div>

<style>
    #wait-container {
        margin-top: 10vh;
        margin-bottom: 5vh;
    }

    @media (max-width: 1024px) {
        #wait-container {
            margin-top: 5vh;
            margin-bottom: 2.5vh;
        }
    }

    @media (max-width: 764px) {
        #wait-container {
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }
    }
</style>


