<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import wavesPlaceholder from "$lib/images/waves-placeholder.svg";
</script>

<!--if it's too small, allow it the image to drop below the text-->
<div class="flex align-middle justify-center mt-20 gap-10">
    <div class="flex align-middle justify-center flex-col">
        <h1 class="font-bold text-7xl">
            Nate Lu
        </h1>
        <h3 class="font-semibold text-lg mt-2 w-2/5">
            Hello! I'm a Software Engineer, Student, and Entrepreneur.
        </h3>
<!--        make the button only take the width it needs-->
        <a href="/resume">
            <Button customClass="mt-10 w-min">
                Resume
            </Button>
        </a>

    </div>
    <div class="flex align-middle justify-center">
        <img class="w-4/5" src={wavesPlaceholder} alt="waves placeholder">
    </div>
</div>

<style>

</style>