<script lang="ts">
    import type {PageData} from './$types';

    import About from "$lib/components/About.svelte";


    export let data: PageData;
</script>

<!--<About/>-->
<h1>{data.props.sessionId}</h1>

<style>

</style>