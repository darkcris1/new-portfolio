import { crossfade as cf } from "svelte/transition";
import { quintOut } from 'svelte/easing';

export function headerKey(key){
    return "header" + key;
}

export const [send,receive] = cf({
    duration: d => Math.sqrt(d * 200),
    fallback(node, params) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
            duration: 600,
            easing: quintOut,
            css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
        };
    }
})