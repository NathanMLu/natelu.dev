<script lang="ts">
    import {browser} from '$app/environment';
    import {onMount} from "svelte";

    let darkMode = false;

    function handleSwitchDarkMode() {
        darkMode = !darkMode;

        localStorage.setItem('theme', darkMode ? 'dark' : 'light');

        darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }

    if (browser) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });
    }

    onMount(() => {
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            darkMode = true;
        }
    });

</script>

<div class="fixed bottom-7 right-12">
    <input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" class="invisible"/>
    <label for="theme-toggle"
           class="inline-block cursor-pointer h-9 w-9 absolute rounded-full duration-300 content-['']"></label>
</div>

<style>
    #theme-toggle:not(:checked) + label {
        background-color: theme('colors.orange');
    }

    #theme-toggle:checked + label {
        box-shadow: inset -12px -10px 1px 1px theme('colors.black');
        background: transparent;
    }
</style>

