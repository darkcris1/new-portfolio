<script>
    export let title = undefined
    export let description = undefined
    export let url = undefined
    export let image = undefined
    export let canonical = undefined
    export let type = undefined
    export let noindex = undefined
    export let nofollow = undefined
    export let layout = false
    const metas = Object.entries($$restProps)
  </script>
  
  <svelte:head>
  
    {#if title}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
    {/if}
  
    {#if description}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    {/if}
  
    {#if image}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />
    {/if}
  
    {#if url}
      <meta name="og:url" content={url} />
      <meta name="twitter:url" content={url} />
      {#if !canonical}
        <link rel="canonical" href={url} />
      {/if}
    {/if}
  
    {#if canonical}
      <link rel="canonical" href={canonical} />
    {/if}
  
    {#if !layout}
      <meta
        name="robots"
        content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      <meta
        name="googlebot"
        content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      {#if type}
        <meta content={type} name="og:type" />
      {:else}
        <meta content="website" name="og:type" />
      {/if}
    {/if}
  
    {#each metas as [name, content]}
      <meta {name} {content} />
    {/each}
  
    <slot />
  </svelte:head>