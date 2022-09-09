<script lang="ts" context="module">
  export const key = Symbol();
</script>

<script lang="ts">
  import { getContext } from "svelte";
  import Octocat from "../svgs/octocat.svelte";

  const stars: string = getContext(key).toString();

  const starsFormatted = stars[0] + "," + stars.substring(1, stars.length);
</script>

<style lang="postcss">
  a:hover,
  a:focus {
    :global(path) {
      @apply fill-important;
    }
  }
</style>

<a
  href="https://github.com/gitpod-io/gitpod/stargazers"
  target="_blank"
  class="flex items-center font-bold text-sm"
>
  <Octocat class="mr-1.5" />
  {starsFormatted}
</a>
