<script lang="ts">
</script>

<div class="flex flex-col items-center justify-center space-y-4 p-4">
  <h2 class="h2">Example Page</h2>
  <p>This is an example page.</p>

  <!-- スクロール検証のための複数行 -->
  {#each Array(30) as _, i (i)}
    <p>This is line {i + 1}.</p>
  {/each}
</div>
