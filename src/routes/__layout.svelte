<script>
    import Nav from "../components/Nav.svelte";
    import "../app.scss";
    import "../scss/style.scss";
    import Footer from "$src/components/Footer.svelte";
</script>
<button
    data-tip="Themes"
    class="btn btn-circle btn-info lg:btn-lg shadow-2xl z-50 fixed bottom-6 right-6 tooltip tooltip-left"
>
    <i class="fas fa-palette" />
</button>

<Nav />
<slot />

<Footer />
