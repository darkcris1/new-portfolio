<script lang="ts">
    import PageHeader from "../components/PageHeader.svelte";

</script>
<PageHeader title={"Page Not Found"} description={"The page you are looking for did not exist"}>
    <div class="mt-5">
        <a on:click={()=> history.back()} href="/" class="btn btn-sm btn-primary">Go Back</a>
    </div>
</PageHeader>