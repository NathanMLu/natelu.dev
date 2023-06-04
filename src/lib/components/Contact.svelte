<script lang="ts">
    import {jokes} from "$lib/models/contact";
    import pfp from '$lib/images/contact/pfp.jpg';
    import Button from "$lib/components/Button.svelte";

    let joke = jokes[Math.floor(Math.random() * jokes.length)];

    const toggleJoke = () => {
        joke = jokes[Math.floor(Math.random() * jokes.length)];
    }
</script>

<div id="contact-container" class="flex justify-evenly items-center lg:flex-row md:flex-row flex-col">
    <div class="lg:w-2/5 lg:mr-14 px-8">
        <h1 class="text-3xl text-dark font-semibold">Contact Me</h1>
        <h3 class="text-primary font-semibold text-xl mt-2 cursor-pointer" on:click={toggleJoke}>
            ({joke.joke.substring(0, joke.joke.indexOf(joke.punchline))}
            <i>{joke.punchline}</i>
            {joke.joke.substring(joke.joke.indexOf(joke.punchline) + joke.punchline.length)})
        </h3>

        <form class="mt-5" action="/api/contact" method="POST">
            <div class="flex flex-col">
                <label for="name" class="text-dark text-lg font-semibold font-esteban">Name</label>
                <input type="text" name="name" id="name" class="rounded-md p-2 mt-1" required/>
            </div>
            <div class="flex flex-col mt-3">
                <label for="email" class="text-dark text-lg font-semibold font-esteban">Email</label>
                <input type="email" name="email" id="email" class="rounded-md p-2 mt-1" required/>
            </div>
            <div class="flex flex-col mt-3 mb-7">
                <label for="message" class="text-dark text-lg font-semibold font-esteban">Message</label>
                <textarea name="message" id="message" rows="7" maxlength="500"
                          class="rounded-md p-2 mt-1"></textarea>
            </div>
            <Button type="submit" color="dark">
                Send message
            </Button>
        </form>
    </div>
    <div class="lg:mt-0 mt-8 mb-4 px-8">
        <img src="{pfp}" alt="profile pic" class="lg:w-72 md:w-72 rounded-md drop-shadow-xl profile-pic">
    </div>
</div>

<style>
    .profile-pic {
        transition: transform 0.3s ease-in-out;
        filter: grayscale(15%);
    }

    .profile-pic:hover {
        transform: scale(1.01) translateY(-10px);
        filter: grayscale(0%);
    }

    #contact-container {
        margin-top: 10vh;
        margin-bottom: 5vh;
    }

    @media (max-width: 1024px) {
        #contact-container {
            margin-top: 5vh;
            margin-bottom: 2.5vh;
        }
    }

    @media (max-width: 764px) {
        #contact-container {
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }
    }

    .font-esteban {
        font-family: 'Esteban', serif !important;
    }
</style>