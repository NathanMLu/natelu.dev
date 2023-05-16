<script lang="ts">
    import type {PageData} from './$types';

    import About from "$lib/components/About.svelte";
    import Points from "$lib/components/Points.svelte";


    export let data: PageData;
</script>

<About/>
<h1>{data.props.user.name}</h1>

<Points points={data.props.user.points} />

<style>

</style>