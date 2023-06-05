<script lang="ts">
    import {Projects} from "$lib/models/projects";
    import ProjectsCard from "$lib/components/ProjectsCard.svelte";
</script>

<div id="projects">
    <h2 class="text-dark font-bold text-3xl mt-16 mb-12 text-center">My Projects</h2>

    <div class="flex flex-col align-middle justify-center lg:mx-12 md:mx-8 mx-2 gap-y-16">
        {#each Projects as project, index}
            <ProjectsCard image={project.image}
                          title={project.title}
                          description={project.description}
                          githubLink={project.githubLink}
                          devpostLink={project.devpostLink}
                          youtubeLink={project.youtubeLink}
                          liveLink="{project.liveLink}"
                          languages={project.languages}
                          isDefault="{index % 2 === 0}">
            </ProjectsCard>
        {/each}
    </div>
</div>

<style>
    #projects {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    @media (max-width: 1024px) {
        #projects {
            margin-top: 5vh;
            margin-bottom: 5vh;
        }
    }

    @media (max-width: 764px) {
        #projects {
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }
    }
</style>


