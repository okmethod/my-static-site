<script lang="ts">
  import type { ContentButtonProps } from "./+page";
  import type { ModalSettings } from "@skeletonlabs/skeleton";
  import { getModalStore } from "@skeletonlabs/skeleton";
  import ThemeSwitchModal from "$lib/components/modals/ThemeSwitchModal.svelte";

  export let data: {
    propsArray: Array<ContentButtonProps>;
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
    {#each data.propsArray as props}
      <div class="">
        <button on:click|preventDefault={props.onClick} class="flex items-center">
          <span class="hover:underline text-lg md:text-2xl">{props.title}</span>
        </button>
      </div>
    {/each}

    <button type="button" class="btn variant-filled" on:click={showThemeSwitchModal}>Switch Theme</button>
  </div>
</div>
