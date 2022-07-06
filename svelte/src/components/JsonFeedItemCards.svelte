<script lang="ts">
import type { JsonFeedItem } from './JsonFeedItemCard.svelte'
import JsonFeedItemCard from './JsonFeedItemCard.svelte'
export let items: JsonFeedItem[]
</script>

<div class=json-feed-item-cards>
{#each items as item, i}
  <JsonFeedItemCard item={item} isFirst={i===0} />
{/each}
</div>

<style>
.json-feed-item-cards {
  margin-top: 5px;
  }
</style>
