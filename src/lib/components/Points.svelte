<script lang="ts">
    import coin from '$lib/images/coin.svg'
    import {playerPoints} from "$lib/models/stores";

    let points: number;
    let addingPoints: boolean = false;

    playerPoints.subscribe((value) => {
        if (value > points) {
            addingPoints = true;
            setTimeout(() => {
                addingPoints = false;
            }, 1000);
        }

        points = Number(value);
    })
</script>

<div class="cursor-pointer rounded-xl gap-1 bg-grey px-3 py-1.5 flex flex-row items-center fixed bottom-0 left-0 ml-8 mb-6 drop-shadow-lg">
    <img src="{coin}" alt="NateLu Coin" class="w-8 animate-spin {addingPoints ? 'adding-points' : ''}"/>
    <h5 class="text-xl font-bold ml-2">{points}</h5>
</div>

<style>
    .animate-spin {
        animation: spin 3s linear infinite;
    }

    .adding-points {
        animation: adding-points 1s ease infinite !important;
    }
    @keyframes adding-points {
        30% { transform: scale(2); }
        40%, 60% { transform: rotate(-20deg) scale(2); }
        50% { transform: rotate(20deg) scale(2); }
        70% { transform: rotate(0deg) scale(2); }
        100% { transform: scale(1); }
    }
</style>
