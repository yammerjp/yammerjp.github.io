<div class="tabs-container">
  <div class="feeds-wrapper">
    {#if message.length > 0}
      {message}
    {:else}
      <div class=json-feed-item-cards>
        {#each cardItems as item, i}
          <JsonFeedItemCard item={item} isFirst={i===0} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<script lang="ts">
import JsonFeedItemCard from './JsonFeedItemCard.svelte'
import type { JsonFeedItem } from '$lib/types/JsonFeedItem'

export let cardItems: JsonFeedItem[] = []
export let message: string = ""

</script>

<style>
  .feeds-wrapper {
    padding: 0 8px;
    margin-top: 32px
  }
  .json-feed-item-cards {
    margin-top: 5px;
  }
</style>
