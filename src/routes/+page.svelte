<script lang="ts">
    import type {PageData} from './$types';
    import {onMount} from "svelte";

    import About from "$lib/components/About.svelte";
    import type {User} from "$lib/models/user";
    import Hero from "$lib/components/Hero.svelte";
    import {user} from "$lib/models/stores";

    export let data: PageData;

    onMount(async () => {
        user.set(data.props.user as User);
    });
</script>

<Hero></Hero>
<About></About>
