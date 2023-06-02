<script lang="ts">
    import {Activities} from "$lib/models/activities";
    import ActivitiesCard from "$lib/components/ActivitiesCard.svelte";
</script>

<div id="activities-container">
    <div class="lg:px-24 px-12 pb-12">
        <h2 class="text-dark font-bold text-3xl mb-12">Activities</h2>

        <div class="flex justify-between items-start gap-8">
            {#each Activities as activity}
                <ActivitiesCard
                        image={activity.image}
                        headline={activity.headline}
                        text={activity.text}>
                </ActivitiesCard>
            {/each}
        </div>
    </div>
</div>

<style>
    #activities-container {
        margin-top: 5vh;
        margin-bottom: 10vh;
    }

    @media (max-width: 1024px) {
        #activities-container {
            margin-top: 2.5vh;
            margin-bottom: 5vh;
        }
    }

    @media (max-width: 764px) {
        #activities-container {
            margin-top: 2.5vh;
            margin-bottom: 5vh;
        }
    }
</style>