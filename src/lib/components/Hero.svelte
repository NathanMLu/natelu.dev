<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import wavesPlaceholder from "$lib/images/waves-placeholder.png";
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

    <div class="flex justify-center align-baseline w-full mt-10 lg:mt-0 lg:w-1/2">
        <img class="w-2/3 lg:w-3/5" src={wavesPlaceholder} alt="waves placeholder">
    </div>
</div>


<style>
    #hero-container {
        margin-top: 15vh;
        margin-bottom: 10vh;
    }

</style>