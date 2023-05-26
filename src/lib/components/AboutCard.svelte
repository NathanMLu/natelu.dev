<script>
    export let image = "";
    export let headline = "";
    export let text = "";
</script>

<div class="bg-transparent">
    <div class="rounded-xl bg-secondary w-16 h-16 flex items-center justify-center">
        <img src={image} alt="image" class="w-10 h-10"/>
    </div>
    <h2 class="font-semibold text-lg whitespace-nowrap mt-2">
        {headline}
    </h2>
    <p class="text-dark">
        {text}
    </p>
</div>