<script lang="ts">
    import {jokes, socials} from "$lib/models/contact";

    import pfp from '$lib/images/contact/pfp.jpg';
    import Button from "$lib/components/Button.svelte";

    let joke = jokes[Math.floor(Math.random() * jokes.length)];

    let name = '';
    let email = '';
    let message = '';
    let error = '';
    let sent = false;

    const toggleJoke = () => {
        joke = jokes[Math.floor(Math.random() * jokes.length)];
    }

    const sendMessage = () => {
        if (name === '' || email === '' || message === '') {
            error = 'Please fill out all fields';
            return;
        }
        const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
        if (!emailRegex.test(email)) {
            error = 'Please enter a valid email';
            return;
        }

        if (message.length > 500) {
            error = 'Message must be less than 500 characters';
            return;
        }

        if (name.length > 50) {
            error = 'Name must be less than 50 characters';
            return;
        }

        error = '';

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, message})
        }).then(res => {
            if (res.status === 200) {
                name = '';
                email = '';
                message = '';
                sent = true;
            } else {
                error = 'Something went wrong, please try again later';
            }
        }).catch(err => {
            error = err;
        })
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

        <div class="mt-5">
            <div class="flex flex-col">
                <label for="name" class="text-dark text-lg font-semibold">Name</label>
                <input type="text" name="name" id="name" class="rounded-md p-2 mt-1 font-esteban" required bind:value={name}/>
            </div>
            <div class="flex flex-col mt-3">
                <label for="email" class="text-dark text-lg font-semibold">Email</label>
                <input type="email" name="email" id="email" class="rounded-md p-2 mt-1 font-esteban" required bind:value={email}/>
            </div>
            <div class="flex flex-col mt-3 mb-2">
                <label for="message" class="text-dark text-lg font-semibold">Message</label>
                <textarea name="message" id="message" rows="7" maxlength="500"
                          class="rounded-md p-2 mt-1 font-esteban" bind:value={message}></textarea>
            </div>
            {#if error}
                <p class="text-red-500 text-lg font-semibold">{error}</p>
            {/if}
            {#if sent}
                <p class="text-primary text-lg font-semibold">Message sent!</p>
            {/if}
            <Button color="dark" customClass="mt-5" on:click={sendMessage}>
                Send message
            </Button>
        </div>
    </div>
    <div class="lg:mt-0 mt-8 mb-4 px-8">
        <img src="{pfp}" alt="profile pic" class="lg:w-72 md:w-72 rounded-md drop-shadow-xl profile-pic">
        <div class="flex justify-center gap-4 mt-5 items-center">
            <a href="{socials.linkedin}" target="_blank" rel="noopener noreferrer">
                <iconify-icon icon="devicon:linkedin" class="text-4xl text-linkedin hover:brightness-105" width="30px" height="30px"></iconify-icon>
            </a>
            <a href="{socials.github}" target="_blank" rel="noopener noreferrer">
                <iconify-icon icon="akar-icons:github-fill" class="text-4xl text-github hover:brightness-105" width="30px" height="30px"></iconify-icon>
            </a>
            <a href="{socials.youtube}" target="_blank" rel="noopener noreferrer">
                <iconify-icon icon="akar-icons:youtube-fill" class="text-4xl text-youtube hover:brightness-105" width="35px" height="35px"></iconify-icon>
            </a>
        </div>
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