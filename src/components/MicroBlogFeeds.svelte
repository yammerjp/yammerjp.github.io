{#await fetchFeeds()}
  <p>...waiting</p>
{:then items}
  <JsonFeedItemCards items={items} />
{:catch}
  <p>failed to fetch feeds...</p>
{/await}

<script lang="ts">
import JsonFeedItemCards from './JsonFeedItemCards.svelte'
import { fetchFeeds } from '../feeds/microblog-feeds'
</script>
