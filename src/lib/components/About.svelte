<script lang="ts">
    import AboutCode from '$lib/images/about-code.svg';
    import AboutEntrepreneur from '$lib/images/about-entrepreneur.svg';
    import AboutSchool from '$lib/images/about-school.svg';
    import Curve from '$lib/images/bg-curve.svg';
    import Button from "$lib/components/Button.svelte";
    import AboutCard from "$lib/components/AboutCard.svelte";
</script>

<div id="about-container">
    <img alt="About background" src="{Curve}" class="w-full">
    <div class="bg-white flex justify-between align-middle px-16 pb-16 gap-20">
        <div class="flex justify-start flex-col pt-8">
            <h2 class="text-dark font-bold text-3xl">About Me</h2>
            <p class="mt-4 text-dark">I am a creative problem solver with a passion for using technology to make a positive
                impact. Through my
                experience in full-stack development, machine learning, and data analysis, I strive to create innovative
                solutions that push boundaries and make a difference in people's lives.</p>
            <a href="/about">
                <Button lowercase="true" customClass="whitespace-nowrap mt-8">More About Me!</Button>
            </a>
        </div>
        <div class="flex justify-evenly align-middle gap-8">
            <AboutCard image="{AboutCode}"
                       headline="Software Engineer"
                       text="I’m an Associate Software Engineer at CoreLogic, a leader in the property solutions and intelligence industry.">
            </AboutCard>
            <AboutCard image="{AboutSchool}"
                       headline="Student"
                       text="I am a junior at UT Austin studying Electrical and Computer Engineering & Entrepreneurship, with a focus on Data Science.">
            </AboutCard>
            <AboutCard image="{AboutEntrepreneur}"
                       headline="Entrepreneur"
                       text="I manage Neurofix, an e-commerce business that refurbishes used consumer electronics with over $60,000 in sales.">
            </AboutCard>
        </div>
    </div>
</div>
<!--<div class="relative mt-5 mb-20">-->
<!--    <div class="absolute inset-0 flex justify-between items-end flex-row mx-16 gap-5">-->

<!--        <p class="text-primary text-2xl w-2/3 bg-red-500">Hello World</p>-->
<!--    </div>-->
<!--</div>-->

<style>
    #about-container {
        margin-top: 0;
        margin-bottom: 15vh;
    }

    @media (max-width: 1024px) {
        #about-container {
            margin-top: 0;
            margin-bottom: 10vh;
        }
    }

    @media (max-width: 640px) {
        #about-container {
            margin-top: 0;
            margin-bottom: 5vh;
        }
    }

</style>
