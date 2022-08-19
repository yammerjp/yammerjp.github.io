<div class="tabs-container">
  <div class="feeds-wrapper">
    {#if message.length > 0}
      {message}
    {:else}
      <JsonFeedItemCards items={cardItems} />
    {/if}
  </div>
</div>

<script lang="ts">
import JsonFeedItemCards from './JsonFeedItemCards.svelte'
import type { JsonFeedItem } from '../types/JsonFeedItem'

export let cardItems: JsonFeedItem[] = []
export let message: string = ""

</script>

<style>
  .feeds-wrapper {
    padding: 0 8px;
    margin-top: 32px
  }
</style>
