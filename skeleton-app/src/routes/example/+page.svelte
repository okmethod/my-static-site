<script lang="ts">
</script>

<div class="cRouteBodyStyle">
  <!-- タイトル部 -->
  <div class="cTitlePartStyle">
    <h1 class="cTitleStyle">Example route</h1>
  </div>

  <!-- コンテンツ部 -->
  <div class="cContentPartStyle">
    {#each Array.from({ length: 100 }, (_, i) => i) as line}
      <p>hoge {line}</p>
    {/each}
  </div>
</div>
