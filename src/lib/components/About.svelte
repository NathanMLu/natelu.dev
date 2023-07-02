<script lang="ts">
    import Curve from '$lib/images/bg-curve.svg';
    import Button from "$lib/components/Button.svelte";
    import AboutCard from "$lib/components/AboutCard.svelte";
    import {quizzes} from "$lib/models/quiz";
    import {quiz} from "$lib/models/stores";

    import {About, AboutDescription} from "$lib/models/about";

    const openAboutQuiz = (name: string) => {
        // find the associated quiz, then set the quiz store to that quiz so that it will show
        const aboutQuiz = quizzes.find(quiz => quiz.name === name);
        if (aboutQuiz) {
            quiz.set({
                ...aboutQuiz,
                show: true
            });
        }
    }
</script>

<div id="about">
    <img alt="About background" src="{Curve}" class="w-full">
    <div class="bg-white flex justify-start lg:justify-between align-middle lg:flex-row lg:px-24 px-12 pb-16 gap-20 flex-col">
        <div class="flex justify-start flex-col lg:pt-8 pt-16">
            <h2 class="text-dark font-bold text-3xl">About Me</h2>
            <p class="mt-4 text-dark">{AboutDescription}</p>
            <a href="/about">
                <Button lowercase="true" customClass="whitespace-nowrap mt-8">More About Me!</Button>
            </a>
        </div>
        <div class="flex gap-12 lg:gap-6 justify-evenly align-middle flex-col md:flex-row">
            {#each About as about}
                <AboutCard
                        on:showQuiz={() => openAboutQuiz(about.name)}
                        name="{about.name}"
                        image="{about.image}"
                        headline="{about.headline}"
                        link="{about.link}"
                        linkText="{about.linkText}"
                        text="{about.text}">
                </AboutCard>
            {/each}
        </div>
    </div>
</div>

<style>
    #about {
        margin-top: 15vh;
        margin-bottom: 0;
    }

    @media (max-width: 1024px) {
        #about {
            margin-top: 10vh;
            margin-bottom: 0;
        }
    }

    @media (max-width: 768px) {
        #about {
            margin-top: 5vh;
            margin-bottom: 0;
        }
    }
</style>
