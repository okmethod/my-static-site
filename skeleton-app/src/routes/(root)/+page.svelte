<script lang="ts">
  import type { TransitionButtonConfig } from "$lib/utils/transitions";
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import ThemeSwitchModal from "$lib/components/modals/ThemeSwitchModal.svelte";

  export let data: {
    buttonConfigs: Array<TransitionButtonConfig>;
  };

  const modalStore = getModalStore();
  function showThemeSwitchModal(): void {
    const m: ModalSettings = {
      type: "component",
      component: {
        ref: ThemeSwitchModal,
        props: {},
      },
      backdropClasses: "fixed inset-0 !bg-gray-300/90",
    };
    modalStore.trigger(m);
  }
</script>

<div class="cRouteBodyStyle">
  <!-- タイトル部 -->
  <div class="cTitlePartStyle">
    <h1 class="cTitleStyle">Welcome to My Static Site !</h1>
  </div>

  <!-- コンテンツ部 -->
  <div class="cContentPartStyle">
    {#each data.buttonConfigs as config}
      <div class="">
        <button on:click|preventDefault={config.onClick} class="flex items-center">
          {#if config.image}
            <img src={config.image.src} alt={config.image.alt} class="w-6 h-6 mr-2" />
          {/if}
          <span class="hover:underline text-lg md:text-2xl">{config.label}</span>
        </button>
      </div>
    {/each}

    <button type="button" class="btn variant-filled" on:click={showThemeSwitchModal}>Switch Theme</button>
  </div>
</div>
