<div class="feeds">
  {#await fetchFeeds('https://textfeed-api.herokuapp.com/json_feed')}
    <p>...waiting</p>
  {:then cards}
    {#each cards as card, i}
      <CardWithDescription card={card} isFirst={i === 0} />
    {/each}
  {:catch error}
    <p>failed to fetch feeds...</p>
  {/await}
</div>

<script lang="ts">
import CardWithDescription from './CardWithDescription.svelte';

async function fetchFeeds(json_feed_url: string): Promise<CardType[]> {
  let url = json_feed_url
  let cards: CardType[] = []
  while(true) {
    const response = await fetch(url)
    const responseJson = await response.json()
    cards.push(...(responseJson?.items as any[]).map((item: any) => {
      return {
        url: 'https://microblog.yammer.jp',
        description: item.content_text,
        id: item.id,
        isoDate: item.date_published,
        siteName: 'microblog'
      }
    }))
    if (responseJson.next_url) {
      url = responseJson.next_url
    } else {
      break
    }
  }
  return cards
}

</script>

<style>
.feeds {
  margin-top: 5px;
}
</style>
