<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Wave from "$lib/components/Wave.svelte";
</script>

<div id="hero-container" class="flex flex-col items-center justify-center lg:flex-row">
    <div class="flex justify-center w-full lg:w-1/2">
        <div class="h-min">
            <h1 class="font-bold dark:text-white text-7xl lg:pl-0 md:pl-0 pl-2">
                Nate Lu
            </h1>
            <h3 class="font-semibold dark:text-light-blue text-lg mt-2 w-80 lg:w-60 lg:pl-0 md:pl-0 pl-2">
                Hello! I'm a Software Engineer, Student, and Entrepreneur.
            </h3>
            <a href="#contact" class="lg:pl-0 md:pl-0 pl-2">
                <Button class="bg-primary text-white mt-10">
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
        margin-bottom: 20vh;
    }

    @media (max-width: 1024px) {
        #hero-container {
            margin-top: 15vh;
            margin-bottom: 10vh;
        }
    }

    @media (max-width: 764px) {
        #hero-container {
            margin-top: 10vh;
            margin-bottom: 5vh;
        }
    }

</style>