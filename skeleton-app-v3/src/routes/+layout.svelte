<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>My Static WebSite</title>
</svelte:head>

{@render children()}
