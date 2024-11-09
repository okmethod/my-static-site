<script lang="ts">
  import "../app.postcss";
  import { AppBar } from "@skeletonlabs/skeleton";
  import { Toast, Modal, initializeStores } from "@skeletonlabs/skeleton";
  initializeStores();

  // Floating UI for Popups
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  import { onMount } from "svelte";
  import { applyTheme, setTheme } from "$lib/stores/theme";
  import { navigateTo } from "$lib/utils/navigation.client";

  let isLoaded = false;
  onMount(async () => {
    function wait(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await Promise.all([applyTheme(), wait(500)]);
    isLoaded = true;
  });

  function toggleTheme() {
    setTheme({ name: "sahara", dark: false });
  }
</script>

<svelte:head>
  <title>My Static WebSite</title>
</svelte:head>

<Modal />
<Toast position="tr" rounded="rounded-lg" />

{#if isLoaded}
  <div class="flex flex-col h-screen">
    <div class="border-b border-gray-400">
      <AppBar class="!p-1 md:!p-2">
        <div class="flex items-center h-full">
          <a href="/" class="flex items-center" on:click|preventDefault={() => navigateTo("/")}>
            <div class="text-sm md:text-lg">TOP</div>
          </a>
        </div>
      </AppBar>
    </div>

    <div class="container mx-auto overflow-y-auto pb-16">
      <slot />
    </div>

    <button type="button" class="btn variant-filled" on:click={toggleTheme}> Toggle Theme </button>
  </div>
{:else}
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="font-mono text-black text-2xl">Now Loading...</div>
  </div>
{/if}
