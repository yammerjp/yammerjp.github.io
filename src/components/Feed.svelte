<script lang="typescript">
export let feed: FeedType
export let index: number

function date() {
  const d = new Date(feed.isoDate);
  const yyyy = `${d.getFullYear()}`;
  const mm = (`00${d.getMonth() + 1}`).slice(-2);
  const dd = (`00${d.getDate()}`).slice(-2);
  return `${yyyy}/${mm}/${dd}`;
}

function site() {
  if (/^https:\/\/memo\.yammer\.jp/.test(feed.link)) {
    return 'memo.yammer.jp';
  }
  if (/^https:\/\/basd4g\.hatenablog\.com/.test(feed.link)) {
    return 'はてなブログ';
  }
  if (/^https:\/\/qiita\.com\/basd4g/.test(feed.link)) {
    return 'Qiita';
  }
  return feed.link;
}

function description() {
  const maxLength = 100;
  if (feed.contentSnippet.length <= maxLength) {
    return feed.contentSnippet;
  }
  return `${feed.contentSnippet.slice(0, maxLength - 1)}...`;
}
</script>


<a href="{feed.link}">
<div class="feed">
  <h3 class="title {index === 0 ? 'isFirst': ''}">{feed.title}</h3>
  <div class="date_and_site">{ date() } - { site() }</div>
  <div class="description">{ description() }</div>
  <!--
  <details>
    <div v-html="feed.content"/>
  </details>
  -->
</div>
</a>

<style>
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
</style>
