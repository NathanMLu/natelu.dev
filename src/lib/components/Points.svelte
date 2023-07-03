<script lang="ts">
    import coin from '$lib/images/coin.svg'
    import {user} from "$lib/models/stores";
    import {toast} from "$lib/models/stores";

    let points: number;
    let addingPoints: boolean = false;
    let initialSubscribed: boolean = false;

    user.subscribe((user) => {
        if (user.points > points && initialSubscribed) {
            addingPoints = true;
            setTimeout(() => {
                addingPoints = false;
            }, 1000);

            toast.set({
                heading: "+" + (user.points - points) + " point" + (user.points - points > 1 ? "s" : "") + "!",
                message: "",
                show: true,
            });
        }

        points = user.points;
        if (points >= 0) initialSubscribed = true;
    });

    export const displayHelpMessage = () => {
        toast.set({
            heading: "Earn coins!",
            message: "Complete challenges and spend them in the shop.",
            show: true,
        });
    }
</script>

<div class="cursor-pointer rounded-xl gap-1 bg-grey px-3 py-1.5 flex flex-row items-center fixed bottom-4 left-4 drop-shadow-lg" on:mouseenter={displayHelpMessage}>
    <img alt="NateLu Coin" class="w-8 animate-spin {addingPoints ? 'adding-points' : ''}" src="{coin}"/>
    {#if points >= 0}
        <h5 class="text-xl font-bold ml-2">{points}</h5>
    {/if}
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
