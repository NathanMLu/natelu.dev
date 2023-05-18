<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import wavesPlaceholder from "$lib/images/waves-placeholder.png";
</script>

<div class="flex items-center justify-center mt-20">
    <div class="flex justify-center w-1/2">
        <div class="h-min">
            <h1 class="font-bold text-7xl">
                Nate Lu
            </h1>
            <h3 class="font-semibold text-lg mt-2 w-60">
                Hello! I'm a Software Engineer, Student, and Entrepreneur.
            </h3>
            <a href="#contact">
                <Button customClass="mt-10 w-min">
                    Contact
                </Button>
            </a>
        </div>
    </div>

    <div class="flex justify-center align-baseline w-1/2">
        <img class="w-3/5" src={wavesPlaceholder} alt="waves placeholder">
    </div>
</div>

<style>

</style>