<div class="tabs-container">
  <nav class="tab-selector-wrapper">
    <button class="tab-selector">
      投稿
    </button>
    <button class="tab-selector">
      発表
    </button>
    <button class="tab-selector">
      寄稿
    </button>
    <button class="tab-selector">
      関連
    </button>
    <button class="tab-selector">
      近況
    </button>
  </nav>
  <div class="feeds-wrapper">
    <Feeds />
  </div>
</div>
<script>
import Feeds from './Feeds.svelte';
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
