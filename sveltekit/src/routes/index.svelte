<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  import TabDefinitions from '$lib/dataSources/TabDefinitions'
  import { loadInternalEndpointFeeds } from '$lib/loadInternalEndpointFeeds'

  export const prerender = true;
  export const load: Load = async ({ fetch }) => {

  type Tab = {
    id: string,
    label: string,
    pagePath: string,
    feedPath: string,
  }

  const tab: Tab | undefined = TabDefinitions.find((t : Tab)=> t.id === 'recent-posts')
  if (!tab) {
    return {
      status: 404
    }
  }
    const url = tab.feedPath
    const { status,  props } = await loadInternalEndpointFeeds(fetch, url)
    return {
      status,
      props: { ...props, tab }
    }
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
