<div class="tabs-container">
  <nav class="tab-selector-wrapper">
    <button class="tab-selector{tabName === '投稿' ? ' selected':''}" on:click={selectTab}>
      投稿
    </button>
    <button class="tab-selector{tabName === '発表' ? ' selected':''}" on:click={selectTab}>
      発表
    </button>
    <button class="tab-selector{tabName === '寄稿' ? ' selected':''}" on:click={selectTab}>
      寄稿
    </button>
    <button class="tab-selector{tabName === '関連' ? ' selected':''}" on:click={selectTab}>
      関連
    </button>
    <button class="tab-selector{tabName === '近況' ? ' selected':''}" on:click={selectTab}>
      近況
    </button>
  </nav>
  <div class="feeds-wrapper">
    {#if tabName === '投稿'}
      <Feeds />
    {/if}
    {#if tabName === '発表'}
      <Slides />
    {/if}
    {#if tabName === '寄稿'}
      <Contributions />
    {/if}
    {#if tabName === '関連'}
      <RelatedWorks />
    {/if}
    {#if tabName === '近況'}
      <MicroBlogFeeds />
    {/if}
  </div>
</div>

<script lang="ts">
import Feeds from './Feeds.svelte';
import MicroBlogFeeds from './MicroBlogFeeds.svelte'
import Slides from './Slides.svelte'
import Contributions from './Contributions.svelte'
import RelatedWorks from './RelatedWorks.svelte'

let tabName = '投稿'

function selectTab(event: any) {
  tabName = event.srcElement.innerText
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
  .feeds-wrapper {
    padding: 0 8px;
    margin-top: 32px
  }
</style>
