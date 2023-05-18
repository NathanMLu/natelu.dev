<script lang="ts">
    import { onMount } from 'svelte';

    let viewBoxWidth = 120;

    onMount(() => {
        updateViewBox();
    });

    const updateViewBox = () => {
        const width = window.innerWidth;
        if (width > 1024) {
            viewBoxWidth = 120;
        } else if (width > 768) {
            viewBoxWidth = 100;
        } else {
            viewBoxWidth = 65;
        }
    }

</script>

<svelte:window on:resize={updateViewBox} />
<div class="mr-0 lg:mr-32">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 24 {viewBoxWidth} 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
        </defs>
        <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" class="fill-wave-one"/>
            <use xlink:href="#gentle-wave" x="48" y="3" class="fill-wave-two"/>
            <use xlink:href="#gentle-wave" x="48" y="5" class="fill-wave-three"/>
            <use xlink:href="#gentle-wave" x="48" y="7" class="fill-wave-four"/>
        </g>
    </svg>

    <div class="content bg-wave-four drop-shadow-2xl">
    </div>
</div>

<style>

    .waves {
        height: 30vh;
        min-height: 100px;
        max-height: 150px;
    }

    .content {
        height: 15vh;
    }

    /* Animation */
    .parallax > use {
        animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
    }

    .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }

    .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }

    .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }

    .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
    }

    @keyframes move-forever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }

</style>