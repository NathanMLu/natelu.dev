<script lang="ts">
    import type {PageData} from './$types';

    import About from "$lib/components/About.svelte";
    import Points from "$lib/components/Points.svelte";
    import Button from "$lib/components/Button.svelte";
    import {playerPoints} from "$lib/models/stores";

    export let data: PageData;

    playerPoints.set(Number(data.props.user.points));

    export const addPoints = () => {
        playerPoints.update(n => n + 1);
    }

</script>

<Button color="primary" on:click={addPoints}>Add Points</Button>
<About/>
<h1>{data.props.user.name}</h1>

<Points />

<style>

</style>