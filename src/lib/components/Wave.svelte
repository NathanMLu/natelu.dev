<div class="header">
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 24 90 28" preserveAspectRatio="none" shape-rendering="auto">
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

    <div class="content bg-wave-four">
    </div>
</div>

<style>
    .header {
        position: relative;
        text-align: center;
        /*background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);*/
        color: white;
    }

    .waves {
        position: relative;
        /*width: 60%;*/
        height: 30vh;
        min-height: 100px;
        max-height: 150px;
        /*add shadow*/
        /*box-shadow: 0 0 20px rgba(0,0,0,0.1);*/
    }

    .content {
        position: relative;
        height: 20vh;
        text-align: center;
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