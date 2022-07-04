<div class="feeds">
  {#await fetchFeeds()}
    <p>...waiting</p>
  {:then items}
    <JsonFeedItemCards items={items} />
  {:catch error}
    <p>failed to fetch feeds...</p>
  {/await}
</div>

<script lang="ts">
import JsonFeedItemCards from './JsonFeedItemCards.svelte'
import { fetchFeeds } from '../feeds/microblog-feeds'
</script>

<style>
.feeds {
  margin-top: 5px;
}
</style>
