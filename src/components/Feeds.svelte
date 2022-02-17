<div class="feeds">
  <h2 v-if="feeds.length !== 0" class="feeds-title">Posts</h2>
  {#await fetchFeeds('https://rsss.yammer.jp/v0/json_feed')}
    <p>...waiting</p>
  {:then feeds}
    {#each feeds as feed, i}
      <Feed feed={feed} index={i} />
    {/each}
  {:catch error}
    <p>failed to fetch feeds...</p>
  {/await}

</div>

<script lang="typescript">
import Feed from './Feed.svelte';

async function fetchFeeds(json_feed_url: string): Promise<FeedType[]> {
  const response = await fetch(json_feed_url)
  const responseJson = await response.json()
    console.log(responseJson)
  const feeds = (responseJson?.items as any[]).map((item: any) => {
    return {
      title: item.title,
      link: item.url,
      content: item.summary,
      contentSnippet: item.summary,
      guid: item.id,
      isoDate: item.date_published,
    }
  })
  return feeds as FeedType[]
}

</script>

<style>
.feeds {
  margin-top: 5px;
}
.feeds-title {
  padding: 0 8px;
}
</style>
