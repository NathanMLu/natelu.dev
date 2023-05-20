<script lang="ts">
    import coin from '$lib/images/coin.svg'
    import {user} from "$lib/models/stores";
    import Toast from "$lib/components/Toast.svelte";

    let points: number;
    let pointsDiff: number;
    let addingPoints: boolean = false;
    let showToast: boolean = false;
    let initialLoad: boolean = true;

    user.subscribe((user) => {
        if (user.points > points) {
            pointsDiff = user.points - points;

            addingPoints = true;
            setTimeout(() => {
                addingPoints = false;
                initialLoad = false;
            }, 1000);

            if (!initialLoad) {
                showToast = true;
                setTimeout(() => {
                    showToast = false;
                }, 3000);
            }
        }

        points = user.points;
    });
</script>

<Toast points={pointsDiff} isVisible={showToast}/>
<div class="cursor-pointer rounded-xl gap-1 bg-grey px-3 py-1.5 flex flex-row items-center fixed bottom-4 left-6 drop-shadow-lg">
    <img alt="NateLu Coin" class="w-8 animate-spin {addingPoints ? 'adding-points' : ''}" src="{coin}"/>
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
        30% {
            transform: scale(2);
        }
        40%, 60% {
            transform: rotate(-20deg) scale(2);
        }
        50% {
            transform: rotate(20deg) scale(2);
        }
        70% {
            transform: rotate(0deg) scale(2);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
