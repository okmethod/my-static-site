<script lang="ts">
  import { SegmentedControl } from "@skeletonlabs/skeleton-svelte";
  import Icon from "@iconify/svelte";
  import KeyboardInstrument from "$lib/components/organisms/KeyboardOneOctave.svelte";
  import { waveTypes, labelTypes, type LabelType } from "$lib/utils/beep";

  interface Props {
    numOfOctaves?: number;
  }
  let { numOfOctaves = 1 }: Props = $props();

  const octaveShifts = $derived(Array.from({ length: numOfOctaves }, (_, i) => i - Math.floor(numOfOctaves / 2)));

  let selectedWaveType: OscillatorType = $state("triangle");
  let selectedLabelType: LabelType = $state("none");
</script>

<div class="flex flex-col items-center bg-primary-200 dark:bg-primary-800 rounded-lg shadow-lg space-y-4 p-4">
  <div class="flex space-x-4">
    <div class="flex items-center justify-center">
      <SegmentedControl
        name="waveType"
        value={selectedWaveType}
        onValueChange={(e) => (selectedWaveType = e.value as OscillatorType)}
      >
        <SegmentedControl.Control class="h-full space-x-1">
          <SegmentedControl.Indicator />
          {#each waveTypes as waveType, key (key)}
            <SegmentedControl.Item value={waveType}>
              <SegmentedControl.ItemHiddenInput />
              <SegmentedControl.ItemText>
                <Icon icon="mdi:{waveType}-wave" class="size-4" />
              </SegmentedControl.ItemText>
            </SegmentedControl.Item>
          {/each}
        </SegmentedControl.Control>
      </SegmentedControl>
    </div>
    <div class="flex items-center justify-center">
      <SegmentedControl
        name="labelType"
        value={selectedLabelType}
        onValueChange={(e) => (selectedLabelType = e.value as LabelType)}
      >
        <SegmentedControl.Control class="h-full space-x-1">
          <SegmentedControl.Indicator />
          {#each labelTypes as labelType, key (key)}
            <SegmentedControl.Item value={labelType}>
              <SegmentedControl.ItemHiddenInput />
              <SegmentedControl.ItemText>
                <span class="text-sm">{labelType}</span>
              </SegmentedControl.ItemText>
            </SegmentedControl.Item>
          {/each}
        </SegmentedControl.Control>
      </SegmentedControl>
    </div>
  </div>
  <div class="hidden sm:flex">
    {#each octaveShifts as octaveShift, key (key)}
      <KeyboardInstrument
        waveType={selectedWaveType}
        {octaveShift}
        showLabel={selectedLabelType}
        includeRightC={false}
      />
    {/each}
  </div>
  <div class="sm:hidden">
    <KeyboardInstrument
      waveType={selectedWaveType}
      octaveShift={0}
      showLabel={selectedLabelType}
      includeRightC={true}
    />
  </div>
</div>
