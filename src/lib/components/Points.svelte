<script lang="ts">
    import coin from '$lib/images/coin.svg'
    import {playerPoints} from "$lib/models/stores";

    let points: number;

    playerPoints.subscribe((value) => {
        points = Number(value);

        console.log(points)
    })

    // try to only include db connections in api route
    // try and see if we can bind api to the user interface
    // will need to keep track of levels that user has completed through the api
    // will create endpoint user/level
    // api will update boolean for each level for each user
    // remove points endpoint for user
    // on front end, we should keep track of levels completed through user interface in +page.svelte

</script>

<div class="cursor-pointer rounded-xl gap-1 bg-grey px-3 py-1.5 flex flex-row items-center fixed bottom-0 left-0 ml-8 mb-6 drop-shadow-lg">
    <img src="{coin}" alt="NateLu Coin" class="w-8">
    <h5 class="text-xl font-bold ml-2">{points}</h5>
</div>

