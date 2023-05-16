<script lang="ts">
    import type {PageData} from './$types';

    import About from "$lib/components/About.svelte";
    import Points from "$lib/components/Points.svelte";
    import Button from "$lib/components/Button.svelte";

    export const addPoints = () => {
        // testMe()
    }


    export let data: PageData;
</script>

<Button color="primary" on:click={addPoints}>Add Points</Button>
<About/>
<h1>{data.props.user.name}</h1>

<Points points={data.props.user.points} />

<style>

</style>