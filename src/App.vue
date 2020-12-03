<template>
  <div id="app">
    <Avater />
    <AboutMe />
    <Feeds />
    <footer>
      <div>©2020 Keisuke Nakayama</div>
    </footer>
  </div>
</template>

<script>
import Avater from './components/Avater.vue';
import Feeds from './components/Feeds.vue';
import AboutMe from './components/AboutMe.vue';

export default {
  name: 'App',
  components: {
    Avater,
    AboutMe,
    Feeds,
  },
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
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>
