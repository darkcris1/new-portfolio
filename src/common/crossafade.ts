import { crossfade as cf } from "svelte/transition";
import { quintOut } from 'svelte/easing';

export function headerKey(key){
    return "header" + key;
}

export const [send,receive] = cf({
    duration: d => Math.sqrt(d * 500)
})