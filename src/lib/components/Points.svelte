<script lang="ts">
    import coin from '$lib/images/coin.svg'

    export let points: number;
</script>

<div class="rounded-xl gap-1 bg-grey px-3 py-1.5 flex flex-row items-center fixed bottom-0 left-0 ml-8 mb-4 drop-shadow-lg">
    <img src="{coin}" alt="NateLu Coin" class="w-8">
    <h5 class="text-2xl font-bold ml-2">{points}</h5>
</div>