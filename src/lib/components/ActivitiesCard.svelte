<script lang="ts">
    export let image = '';
    export let headline = '';
    export let text = '';
</script>

<div class="card">
    <h1 class="text-2xl text-dark font-semibold">{headline}</h1>
    <div class="card-content w-full mt-4">
        <div class="front">
            <img src={image} alt="image" class="h-72 w-full" />
        </div>
        <div class="back bg-dark-blue px-6 py-4">
            <p class="text-white">{text}</p>
        </div>
    </div>
</div>

<style>
    .card-content {
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .card:hover .card-content {
        transform: rotateY(180deg);
        transition: transform 0.5s;
    }

    .back, .front {
        backface-visibility: hidden;
    }

    .back {
        transform: rotateY(180deg);
    }

</style>