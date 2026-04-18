<script lang="ts">
  import Icon from "@iconify/svelte";
  import { Switch } from "@skeletonlabs/skeleton-svelte";
  import { getAudioOn, setAudioOn } from "$lib/presentation/stores/audioStore";

  let currentAudioOn: boolean = getAudioOn();

  // オーディオのオン/オフを切り替える関数
  function toggleAudio() {
    currentAudioOn = !currentAudioOn;
    setAudioOn(currentAudioOn);
  }
</script>

<Switch name="audioToggle" checked={currentAudioOn} onCheckedChange={() => toggleAudio()}>
  <Switch.Control class="h-8 bg-surface-950-50">
    <Switch.Thumb>
      <Switch.Context>
        {#snippet children(switch_)}
          {#if switch_().checked}
            <Icon icon="mdi:volume-high" class="size-5 text-white" />
          {:else}
            <Icon icon="mdi:volume-off" class="size-5 text-white" />
          {/if}
        {/snippet}
      </Switch.Context>
    </Switch.Thumb>
  </Switch.Control>
  <Switch.HiddenInput />
</Switch>
