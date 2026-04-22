<script lang="ts">
  import { isImageConfig, isIconConfig, type TransitionButtonConfig } from "$lib/presentation/utils/transitions";
  import Icon from "@iconify/svelte";

  interface PageProps {
    data: {
      buttonConfigs: Array<TransitionButtonConfig>;
    };
  }

  let { data }: PageProps = $props();
</script>

<div class="flex flex-col items-center justify-center p-4">
  <h2 class="h3 sm:h2">Welcome to My Static Site !</h2>

  <div class="my-4 space-y-4">
    {#each data.buttonConfigs as config, key (key)}
      <div>
        <button
          onclick={(e) => {
            e.preventDefault();
            config.onClick();
          }}
          class="flex items-center space-x-2"
        >
          <div class="h-6 w-6">
            {#if config.symbol === null}
              <!-- no symbol -->
            {:else if isImageConfig(config.symbol)}
              <img src={config.symbol.src} alt={config.symbol.alt} class="h-full w-full" />
            {:else if isIconConfig(config.symbol)}
              <Icon icon={config.symbol.icon} class="h-full w-full" />
            {/if}
          </div>
          <span class="text-lg hover:underline md:text-2xl">{config.label}</span>
        </button>
      </div>
    {/each}
  </div>
</div>
