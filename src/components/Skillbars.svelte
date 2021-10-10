<script lang="ts">
    import { flip } from "svelte/animate"
    interface Config{
        title: string,
        bg: string,
        percent: number
    }
    export let config: Config[] = []
    export let title = ""


    function reverse(){
        if (config.length === 1) return;
        
        config = config.reverse()
    }
</script>


<div>
    <h3 on:click={reverse} class="text-primary text-2xl text-center cursor-pointer">{title}</h3>
    <ul>
        {#each config as c (c)}
            <li animate:flip class="my-5">
                <h4 class="text-primary uppercase">{c.title}</h4>
                <div class="border h-10 w-full border-primary rounded-box shadow-lg">
                    <div 
                        style={`background: ${c.bg}; width: ${c.percent}%`} 
                        class="h-full bg-gray-500 rounded-[inherit]"></div>
                </div>
            </li>
        {/each}
    </ul>
</div>