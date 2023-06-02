<script lang="ts">
    import {Activities} from "$lib/models/activities";
    import ActivitiesCard from "$lib/components/ActivitiesCard.svelte";
</script>

<div id="activities-container">
    <div class="lg:px-24 px-12 pb-12">
        <h2 class="text-dark font-bold text-3xl mb-12">Activities</h2>
        <div class="grid gap-12 activities">
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

    .activities {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1536px) {
        .activities {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 1024px) {
        #activities-container {
            margin-top: 2.5vh;
            margin-bottom: 5vh;
        }

        .activities {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 764px) {
        #activities-container {
            margin-top: 2.5vh;
            margin-bottom: 5vh;
        }

        .activities {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>