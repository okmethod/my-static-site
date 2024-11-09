<script lang="ts">
  import { isImageConfig, isIconConfig, type TransitionButtonConfig } from "$lib/utils/transitions";
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import Icon from "@iconify/svelte";
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
  <div class="cContentPartStyle !space-y-10">
    <div class="space-y-4">
      {#each data.buttonConfigs as config}
        <div class="">
          <button on:click|preventDefault={config.onClick} class="flex items-center">
            <div class="w-6 h-6 mr-2">
              {#if config.symbol === null}
                <!-- no symbol -->
              {:else if isImageConfig(config.symbol)}
                <img src={config.symbol.src} alt={config.symbol.alt} class="w-full h-full" />
              {:else if isIconConfig(config.symbol)}
                <Icon icon={config.symbol.icon} class="w-full h-full" />
              {/if}
            </div>
            <span class="hover:underline text-lg md:text-2xl">{config.label}</span>
          </button>
        </div>
      {/each}
    </div>

    <button type="button" class="btn variant-filled" on:click={showThemeSwitchModal}>Switch Theme</button>
  </div>
</div>
