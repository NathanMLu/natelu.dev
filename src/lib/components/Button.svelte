<script>
    export let color = 'primary';
    export let flat = false;
    export let inverse = false;
    export let lowercase = false;
    export let customClass = '';
    export let disabled = false;
</script>

<button
        class:flat={flat}
        class:inverse={inverse}
        class:lowercase={lowercase}
        class:disabled={disabled}
        class="{color} whitespace-nowrap w-min font-semibold drop-shadow-lg border-0 cursor-pointer text-lg rounded-lg px-3 py-1.5 hover:opacity-90 {customClass} {disabled ? 'opacity-50 cursor-not-allowed' : ''}"
        on:click>
    <slot></slot>
</button>

<style>
    .disabled {
        opacity: 0.5 !important;
        cursor: not-allowed;
    }

    .flat {
        box-shadow: none;
    }

    .lowercase {
        text-transform: lowercase;
    }

    .primary {
        background: theme('colors.primary');
        color: white;
    }

    .secondary {
        background: theme('colors.secondary');
        color: theme('colors.dark');
    }

    .dark {
        background: theme('colors.dark');
        color: white;
    }

    .grey {
        background: theme('colors.grey');
        color: theme('colors.dark');
    }

    .primary.inverse {
        color: theme('colors.primary');
        background: white;
        border: 2px solid theme('colors.primary');
    }

    .secondary.inverse {
        color: theme('colors.secondary');
        background: white;
        border: 2px solid theme('colors.secondary');
    }

    .dark.inverse {
        color: theme('colors.dark');
        background: white;
        border: 2px solid theme('colors.dark');
    }

    .grey.inverse {
        color: theme('colors.grey');
        background: white;
        border: 2px solid theme('colors.grey');
    }
</style>