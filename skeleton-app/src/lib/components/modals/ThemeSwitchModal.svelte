<script lang="ts">
  import { getModalStore } from "@skeletonlabs/skeleton";
  import { SlideToggle } from "@skeletonlabs/skeleton";
  import Icon from "@iconify/svelte";
  import type { ThemeName } from "$lib/stores/theme";
  import { themeNames, getTheme, setTheme } from "$lib/stores/theme";

  export let parent;

  let currentTheme = getTheme().name;
  let currentDark = getTheme().dark;

  function setCurrentTheme() {
    setTheme({ name: currentTheme, dark: currentDark });
  }

  function handleThemeSwitch(themeName: ThemeName) {
    currentTheme = themeName;
    setCurrentTheme();
  }

  const modalStore = getModalStore();

  function closeModal() {
    modalStore.close();
  }
</script>

{#if $modalStore[0]}
  <div class="p-4 bg-surface-50-900-token rounded" data-parent={parent}>
    <div class="relative pt-8">
      <div class="flex flex-col items-center space-y-2">
        <div class="grid grid-cols-4 gap-2">
          {#each themeNames as themeName}
            <button
              type="button"
              class="btn variant-filled"
              on:click={() => {
                handleThemeSwitch(themeName);
              }}>{themeName}</button
            >
          {/each}
        </div>
        <SlideToggle name="slide" bind:checked={currentDark} on:change={setCurrentTheme} class="px-2 py-1"
          >{currentDark ? "Dark Mode" : "Light Mode"}</SlideToggle
        >
      </div>
      <button on:click={closeModal} class="absolute top-0 right-6 z-10">
        <Icon icon="mdi:close" class="w-5 h-5" />
      </button>
    </div>
  </div>
{/if}
