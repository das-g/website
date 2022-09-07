<script lang="ts">
  import MenuSection from "./menu-section.svelte";
  import type { MenuEntry } from "$lib/types/menu-entry.type";
  export let MENU: MenuEntry[];
  let dictionary: any = {
    "Getting Started": "Introduction",
    // "Gitpod Self-Hosted": "Gitpod Self-Hosted",
    Teams: "Configure",
    ".gitpod.yml": "References",
    Contribute: "Gitpod",
    Troubleshooting: "Support",
  };
</script>

<ul
  class="space-y-2 pb-[100px] self-start max-h-[calc(100vh-6rem)] overflow-auto"
>
  {#each MENU as menuItem}
    <div>
      <div
        class={Object.keys(dictionary).includes(menuItem.title)
          ? "px-6 pt-6 text-sm leading-6 font-bold mt-5"
          : "hidden"}
      >
        {dictionary[menuItem.title]}
      </div>
    </div>
    <MenuSection {menuItem} />
  {/each}
</ul>
