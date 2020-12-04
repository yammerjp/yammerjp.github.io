<template>
  <div class="feeds">
    <h2>Posts</h2>
    <Feed  v-for="(feed, index) in feeds" :key="feed.link" :feed="feed" :index="index"/>
  </div>
</template>

<script>
import feeds from '../../feeds.json';
import Feed from './Feed.vue';

export default {
  name: 'Feeds',
  components: {
    Feed,
  },
  props: {
    msg: String,
  },
  data: () => ({
    feeds,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feeds {
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5px;
}
</style>
