<script>
    import { flip } from "svelte/animate";

    import PageHeader from "../components/PageHeader.svelte";
    import Skillbars from "../components/Skillbars.svelte";
    const config1 = [
        {
            bg: "orange",
            percent: 96,
            title: "html",
        },
        {
            bg: "linear-gradient(171deg, rgb(30, 46, 243), rgb(220, 0, 251))",
            percent: 90,
            title: "CSS/SASS",
        },
        {
            bg: "linear-gradient(171deg, rgb(247, 255, 35), rgb(73, 220, 40))",
            percent: 80,
            title: "Javascript/Node",
        },
        
    ];
    const config2 = [
        {
            bg: "green",
            percent: 90,
            title: "Django",
        },
        {
            bg: "green",
            percent: 70,
            title: "Django",
        },
    ];

    let configs = [
        { title: "Languages", config: config1 },
        { title: "Frameworks", config: config2 },
    ];


    function toggle(){
        configs = configs.reverse()
    }
</script>

<PageHeader
    title="About"
    description="Brief Introduction Of Myself"
>
</PageHeader>

