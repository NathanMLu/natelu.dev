<script lang="ts">

    import Button from "$lib/components/Button.svelte";

    let selectedLanguage: string = "C#";


</script>

<div id="skills-container" class="flex flex-col justify-center items-center lg:flex-row lg:pl-36 lg:justify-between">
    <div class="">
        <div id="skills-logos" class="border-4 rounded-2xl border-dark-blue">

        </div>
        <Button lowercase="true" color="dark" customClass="mt-8">Full List</Button>
    </div>

    <div class="flex align-middle justify-center flex-col flex-grow">
        <h2 class="text-dark font-bold text-3xl text-center">
            My Skills
        </h2>
        <h4 class="text-primary text-2xl font-semibold text-center mt-10">
            {selectedLanguage}
        </h4>

    </div>

</div>

<style>
    #skills-container {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    #skills-logos {
        width: 60vw;
        height: 30vw;
    }

    @media (max-width: 1024px) {
        #skills-container {
            margin-top: 5vh;
            margin-bottom: 5vh;
        }

        #skills-logos {
            width: 80vw;
            height: 40vw;
        }
    }

    @media (max-width: 640px) {
        #skills-container {
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }

        #skills-logos {
            width: 90vw;
            height: 110vw;
        }
    }
</style>