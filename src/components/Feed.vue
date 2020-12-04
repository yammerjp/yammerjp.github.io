<template>
  <a :href="feed.link">
  <div class="feed">
    <h3 :class="{title: true, isFirst: isFirst}">{{ feed.title }}</h3>
    <div class="date_and_site">{{ date }} - {{ site }}</div>
    <div class="description">{{ description }}</div>
    <!--
    <details>
      <div v-html="feed.content"/>
    </details>
    -->
  </div>
  </a>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    feed: Object,
    index: Number,
  },
  computed: {
    date() {
      const d = new Date(this.feed.isoDate);
      const yyyy = `${d.getFullYear()}`;
      const mm = (`00${d.getMonth() + 1}`).slice(-2);
      const dd = (`00${d.getDay() + 1}`).slice(-2);
      return `${yyyy}/${mm}/${dd}`;
    },
    site() {
      if (/^https:\/\/memo\.basd4g\.net/.test(this.feed.link)) {
        return 'memo.basd4g.net';
      }
      if (/^https:\/\/basd4g\.hatenablog\.com/.test(this.feed.link)) {
        return 'はてなブログ';
      }
      if (/^https:\/\/qiita\.com\/basd4g/.test(this.feed.link)) {
        return 'Qiita';
      }
      return this.feed.link;
    },
    description() {
      const maxLength = 100;
      if (this.feed.contentSnippet.length <= maxLength) {
        return this.feed.contentSnippet;
      }
      return `${this.feed.contentSnippet.slice(0, maxLength - 1)}...`;
    },
    isFirst() {
      return (this.index === 0);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.feed {
  text-align: left;
}
.feed .description {
  color: #2c3e50;
  font-size: 16px;
}
.feed .date_and_site {
  margin: 5px 0;
  color: #777777;
}
.feed h3.title {
  text-decoration: underline;
  margin-bottom: 0;
  font-weight: normal;
  margin-top: 30px;
}
.feed h3.isFirst {
  margin-top: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
<style>
img {
  max-width: 100%;
}
</style>
