<script lang="ts">
  import { Segment } from "@skeletonlabs/skeleton-svelte";
  import Icon from "@iconify/svelte";
  import KeyboardInstrument from "$lib/components/organisms/KeyboardOneOctave.svelte";
  import { waveTypes, labelTypes, type LabelType } from "$lib/utils/beep";

  export let numOfOctaves: number = 1;

  const octaveShifts = Array.from({ length: numOfOctaves }, (_, i) => i - Math.floor(numOfOctaves / 2));

  let selectedWaveType: OscillatorType = "triangle";
  let selectedLabelType: LabelType = "none";
</script>

<div class="flex flex-col items-center bg-primary-950-50 rounded-lg space-y-4 p-4">
  <div class="flex space-x-4">
    <div class="flex items-center justify-center space-x-4">
      <Segment
        name="waveType"
        value={selectedWaveType}
        onValueChange={(e) => (selectedWaveType = e.value as OscillatorType)}
        classes="h-full"
      >
        {#each waveTypes as waveType, key (key)}
          <Segment.Item value={waveType}>
            <Icon icon="mdi:{waveType}-wave" class="size-4" />
          </Segment.Item>
        {/each}
      </Segment>
    </div>
    <div class="flex items-center justify-center space-x-4">
      <Segment
        name="labelType"
        value={selectedLabelType}
        onValueChange={(e) => (selectedLabelType = e.value as LabelType)}
        classes="h-full"
      >
        {#each labelTypes as labelType, key (key)}
          <Segment.Item value={labelType}>
            <span class="text-sm">{labelType}</span>
          </Segment.Item>
        {/each}
      </Segment>
    </div>
  </div>
  <div class="flex">
    {#each octaveShifts as octaveShift, key (key)}
      <KeyboardInstrument
        waveType={selectedWaveType}
        {octaveShift}
        showLabel={selectedLabelType}
        includeRightC={false}
      />
    {/each}
  </div>
</div>
