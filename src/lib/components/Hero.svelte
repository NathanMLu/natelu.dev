<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Wave from "$lib/components/Wave.svelte";
</script>

<div id="hero-container" class="flex flex-col items-center justify-center lg:flex-row">
    <div class="flex justify-center w-full lg:w-1/2">
        <div class="h-min">
            <h1 class="font-bold text-7xl">
                Nate Lu
            </h1>
            <h3 class="font-semibold text-lg mt-2 w-80 lg:w-60">
                Hello! I'm a Software Engineer, Student, and Entrepreneur.
            </h3>
            <a href="#contact">
                <Button customClass="mt-10 w-min">
                    Contact
                </Button>
            </a>
        </div>
    </div>

    <div class="mt-10 lg:mt-0">
        <Wave/>
    </div>
</div>


<style>
    #hero-container {
        margin-top: 25vh;
        margin-bottom: 25vh;
    }

    @media (max-width: 640px) {
        #hero-container {
            margin-top: 10vh;
            margin-bottom: 10vh;
        }
    }

    @media (min-width: 640px) and (max-width: 1024px) {
        #hero-container {
            margin-top: 15vh;
            margin-bottom: 15vh;
        }
    }
</style>