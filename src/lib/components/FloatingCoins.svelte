<script lang="ts">
    import type {FloatingCoins} from "$lib/models/floatingcoins";
    import {
        COIN_MAX_OPACITY,
        COIN_MAX_OPACITY_CHANGE,
        COIN_MAX_VEL,
        COIN_MIN_OPACITY_CHANGE,
        COIN_MIN_VEL
    } from "$lib/models/floatingcoins";
    import {user} from "$lib/models/stores";
    import coinImg from '$lib/images/coin.svg';
    import {onMount} from "svelte";
    import {completeLevel, getPoints} from "$lib/utils/userUtils";

    let coins: FloatingCoins[] = [];
    const levelNumber = 11;

    const populateCoins = () => {
        for (let i = 0; i < 4; i++) {
            coins.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * COIN_MAX_OPACITY,
                velX: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
                velY: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
                opacityIncreasing: true,
            });
        }
        coins = [...coins];
    };

    const repopulateCoin = (index: number) => {
        coins[index] = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            velX: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
            velY: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
            opacityIncreasing: true,
        }
    }

    const populateCoin = () => {
        coins.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            velX: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
            velY: Math.random() * (COIN_MAX_VEL - COIN_MIN_VEL) + COIN_MIN_VEL,
            opacityIncreasing: true,
        });
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

            if (coin.opacityIncreasing) {
                coin.opacity += Math.random() * (COIN_MAX_OPACITY_CHANGE - COIN_MIN_OPACITY_CHANGE) + COIN_MIN_OPACITY_CHANGE;
                if (coin.opacity > COIN_MAX_OPACITY) {
                    coin.opacityIncreasing = false;
                }
            } else {
                coin.opacity -= Math.random() * (COIN_MAX_OPACITY_CHANGE - COIN_MIN_OPACITY_CHANGE) + COIN_MIN_OPACITY_CHANGE;
                if (coin.opacity < 0) {
                    repopulateCoin(index);
                }
            }
        });

        coins = [...coins];
        requestAnimationFrame(coinLoop);
    }

    const giveOneCoin = (coin: FloatingCoins) => {
        completeLevel(levelNumber, $user).then(() => {
            getPoints($user).then((points: number) => {
                user.update((u) => {
                    u.points = points;
                    return u;
                });
            });
        });

        coins = coins.filter((c) => c !== coin);
        setTimeout(() => {
            populateCoin();
        }, 3000);

    }
</script>

{#each coins as coin}
    <img src={coinImg} alt="coin" class="fixed cursor-pointer w-8 overflow-hidden"
         style="left: {coin.x}px; top: {coin.y}px; opacity: {coin.opacity}" on:click={() => giveOneCoin(coin)}/>
{/each}

