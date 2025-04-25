<script lang="ts">
  import "../app.css";
  import Icon from "@iconify/svelte";
  import { goto } from "$app/navigation";
  import ThemeSwitchModal from "$lib/modals/ThemeSwitchModal.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>My Static WebSite</title>
</svelte:head>

<!-- ヘッダー -->
<header class="p-4 shadow-md bg-surface-100-900">
  <div class="container mx-auto flex justify-between items-center">
    <h1 class="text-xl font-bold">My Static WebSite</h1>
    <nav>
      <ul class="flex space-x-4">
        <li><ThemeSwitchModal /></li>
        <li>
          <button type="button" class="btn preset-filled" onclick={() => goto("/")}>
            <Icon icon="mdi:home" class="size-4" />
            <span>Home</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</header>

<main class="container mx-auto p-4">
  {@render children()}
</main>
