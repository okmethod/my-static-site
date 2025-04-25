<script lang="ts">
  import { Modal } from "@skeletonlabs/skeleton-svelte";
  import Icon from "@iconify/svelte";

  let openState = $state(false); // モーダルの開閉状態
  let theme = "hamlindigo"; // デフォルトテーマ

  // テーマ一覧
  const themes = [
    "catppuccin",
    "cerberus",
    "concord",
    "crimson",
    "fennec",
    "hamlindigo",
    "legacy",
    "mint",
    "modern",
    "mona",
    "nosh",
    "nouveau",
    "pine",
    "reign",
    "rocket",
    "rose",
    "sahara",
    "seafoam",
    "terminus",
    "vintage",
    "vox",
    "wintry",
  ];

  // テーマを適用する関数
  function applyTheme(selectedTheme: string) {
    theme = selectedTheme;
    document.body.setAttribute("data-theme", theme);
  }

  function modalClose() {
    openState = false;
  }
</script>

<Modal
  open={openState}
  onOpenChange={(e) => (openState = e.open)}
  triggerBase="btn preset-filled"
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
  backdropClasses="backdrop-blur-sm"
>
  {#snippet trigger()}
    <Icon icon="mdi:shimmer" class="size-4" />
    <span>Theme</span>
  {/snippet}
  {#snippet content()}
    <header class="flex justify-between">
      <h2 class="h2">Switch Theme</h2>
    </header>
    <div class="flex flex-col space-y-4">
      <ul class="grid grid-cols-4 gap-4">
        {#each themes as t}
          <li>
            <button onclick={() => applyTheme(t)} class="w-full text-left p-2 rounded hover:bg-gray-100">
              {t}
            </button>
          </li>
        {/each}
      </ul>
    </div>
    <footer class="flex justify-end gap-4">
      <button type="button" class="btn preset-tonal" onclick={modalClose}>Done</button>
    </footer>
  {/snippet}
</Modal>
