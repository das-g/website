<script lang="ts">
  import { stringToBeautifiedFragment } from "$lib/utils/helpers";

  export let text: string;
  export let headingLevel: "h2" | "h3" = "h2";
  stringToBeautifiedFragment;
  let target = stringToBeautifiedFragment(text);
</script>

{#if headingLevel === "h3"}
  <h3>
    {text}
    <a href="#{target}" id={target} aria-label="{text} permalink"
      ><span class="icon icon-link" /></a
    >
  </h3>
{:else}
  <h2>
    {text}
    <a href="#{target}" id={target} aria-label="{text} permalink"
      ><span class="icon icon-link" /></a
    >
  </h2>
{/if}
