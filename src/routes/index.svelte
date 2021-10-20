<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("https://api.github.com/users/darkcris1");
        const githubData = await res.json();
        return {
            props: {
                githubData,
            },
        };
    };
</script>

<script lang="ts">
    import Svg from "../components/Svg.svelte";
    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";
    import { send, receive } from "../common/crossafade";
    import PageHeader from "../components/PageHeader.svelte";
    import Skillbars from "../components/Skillbars.svelte";
    import { WORK_CONFIGS, SERVICES_CONFIG } from "../common/config";
    import { onMount, tick } from "svelte";
    import Modal from "../components/Modal.svelte";
    import { tweened } from "svelte/motion";
    import Contact from "../components/Contact.svelte";
    import Seo from "$src/components/SEO.svelte";

    export let githubData;

    let services = SERVICES_CONFIG;
    let configs = WORK_CONFIGS;
    let seviceHeight;
    let serviceEl: HTMLElement;
    let showCV = false;

    const height = tweened(0);
    function toggleShowCv() {
        showCV = !showCV;
    }
    function toggle() {
        configs = configs.reverse();
    }

    async function changeService(type, i) {
        services = services.map((s) => {
            if (s.type === type) {
                s.active = true;
            } else {
                s.active = false;
            }
            return s;
        });

        const s = services.splice(i, 1);
        services.unshift(s[0]);
        services = services;
        await tick();

        seviceHeight = getComputedStyle(serviceEl).height;
    }
    onMount(() => {
    });
    let gDriveResume = `https://drive.google.com/u/0/uc?id=1GhRvrLb3uc1p6IWcZY-R1lUgGJaUQTfK&export=download`;
    let resumeViewer = `https://view.officeapps.live.com/op/embed.aspx?src=${gDriveResume}`;
</script>

<Seo 
    title="Home - Portfolio" 
    description="Hi I am cris this is my personal portfolio"
    image="/assets/my-picture-transparent.png"
    />
<PageHeader
    title="Hey! I am Cris."
    description="I create custom websites to help businesses to their standards"
>
    <div class="mt-5">
        {#if !showCV}
            <button
                in:send={{ key: "btn2" }}
                out:receive={{ key: "btn1" }}
                on:click={toggleShowCv}
                class="btn btn-sm btn-primary mr-2">View CV</button
            >
        {/if}
        <a href="/contact" class="btn btn-sm btn-primary">Get In Touch</a>
    </div>
</PageHeader>

<Modal show={showCV} toggler={toggleShowCv}>
    <div
        in:send={{ key: "btn1" }}
        out:receive={{ key: "btn2" }}
        class="bg-base-100 shadow-md rounded-box overflow-hidden max-w-[90%] max-h-[90%]"
        style="height: 600px; width: 800px"
    >
        <div class="flex flex-row-reverse p-3">
            <a class="btn btn-primary" href={gDriveResume} target="_blank"
                ><i class="fas fa-download mr-2" /> Download CV</a
            >
        </div>
        <iframe
            class="h-full w-full"
            title="My Resume"
            src={resumeViewer}
            frameborder="0"
        />
    </div>
</Modal>

<section class="py-6">
    <div class="container">
        <h2
            on:click={toggle}
            class="cursor-pointer text-4xl text-center text-primary"
        >
            Skills
        </h2>
        <div class="grid gap-x-16 grid-cols-1 md:grid-cols-2 px-5 w-full mt-10">
            {#each configs as c (c)}
                <div animate:flip>
                    <Skillbars {...c} />
                </div>
            {/each}
        </div>
    </div>
</section>

<div
    style={`height: ${seviceHeight}; overflow: hidden`}
    class="transition-all duration-300"
>
    <section bind:this={serviceEl} class="py-14 px-5 bg-neutral ">
        <div class="container">
            <div
                class="grid md:grid-cols-2 grid-cols-1 gap-y-5 place-items-center"
            >
                <div class="text-neutral-content">
                    <h2 class="text-center text-3xl cursor-pointer">
                        Services
                    </h2>
                    <ul class="mt-5">
                        {#each services as sConfig, i (sConfig)}
                            <li
                                animate:flip
                                on:click={() => changeService(sConfig.type, i)}
                                class="text-lg py-2 cursor-pointer hover:opacity-80"
                            >
                                <svg
                                    class="svg-inline--fa fa-check-circle fa-w-16 text-primary mr-2"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="far"
                                    data-icon="check-circle"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    data-fa-i2svg=""
                                    ><path
                                        fill="currentColor"
                                        d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                    /></svg
                                >{sConfig.text}
                            </li>
                        {/each}
                    </ul>
                </div>

                <div>
                    {#each services as sConfig (sConfig)}
                        {#if sConfig.active}
                            <div in:fly={{ x: 100 }}>
                                <Svg type={sConfig.type} />
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </section>
</div>

<section class="py-14 px-5">
    <div class="container">
        <h2 class="text-5xl text-primary text-center">Works</h2>

        <div
            class="mx-auto card w-10/12 lg:card-side bordered shadow-xl mt-16 "
        >
            <figure>
                <img alt="sample" src={githubData.avatar_url} />
            </figure>
            <div class="card-body">
                <a
                    href="https://github.com/darkcris1/"
                    class="card-title text-2xl"
                    >github/darkcris1
                </a>
                <p>
                    {githubData.bio}
                </p>

                <div class="card-actions flex justify-between">
                    <div data-tip="Location" class="tooltip">
                        <i class="fas fa-location" />
                        {githubData.location}
                    </div>
                    <div data-tip="Gists" class="tooltip">
                        <i class="fa fa-code" />
                        {githubData.public_gists}
                    </div>
                    <div data-tip="Repositories" class="tooltip">
                        <i class="fa fa-book" />
                        {githubData.public_repos}
                    </div>
                </div>
            </div>
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-20 relative"
        >
            <div class="card bordered shadow-lg">
                <figure>
                    <img
                        src="https://picsum.photos/id/1005/400/250"
                        alt="card"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Tappi
                        <div class="badge mx-2 badge-info">NEW</div>
                    </h2>
                    <p>
                        Rerum reiciendis beatae tenetur excepturi aut pariatur
                        est eos. Sit sit necessitatibus veritatis sed molestiae
                        voluptates incidunt iure sapiente.
                    </p>
                    <div class="justify-end card-actions">
                        <button class="btn btn-info">More info</button>
                    </div>
                </div>
            </div>
            <div class="card bordered shadow-lg">
                <figure>
                    <img
                        src="https://picsum.photos/id/1005/400/250"
                        alt="card"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Tappi
                        <div class="badge mx-2 badge-accent">NEW</div>
                    </h2>
                    <p>
                        Rerum reiciendis beatae tenetur excepturi aut pariatur
                        est eos. Sit sit necessitatibus veritatis sed molestiae
                        voluptates incidunt iure sapiente.
                    </p>
                    <div class="justify-end card-actions">
                        <button class="btn btn-accent">More info</button>
                    </div>
                </div>
            </div>
            <div class="card bordered shadow-lg">
                <figure>
                    <img
                        src="https://picsum.photos/id/1005/400/250"
                        alt="card"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Tappi
                        <div class="badge mx-2 badge-primary">NEW</div>
                    </h2>
                    <p>
                        Rerum reiciendis beatae tenetur excepturi aut pariatur
                        est eos. Sit sit necessitatibus veritatis sed molestiae
                        voluptates incidunt iure sapiente.
                    </p>
                    <div class="justify-end card-actions">
                        <button class="btn btn-primary">More info</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-14 px-5 bg-gradient-to-tr from-info to-accent text-center">
    <div class="container">
        <h2 class="text-base-100 text-3xl md:text-5xl font-bold">
            Want to see more about my projects ?
        </h2>
        <a class="btn btn-info btn-lg mt-10" href="https://github.com/darkcris1"
            >Visit Github</a
        >
    </div>
</section>

<Contact />
