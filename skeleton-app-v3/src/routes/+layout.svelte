<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import { goto } from "$app/navigation";
  import ThemeSwitchModal from "$lib/modals/ThemeSwitchModal.svelte";
  import { applyTheme } from "$lib/stores/theme";

  let { children } = $props();

  let isLoaded = $state(false);
  onMount(async () => {
    function wait(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await Promise.all([applyTheme(), wait(500)]);
    isLoaded = true;
  });
</script>

<svelte:head>
  <title>My Static WebSite</title>
</svelte:head>

{#if isLoaded}
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
{:else}
  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="font-mono text-black text-[32px]">Now Loading...</div>
  </div>
{/if}
