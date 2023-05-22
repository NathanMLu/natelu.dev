<script lang="ts">
    import aboutBackground from '$lib/images/about-background.svg';
    import Button from "$lib/components/Button.svelte";
</script>

<div class="relative mt-5 mb-20">
    <img alt="About background" src="{aboutBackground}" class="h-full">
    <div class="absolute inset-0 flex justify-between items-end flex-row mx-16 gap-5">
        <div class="w-1/3 flex align-middle justify-start flex-col">
            <h2 class="text-dark font-bold text-3xl">About Me</h2>
            <p class="mt-4">I am a creative problem solver with a passion for using technology to make a positive impact. Through my
                experience in full-stack development, machine learning, and data analysis, I strive to create innovative
                solutions that push boundaries and make a difference in people's lives.</p>

            <Button lowercase="true" customClass="whitespace-nowrap mt-8">More About Me!</Button>

        </div>
        <p class="text-primary text-2xl w-2/3 bg-red-500">Hello World</p>
    </div>
</div>
