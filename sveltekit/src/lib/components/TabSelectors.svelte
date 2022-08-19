<div class="tabs-container">
  <nav class="tab-selector-wrapper">
    {#each tabDefinitions as t}
      <button class="tab-selector{ t.id === selectedTabId ? ' selected':''}" on:click={() => selectTab(t.id)}>
        {t.label}
      </button>
    {/each}
  </nav>
</div>

<script lang="ts">
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let selectedTabId = 'recent-posts';

const tabDefinitions = [
  {
    id: 'recent-posts',
    label: '投稿',
    feedPath: '/json-feeds/recent-posts.json'
  },
  {
    id: 'slides',
    label: '発表',
    feedPath: '/json-feeds/slides.json'
  },
  {
    id: 'contributions',
    label: '寄稿',
    feedPath: '/json-feeds/contributions.json'
  },
  {
    id: 'related-posts',
    label: '関連',
    feedPath: '/json-feeds/related-posts.json'
  },
  {
    id: 'murmurs',
    label: '近況',
    feedPath: '/json-feeds/murmurs.json'
  },
];


const selectTab = (newTabId: string) => {
  selectedTabId = newTabId;
  dispatch('selectTab', { id: selectedTabId })
}

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
</style>
