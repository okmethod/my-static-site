<script lang="ts">
  import Icon from "@iconify/svelte";
  import { startBeep, stopBeep } from "$lib/utils/beep";

  export let frequency: number;
  export let waveType: OscillatorType;
  export let label: string | undefined = undefined;
  export let iconName: string | undefined = undefined;
  export let className: string | undefined = undefined;

  let audioCtx: AudioContext | null = null;
  const audioContextProvider = () => new window.AudioContext();
  function handleStartBeep(event: Event) {
    event.preventDefault();
    if (!audioCtx) {
      audioCtx = startBeep(audioContextProvider, waveType, frequency);
    }
  }

  function handleStopBeep(event: Event) {
    event.preventDefault();
    if (audioCtx) {
      stopBeep(audioCtx);
      audioCtx = null;
    }
  }
</script>

<button
  class={className ?? "btn preset-filled"}
  on:mousedown={handleStartBeep}
  on:mouseup={handleStopBeep}
  on:mouseleave={handleStopBeep}
  on:touchstart={handleStartBeep}
  on:touchend={handleStopBeep}
  on:touchcancel={handleStopBeep}
>
  {#if iconName}
    <Icon icon={iconName} class="size-4" />
  {/if}
  {#if label}
    <span>{label}</span>
  {/if}
</button>
