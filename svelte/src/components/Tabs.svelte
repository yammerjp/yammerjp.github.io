<div class="tabs-container">
  <nav class="tab-selector-wrapper">
    {#each tabNames as t}
      <button class="tab-selector{tabName === t ? ' selected':''}" on:click={() => setCardItems(t)}>
        {t}
      </button>
    {/each}
  </nav>
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
import { cacheFeeds } from '../lib/componentUtils/TabsUtil'

let tabName = '投稿'
let cardItems: JsonFeedItem[] = []
let message: string = ""

const tabNames = ['投稿', '発表', '寄稿', '関連', '近況'] as const;
type TabNames = typeof tabName[number];

function setCardItems(t: TabNames) {
  tabName = t
  message = '...fetching'
  cardItems = []
  cacheFeeds.getFeed(t).then(items => {
    message = ''
    cardItems = items
  }).catch(() => {
    message = '...failed to fetch items'
    cardItems = []
  })
}

setCardItems(tabNames[0])
</script>

<style>
  button.tab-selector {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    padding: 12px 16px;
    margin: 0;
    border-bottom: solid 2px #eeeeee;
    font-size:1.0rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  button.tab-selector:hover {
    border-bottom: solid 2px #999999;
  }
  button.tab-selector.selected {
    border-bottom: solid 2px #999999;
  }
  nav.tab-selector-wrapper::after {
    flex-grow: 1;
    border-bottom: solid 2px #eeeeee;
    content: '';
    display: block;
  }
  nav.tab-selector-wrapper {
    margin-top: 48px;
    display: flex;
    overflow-x:auto;
  }
  .feeds-wrapper {
    padding: 0 8px;
    margin-top: 32px
  }
</style>
