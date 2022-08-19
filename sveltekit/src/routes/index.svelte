<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Avater from '$lib/components/Avater.svelte';
  import Links from '$lib/components/Links.svelte'
</script>

<svelte:head>
  <title>yammer.jp</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Avater />
<Links />
