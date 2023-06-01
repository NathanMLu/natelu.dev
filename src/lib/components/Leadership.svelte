<script lang="ts">
    import Curve from '$lib/images/bg-curve.svg';
    import LeadershipCard from "$lib/components/LeadershipCard.svelte";

    import {Leadership} from "$lib/models/leadership";
</script>

<div id="leadership-container">
    <img alt="Leadership Background" src="{Curve}" class="w-full -scale-x-100" />
    <div class="bg-white lg:px-24 px-12 pb-12">
        <h2 class="text-dark font-bold text-3xl mb-12">Leadership</h2>

        <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-8 gap-12">
            {#each Leadership as leadership}
                <LeadershipCard
                        image="{leadership.image}"
                        title="{leadership.title}"
                        description="{leadership.description}"
                        link="{leadership.link}">
                </LeadershipCard>
            {/each}
        </div>
    </div>
</div>

<style>
    #leadership-container {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    @media (max-width: 1024px) {
        #leadership-container {
            margin-top: 5vh;
            margin-bottom: 5vh;
        }
    }

    @media (max-width: 764px) {
        #leadership-container {
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }
    }
</style>


