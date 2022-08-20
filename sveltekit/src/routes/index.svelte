<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  import { loadTab } from '$lib/loadTab'

  export const prerender = true;
  export const load: Load = async ({ fetch }) => await loadTab(fetch, 'recent-posts')
</script>

<script lang="ts">
  import type { Tab } from '$lib/types/Tab'
  import type { JsonFeedItemWithSummary } from '$lib/feedsManagement/JsonFeedFetcher';
  import Avater from '$lib/components/Avater.svelte';
  import Links from '$lib/components/Links.svelte'
  import TabContent from '$lib/components/TabContent.svelte';
  import TabSelector from '$lib/components/TabSelector.svelte';
  export let message = ''
  export let cardItems: JsonFeedItemWithSummary[] = []
  export let tab: Tab
</script>

<svelte:head>
  <title>yammer.jp</title>
  <meta name="description" content={`${tab?.label} - yammer.jp`} />
</svelte:head>

<Avater />
<Links />
<TabSelector selectedTabId={tab?.id}/>
<TabContent cardItems={cardItems} message={message}/>
