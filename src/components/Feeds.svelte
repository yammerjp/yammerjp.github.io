{#await fetchFeeds('https://rsss.yammer.jp/v0/json_feed')}
  <p>...waiting</p>
{:then items}
    <JsonFeedItemCards items={items} />
{:catch}
  <p>failed to fetch feeds...</p>
{/await}

<script lang="ts">
import JsonFeedItemCards from './JsonFeedItemCards.svelte';
import { fetchFeeds } from '../feeds/feeds'
</script>
