<script lang="ts">
    export let flat = false;
    export let lowercase = false;
    export let disabled = false;
</script>

<button
        class:flat={flat}
        class:lowercase={lowercase}
        class:disabled={disabled}
        class="{$$restProps.class} whitespace-nowrap w-min font-semibold drop-shadow-lg border-0 cursor-pointer text-lg rounded-lg px-3 py-1.5 hover:opacity-90 {disabled ? 'opacity-50 cursor-not-allowed' : ''}"
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
</style>