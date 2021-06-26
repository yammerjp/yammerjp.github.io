<div id="app">
  <Avater />
  <AboutMe />
  <Links />
  <Feeds feeds="{feeds}"/>
  <footer>
    <div>©2020 Keisuke Nakayama</div>
  </footer>
</div>

<script>
import Avater from './components/Avater.svelte';
import Feeds from './components/Feeds.svelte';
import AboutMe from './components/AboutMe.svelte';
import Links from './components/Links.svelte'
import feedsJson from './feeds.json';
const feeds = feedsJson as FeedType[]
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
}

:global(a) {
  /*
  color: #42b983;
  */
  color: #5da4de;
}
footer {
  margin-top: 50px;
  color: #777777;
}
:global(h2) {
  margin-top: 50px;
  margin-bottom: 10px;
}
</style>
