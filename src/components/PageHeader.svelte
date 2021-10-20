<script lang="ts">
import { fade } from "svelte/transition";

    import { send, receive, headerKey } from "../common/crossafade"
    export let title: string = ""
    export let description: string = ""
    export let bg: string = "https://crisfandino.ml/assets/fr.png"
    let container: HTMLElement;

</script>


<style>
    header {
        background: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.4)),linear-gradient(rgba(103,146,137,.7),rgba(103,146,137,.7)),var(--url) no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
    }

</style>

<header 
    style={`--url: url(${bg})`} 
    class="md:px-32 px-5  pt-56 pb-36 bg-base-200 sm:text-left text-center bg-center">
    <div class="container ">
        <h1     
            class="text-5xl w-[fit-content] text-white mx-auto sm:mx-0">
            {title}
            <div class="mt-2 w-[110%] bg-gray-200 h-[1px]">
            </div>
        </h1>
        <p 
            class="mt-2 text-white">{description}</p>
        <slot></slot>
    </div>
 
</header>