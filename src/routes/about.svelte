<script context="module">
    export const prerender = true;
    export function load(){
        return {    
            props: {    
                age: (new Date().getFullYear() - new Date("03/01/2002").getFullYear())
            }
        }
    }
</script>

<script>
    import Seo from "$src/components/SEO.svelte";
    import PageHeader from "../components/PageHeader.svelte";

    export let age;
</script>

<Seo
    title="About - Portfolio"
    description="Brief Introduction Of Myself"
    image="/assets/my-picture-transparent.png"
/>
<PageHeader title="About" description="Brief Introduction Of Myself" />

<section class="p-5">
    <div class="container flex flex-col md:flex-row items-center gap-x-10 justify-center">
        <div>
            <img
                src="/assets/my-picture-transparent.png"
                alt="Cris Fandiño Transparent"
            />
        </div>
        <article class="w-[700px] max-w-full text-center md:text-left">
            <h2>
                Hi! I am Cris Fandiño Jr.
            </h2>
            <p>
                I am {age} years old from the Philippines a self taught web
                developer . I build websites according to web standards
                guidelines. I have experience few of the languages and
                frameworks such as HTML, CSS ,Javascript, Nodejs, Bootstrap,
                TailwindCSS, Sass, React/Next.js and Svelte.
            </p>
            <p>
                At first I intended to be a web designer but my pulse was truly
                more on programming. I tried back-end development since it was
                more on programming and building API from sratch using nodejs
                and mongoDB.
            </p>
            <p>
                When building websites, I usually use Next.js as a default
                default framework for faster development. I built some my own
                libraries in npm as you can see on my<!-- -->
                <a href="https://github.com/darkcris1">Github</a> Page
            </p>
        </article>
    </div>
</section>


<style lang="scss">
    img {
        width: auto;
        height: auto;
        @apply pointer-events-none;
    }
    article {
        h2 {
            @apply text-3xl; 
            @apply text-center; 
            @apply py-5; 
        }
        p {
            @apply my-5;
            @apply text-base;
            @apply md:text-lg;
        }
        a {
            @apply underline;
            @apply text-primary;
        }
    }
</style>