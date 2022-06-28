<div class="feeds">
  {#await fetchFeeds('https://rsss.yammer.jp/v0/json_feed')}
    <p>...waiting</p>
  {:then feeds}
    {#each feeds as feed, i}
      <CardWithDescription card={feed} isFirst={i === 0} />
    {/each}
  {:catch error}
    <p>failed to fetch feeds...</p>
  {/await}

</div>

<script lang="ts">
import CardWithDescription from './CardWithDescription.svelte';

function siteName(url: string): string {
  if (/^https:\/\/memo\.yammer\.jp/.test(url)) {
    return 'memo.yammer.jp';
  }
  if (/^https:\/\/basd4g\.hatenablog\.com/.test(url)) {
    return 'はてなブログ';
  }
  if (/^https:\/\/qiita\.com\/yammerjp/.test(url)) {
    return 'Qiita';
  }
  return url;
}

async function fetchFeeds(json_feed_url: string): Promise<CardType[]> {
  const response = await fetch(json_feed_url)
  const responseJson = await response.json()
    console.log(responseJson)

  const feeds = (responseJson?.items as any[]).map((item: any) => {
    return {
      title: item.title,
      url: item.url,
      description: item.summary,
      id: item.id,
      isoDate: item.date_published,
    }
  })
  return feeds as CardType[]
}

</script>
<style>
.feeds {
  margin-top: 5px;
}
</style>
