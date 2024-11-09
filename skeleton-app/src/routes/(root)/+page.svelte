<script lang="ts">
  import type { ContentButtonProps } from "./+page";

  export let data: {
    propsArray: Array<ContentButtonProps>;
  };
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
  </div>
</div>
