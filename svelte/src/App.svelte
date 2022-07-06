<div id="app">
  <Avater />
  <Links />
  <Tabs />
  <footer>
    <div>©2020-2022 <a href="https://github.com/yammerjp">yammer</a></div>
  </footer>
</div>

<script lang="ts">
import Avater from './components/Avater.svelte';
import Tabs from './components/Tabs.svelte';
import Links from './components/Links.svelte'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}

:global(body) {
  padding: 0;
  margin: 0;
}

:global(html) {
 overflow-y: scroll;
}

:global(a) {
  /*
  color: #42b983;
  */
  color: #5da4de;
}
footer {
  margin-top: 50px;
  padding: 0 16px;
  color: #777777;
}
:global(h2) {
  margin-top: 50px;
  margin-bottom: 10px;
}
</style>
