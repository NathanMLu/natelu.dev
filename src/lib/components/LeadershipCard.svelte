<script lang="ts">
    export let image = "";
    export let title = "";
    export let description = "";
    export let link = "";
</script>

<div class="rounded-xl bg-card-bg drop-shadow-lg w-60">
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} class="w-full h-32 object-cover rounded-t-xl"/>
    </a>
    <div class="mt-4 px-4 pt-2 pb-4">
        <h3 class="text-xl font-semibold text-black">{title}</h3>
        <p class="text-dark">{description}</p>
    </div>

</div>