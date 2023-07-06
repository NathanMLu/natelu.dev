<script lang="ts">
    import type {FloatingCoins} from "$lib/models/floatingcoins";
    import {COIN_MAX_OPACITY, COIN_MAX_VEL, COIN_MIN_OPACITY, COIN_MIN_VEL} from "$lib/models/floatingcoins";
    import {user} from "$lib/models/stores";
    import coinImg from '$lib/images/coin.svg';
    import {onMount} from "svelte";
    import {completeLevel, getPoints} from "$lib/utils/userUtils";

    let coins: FloatingCoins[] = [];
    const levelNumber = 11;

    const populateCoins = () => {
        for (let i = 0; i < 5; i++) {
            coins.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * (COIN_MAX_OPACITY - COIN_MIN_OPACITY) + COIN_MIN_OPACITY,
                velX: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
                velY: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
            });
        }
        coins = [...coins];
    }

    const repopulateCoin = (index: number) => {
        coins[index] = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * (COIN_MAX_OPACITY - COIN_MIN_OPACITY) + COIN_MIN_OPACITY,
            velX: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
            velY: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
        }
    }

    onMount(() => {
        populateCoins();
        coinLoop();
    });

    const coinLoop = () => {
        coins.forEach((coin, index) => {
            coin.x += coin.velX;
            coin.y += coin.velY;

            if (coin.x < 0 || coin.x > window.innerWidth) {
                coin.velX *= -1;
            }
            if (coin.y < 0 || coin.y > window.innerHeight) {
                coin.velY *= -1;
            }

            coin.opacity = Math.max(coin.opacity - 0.001, 0);
            if (coin.opacity === 0) {
                repopulateCoin(index);
            }
        });

        coins = [...coins];
        requestAnimationFrame(coinLoop);
    }

    const giveOneCoin = () => {
        completeLevel(levelNumber, $user).then(() => {
            getPoints($user).then((points: number) => {
                user.update((u) => {
                    u.points = points;
                    return u;
                });
            });
        });
    }
</script>

<div class="absolute inset-0 flex flex-col justify-center items-center">
    {#each coins as coin}
        <img src={coinImg} alt="coin" class="absolute cursor-pointer w-8"
             style="left: {coin.x}px; top: {coin.y}px; opacity: {coin.opacity}" on:click={giveOneCoin}>
    {/each}
</div>