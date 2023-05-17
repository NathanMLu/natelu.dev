<script lang="ts">
    import type {PageData} from './$types';
    import {onMount} from "svelte";

    import About from "$lib/components/About.svelte";
    import Points from "$lib/components/Points.svelte";
    import Button from "$lib/components/Button.svelte";
    import {playerPoints} from "$lib/models/stores";
    import type {User} from "$lib/models/User";

    export let data: PageData;
    let user: User = data.props.user as User;

    onMount(async () => {
        playerPoints.set(user.points);
    });

    const levelOne = () => {
        // call the api POST /api/user/level,
        fetch('/api/user/level', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                level: 1,
                sessionId: user.sessionId
            })
        })
        .then(() => {
            fetch(`/api/user?sessionId=${user.sessionId}`)
                .then(res => res.json())
                .then((data) => {
                    user.points = data.points;
                    playerPoints.set(user.points);
                });
        });
    }
</script>

<Button color="primary" on:click={levelOne}>Level One</Button>
<About/>
<h1>{user.name}</h1>

<Points/>
