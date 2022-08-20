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
  <meta charset="utf-8">
  <title>yammer.jp</title>
  <meta name="description" content="yammer is a Web Developper and a Scuba Diver" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <meta property="og:title" content="yammer.jp" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="yammer is a Web Developper and a Scuba Diver" />
  <meta property="og:url" content="https://yammer.jp" />
  <meta property="og:image" content="https://yammer.jp/assets/ogp-20201204.png" />
</svelte:head>

<Avater />
<Links />
<TabSelector selectedTabId={tab?.id}/>
<TabContent cardItems={cardItems} message={message}/>
