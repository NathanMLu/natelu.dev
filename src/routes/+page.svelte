<script lang="ts">
    import type {PageData} from './$types';
    import {onMount} from "svelte";

    import {user} from "$lib/models/stores";
    import type {User} from "$lib/models/user";

    import About from "$lib/components/About.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Leadership from "$lib/components/Leadership.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Wait from "$lib/components/Wait.svelte";
    import Activities from "$lib/components/Activities.svelte";
    import River from "$lib/components/River.svelte";
    import Contact from "$lib/components/Contact.svelte";

    export let data: PageData;

    onMount(async () => {
        user.set(data.props.user as User);
    });
</script>

<Hero></Hero>
<About></About>
<Skills></Skills>
<Leadership></Leadership>
<Projects></Projects>
<Wait></Wait>
<Activities></Activities>
<River></River>
<Contact></Contact>