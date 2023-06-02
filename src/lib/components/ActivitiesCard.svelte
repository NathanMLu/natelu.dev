<script lang="ts">
    export let image = '';
    export let headline = '';
    export let text = '';
</script>

<div>
    <h1 class="text-xl text-dark font-semibold lg:whitespace-nowrap">{headline}</h1>
    <div class="flip-card card-dimensions mt-4">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src={image} alt="image" class="card-dimensions " />
            </div>
            <div class="flip-card-back bg-dark-blue px-6 py-4 overflow-y-scroll">
                <p class="text-white">{text}</p>
            </div>
        </div>
    </div>
</div>

<style>
    .flip-card {
        background-color: transparent;
        perspective: 1000px;
    }

    .card-dimensions {
        width: 45vh;
        height: 25vh;
    }

    @media (max-width: 1024px) {
        .card-dimensions {
            width: 40vh;
            height: 22.5vh;
        }
    }

    @media (max-width: 764px) {
        .card-dimensions {
            width: 35vh;
            height: 22.5vh;
        }
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    .flip-card-back {
        transform: rotateY(180deg);
    }
</style>