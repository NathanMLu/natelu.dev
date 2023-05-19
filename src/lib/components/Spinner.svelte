<script lang="ts">
    export let dx = 50;
    export let dy = 50;
</script>

<div id="spinner" style="top: {dy}%; left: {dx}%">
    <div class="lds-dual-ring"></div>
</div>

<style>
    #spinner {
        position: fixed;
        z-index: 9999;
    }


    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }

    .lds-dual-ring:after {
        content: "";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 6px solid transparent;
        border-radius: 50%;
        border-top-color: #fff;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>