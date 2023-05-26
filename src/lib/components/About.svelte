<script lang="ts">
    import AboutCode from '$lib/images/about-code.svg';
    import AboutEntrepreneur from '$lib/images/about-entrepreneur.svg';
    import AboutSchool from '$lib/images/about-school.svg';
    import Curve from '$lib/images/bg-curve.svg';
    import Button from "$lib/components/Button.svelte";
    import AboutCard from "$lib/components/AboutCard.svelte";

    let msg = "Hello testing World fatty!";
    // write code that will remove testing and fatty from msg
    let removeWords = ["testing", "fatty"];

    function removeWordsFromMsg(msg, removeWords) {
        let newMsg = msg;
        for (let i = 0; i < removeWords.length; i++) {
            newMsg = newMsg.replace(removeWords[i], "");
        }
        return newMsg;
    }
</script>

<div id="about-container">
    <img alt="About background" src="{Curve}" class="w-full">
    <div class="bg-white flex justify-between align-middle px-16 pb-16 gap-20">
        <div class="flex justify-start flex-col pt-8">
            <h2 class="text-dark font-bold text-3xl">About Me</h2>
            <p class="mt-4 text-dark">I am a creative problem solver with a passion for using technology to make a
                positive
                impact. Through my
                experience in full-stack development, machine learning, and data analysis, I strive to create innovative
                solutions that push boundaries and make a difference in people's lives.</p>
            <a href="/about">
                <Button lowercase="true" customClass="whitespace-nowrap mt-8">More About Me!</Button>
            </a>
        </div>
        <div class="flex justify-evenly align-middle">
            <AboutCard image="{AboutCode}"
                       headline="Software Engineer"
                       link="https://www.corelogic.com/"
                       linkText="CoreLogic"
                       text="I am a Associate Software Engineer at CoreLogic- a leader in the property solutions and intelligence industry.">
            </AboutCard>
            <AboutCard image="{AboutSchool}"
                       headline="Student"
                       link="https://www.utexas.edu/"
                       linkText="UT Austin"
                       text="I am a junior at UT Austin studying Electrical and Computer Engineering & Entrepreneurship, with a focus on Data Science.">
            </AboutCard>
            <AboutCard image="{AboutEntrepreneur}"
                       headline="Entrepreneur"
                       link="https://www.ebay.com/usr/neurofix"
                       linkText="Neurofix"
                       text="I manage Neurofix, an ecommerce business that refurbishes used consumer electronics with over $60,000 in sales.">
            </AboutCard>
        </div>
    </div>
</div>

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
