<script lang="ts">
    import coin from '$lib/images/coin.svg';
    import riverbed from '$lib/images/river/riverbed.png';
    import Button from "$lib/components/Button.svelte";
</script>

<div id="river">
    <div class="bg-gradient-to-b from-secondary to-green">
        <div class="flex flex-col items-start justify-center lg:px-24 px-12 pt-32 pb-28">
            <h1 class="text-3xl font-bold text-dark inline-flex items-center mb-6">Spend your <img src="{coin}" class="w-14 mx-3" alt="coin"> tokens and add to the riverbed!</h1>
            <Button color="primary">Nate's Shop</Button>
        </div>
    </div>
<!--    <canvas id="riverbed" class="w-full h-64" width="1000" height="1000">-->
<!--        <img src="{riverbed}" class="w-full" alt="riverbed">-->
<!--    </canvas>-->
</div>