<script context="module" lang="ts">
    let currentActive;
</script>

<script lang="ts">
    import { receive, send } from "../common/crossafade";

    import { flip } from "svelte/animate"
    import { fly } from "svelte/transition"
    import Modal from "./Modal.svelte";
    interface Config{
        title: string,
        bg: string,
        percent: number,
        docsite: string,
        active: boolean
    }
    export let config: Config[] = []
    export let title = ""


    function reverse(){
        if (config.length === 1) return;
        
        config = config.reverse()
    }
    
    let showDocsite = false
    function toggleShowDocsite(){
        showDocsite = !showDocsite
    }

    function handleClick(c: Config) {
        currentActive = c;
        config = config.map(o=>{
            o.active = false;
            return o;
        })

        c.active = true;
    }

    function trueAllConfig(){
        config = config.map(o=>{
            o.active = false;
            return o;
        })
    }
</script>


<div>
    <h3 on:click={reverse} class="text-primary text-2xl text-center cursor-pointer">{title}</h3>
    <ul>
        {#each config as c (c)}
            <li 
                animate:flip
                on:click={()=> {toggleShowDocsite(); handleClick(c)}} class="my-5 cursor-pointer">
            
            <h4 class="text-primary uppercase">{c.title}</h4>
                    {#if !c.active}
                    <div  
                        in:send|local={{key: "docsite2" }}
                        out:receive|local={{key: "docsite1"}} 
                        class="border h-10 w-full border-primary rounded-box shadow-lg">
                        <div 
                            style={`background: ${c.bg}; width: ${c.percent}%`} 
                            class="h-full bg-gray-500 rounded-[inherit]"></div>
                    </div>
                    {/if}
            </li>
         
        {/each}
    </ul>
</div>

<Modal on:close={trueAllConfig} show={showDocsite} toggler={toggleShowDocsite}>
    <div 
        in:send|local={{key: "docsite1" }}
        out:receive|local={{key: "docsite2"}} 
        class="shadow-md bg-base-100 rounded-box overflow-hidden max-w-[90%] max-h-[90%]" style="height: 600px; width: 800px">

      <iframe 
        class="h-full w-full"
        title="My Resume" 
        src={currentActive.docsite} frameborder="0"></iframe>
    </div>
</Modal>