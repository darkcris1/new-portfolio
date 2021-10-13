<script lang="ts">
    import { browser } from "$app/env";
    import { createEventDispatcher, onMount } from "svelte";
    import { fade } from "svelte/transition";
    export let show = false;
    export let toggler: () => void;
    const dispatch = createEventDispatcher()
    function handleKeyup(e: KeyboardEvent) {
        if (e.key === "Escape" && show) {
            toggler && toggler();
            dispatch("close")
        }
    }

    $: if (browser) {
        if (show) {
            window.addEventListener("keyup", handleKeyup);
            document.documentElement.style.overflow = "hidden";
        } else {
            window.removeEventListener("keyup", handleKeyup);
            document.documentElement.style.overflow = "initial";
            dispatch("close")
        }
    }
</script>

{#if show}
    <div
        class="z-[999] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
    >
        <div
            on:click={toggler}
            transition:fade={{ duration: 100 }}
            class=" cursor-pointer backdrop-filter backdrop-blur-sm fixed inset-0 bg-[hsla(0,0%,100%,.418)]"
        />
        <div class="z-50">
            <slot {toggler} />
        </div>
    </div>
{/if}
