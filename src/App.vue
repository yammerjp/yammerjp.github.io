<template>
  <div id="app">
    <Avater />
    <AboutMe />
    <Feeds :feeds="feeds"/>
    <footer>
      <div>©2020 Keisuke Nakayama</div>
    </footer>
  </div>
</template>

<script>
import Avater from './components/Avater.vue';
import Feeds from './components/Feeds.vue';
import AboutMe from './components/AboutMe.vue';
import feeds from '../feeds.json';

export default {
  name: 'App',
  components: {
    Avater,
    AboutMe,
    Feeds,
  },
  data: () => ({
    feeds
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  /*
  color: #42b983;
  */
  color: #5da4de;
}
footer {
  margin-top: 50px;
  color: #777777;
}
h2 {
  margin-top: 50px;
  margin-bottom: 10px;
}
</style>
