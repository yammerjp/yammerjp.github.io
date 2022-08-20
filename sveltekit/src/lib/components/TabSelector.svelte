<div class="tabs-container">
  <nav class="tab-selector-wrapper">
    {#each tabDefinitions as t}
      <a
        class="tab-selector{ t.id === selectedTabId ? ' selected':''}"
        href={t.pagePath}
        sveltekit:prefetch
        sveltekit:noscroll
      >
        {t.label}
      </a>
    {/each}
  </nav>
</div>

<script lang="ts">
import tabDefinitions from '$lib/dataSources/TabDefinitions.json'

export let selectedTabId = tabDefinitions[0].id;

</script>

<style>
  .tab-selector {
    text-decoration: none;
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
  .tab-selector:hover {
    border-bottom: solid 2px #999999;
  }
  .tab-selector.selected {
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
