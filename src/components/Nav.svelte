<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    let show = false;
    const navigations = [
        {
            text: "Home",
            href: "/",
        },
        {
            text: "About",
            href: "/about",
        },
        {
            text: "Blog",
            href: "/blog",
        },
        {
            text: "Contact",
            href: "/contact",
        },
    ];

    let isNav = false;
    let nav: HTMLElement;
    onMount(() => {
        var prevScrollpos = window.pageYOffset;
        function handleScroll() {
            var currentScrollPos = window.pageYOffset;
            if (window.pageYOffset > 150) {
                isNav = true;
            } else {
                isNav = false;
            }


            if (window.pageYOffset < 150) return;
            // Hide nav 
            if (prevScrollpos > currentScrollPos) {
                nav.style.transform = "translateY(0)";
            } else {
                nav.style.transform = "translateY(-100%)";
            }
            prevScrollpos = currentScrollPos;
        }
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<div
    bind:this={nav}
    class:bg-neutral-focus={isNav}
    class="fixed top-0 transition-transform duration-300 mx-auto w-full navbar shadow-lg text-neutral-content mb-0 z-50"
>
    <div class="container">
        <div class="flex-1 px-2 mx-2">
            <a href="/" class="text-2xl font-bold">
                Cr<span class="text-primary">is...</span>
            </a>
        </div>
        <div class="flex-none hidden px-2 mx-2 lg:flex">
            <div class="flex items-stretch">
                {#each navigations as nav}
                    <a
                        href={nav.href}
                        class:bg-primary={$page.path === nav.href}
                        class="mx-2 btn btn-ghost btn-sm rounded-btn"
                    >
                        {nav.text}
                    </a>
                {/each}
            </div>
        </div>
        <div class="flex-none lg:hidden">
            <button
                on:click={() => (show = !show)}
                class="btn btn-square btn-ghost"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    </div>
</div>

{#if show}
    <div
        on:click={() => (show = !show)}
        transition:fade
        class="z-[999] cursor-pointer backdrop-filter backdrop-blur-sm fixed inset-0 bg-[hsla(0,0%,100%,.418)]"
    />

    <div
        transition:fly={{ x: 245 }}
        class="z-[1000] fixed top-0 right-0 h-screen w-[245px] bg-base-200 shadow-2xl"
    >
        <ul>
            {#each navigations as nav}
                <li class="p-4">
                    <a
                        href={nav.href}
                        class:active={$page.path === nav.href}
                        class="btn btn-ghost btn-sm block"
                    >
                        {nav.text}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style></style>
