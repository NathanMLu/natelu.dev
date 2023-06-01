<script lang="ts">
    import ProjectsCard from "$lib/components/ProjectsCard.svelte";
    import LiquidOverlay from '$lib/images/liquid-overlay.jpg';
</script>

<div id="projects-container">
    <h2 class="text-dark font-bold text-3xl mt-16 mb-12 text-center">My Projects</h2>

    <div class="flex align-middle justify-center flex-row mx-12 gap-y-16">
        <!-- Todo: Load from constants file (figure out best way to do this in sveltekit) -->
        <ProjectsCard image={LiquidOverlay}
                      title="Liquid Overlay"
                      description="Liquid Overlay is a first-person shooter game overlay that improves accessibility for the disabled community, transcribing voice chat, displaying game sounds as visual cues, and enabling auto-translation for users who speak different languages. This project won 1st place at Liquid Hacks, and was developed using audio manipulation techniques in collaboration with an amazing team of four."
                      githubLink="https://github.com/NathanMLu/LiquidOverlay"
                      devpostLink="https://devpost.com/software/liquidoverlay"
                      youtubeLink="https://youtu.be/-OF2GF7EBwA"
                      languages={['google cloud', 'figma', 'c', 'kotlin', 'compose', 'winAPI']}>
        </ProjectsCard>
    </div>
</div>

<style>
    #projects-container {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    @media (max-width: 1024px) {
        #projects-container {
            margin-top: 5vh;
            margin-bottom: 5vh;
        }
    }

    @media (max-width: 764px) {
        #projects-container {
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }
    }
</style>


