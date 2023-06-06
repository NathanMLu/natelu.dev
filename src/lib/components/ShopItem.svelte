<script lang="ts">
    import coin from '$lib/images/coin.svg'

    export let selected: boolean = false;
    export let name: string = '';
    export let image: string = '';
    export let price: number = 0;
    export let description: string = '';

    const flipItem = () => {

    }
</script>

<div class="flex flex-col items-center border-light-blue p-4 border-2 rounded-2xl border-dashed hover:border-dark-blue" on:click={flipItem}>
    <div class="rounded-2xl px-2 py-1.5 flex flex-row justify-between self-end bg-white items-center">
        <img alt="NateLu Coin" class="w-8" src="{coin}"/>
        <h5 class="text-xl font-bold ml-2">{price}</h5>
    </div>
    <div class="flex flex-col items-center">
        <img alt="{name}" class="w-36" src="{image}"/>
        <h5 class="text-2xl font-semibold">{name}</h5>
    </div>
</div>