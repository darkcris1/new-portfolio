export const LANGUAGES = {

}


const LANGUAGES_INDEX = [
    {
        bg: "orange",
        percent: 96,
        title: "html",
        docsite: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        bg: "linear-gradient(171deg, rgb(30, 46, 243), rgb(220, 0, 251))",
        percent: 90,
        title: "CSS/SASS",
        docsite: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        bg: "linear-gradient(171deg, rgb(247, 255, 35), rgb(73, 220, 40))",
        percent: 80,
        title: "Javascript/Node",
        docsite: "https://developer.mozilla.org/en-US/docs/Web/javascript"
    },
    {
        bg: "linear-gradient(to right, #3d6998,  #ffd43b)",
        percent: 55,
        title: "Python",
        docsite: "https://docs.python.org/3/"
    },
    
];
const FRAMEWORK_INDEX = [
    {
        bg: "green",
        percent: 90,
        title: "Django",
        docsite: "https://docs.djangoproject.com/en/3.2/"
    },
    {
        bg: "linear-gradient(171deg, rgb(120, 225, 243), rgba(0, 0, 0, 0.7))",
        percent: 70,
        docsite: "https://reactjs.org/",
        title: "React/Next.js"
    },
    {
        bg: "linear-gradient(171deg, rgb(249, 174, 64), rgb(73, 220, 40))",
        percent: 60,
        title: "Svelte/Sveltekit",
        docsite: "https://kit.svelte.dev/"
    },
    {
        bg: "linear-gradient(171deg, #ff0100, hsl(0,100%,40%))",
        percent: 70,
        title: "Angular",
        docsite: "https://kit.svelte.dev/"
    },
];

export const WORK_CONFIGS = [
    { title: "Languages", config: LANGUAGES_INDEX },
    { title: "Frameworks", config: FRAMEWORK_INDEX },
];

export const SERVICES_CONFIG = [
    {
        text: "Frontend Development",
        type: "backend",
        active: false
    },
    {
        text: "Backend Development",
        type: "frontend",
        active: true
    },
    {
        text: "Blogging",
        type: "blogging",
        active: false
    },
]