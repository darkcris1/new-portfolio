export const LANGUAGES = {

}

function addActiveProp(array: any[]){
    return array.map((obj)=>{
        obj.active = false;
        return obj;
    })  
}

const LANGUAGES_INDEX = addActiveProp([
    {
        bg: "orange",
        percent: 96,
        title: "html",
        docsite: "https://html.com/"
    },
    {
        bg: "linear-gradient(171deg, rgb(30, 46, 243), rgb(220, 0, 251))",
        percent: 90,
        title: "CSS/SASS",
        docsite: "https://sass-lang.com/"
    },
    {
        bg: "linear-gradient(171deg, rgb(247, 255, 35), rgb(73, 220, 40))",
        percent: 80,
        title: "Javascript/Node",
        docsite: "https://nodejs.org/en/"
    },
    {
        bg: "linear-gradient(to right, #3d6998,  #ffd43b)",
        percent: 55,
        title: "Python",
        docsite: "https://docs.python.org/3/"
    },
    
]);
const FRAMEWORK_INDEX = addActiveProp([
    {
        bg: "green",
        percent: 90,
        title: "Django",
        docsite: "https://www.djangoproject.com/start/overview/"
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
        docsite: "https://angular.io/"
    },
]);

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