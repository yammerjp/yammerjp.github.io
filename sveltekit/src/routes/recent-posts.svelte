<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  import TabDefinitions from '$lib/feedsManagement/TabDefinitions'
  import { loadInternalEndpointFeeds } from '$lib/loadInternalEndpointFeeds'

  export const prerender = true;
  export const load: Load = async ({ fetch }) => {
    const url = TabDefinitions.find((t: {id: string, label: string, pagePath: string, feedPath: string} )=> t.id === 'recent-posts')?.feedPath ?? ''
    return loadInternalEndpointFeeds(fetch, url)
  }
</script>

<script lang="ts">
  import Avater from '$lib/components/Avater.svelte';
  import Links from '$lib/components/Links.svelte'
  import TabContent from '$lib/components/TabContent.svelte';
  import TabSelector from '$lib/components/TabSelector.svelte';
  import type { JsonFeedItemWithSummary } from '$lib/feedsManagement/JsonFeedFetcher';
  export let message = ''
  export let cardItems: JsonFeedItemWithSummary[] = []
</script>

<svelte:head>
  <title>yammer.jp</title>
	<meta name="description" content="投稿 - yammer.jp" />
</svelte:head>

<Avater />
<Links />
<TabSelector selectedTabId={'recent-posts'}/>
<TabContent cardItems={cardItems} message={message}/>
