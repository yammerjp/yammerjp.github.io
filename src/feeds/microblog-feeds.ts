import type { JsonFeedItem } from '../types/JsonFeedItem'

async function* fetchFeedsGenerator(): AsyncGenerator<JsonFeedItem[]> {
  let fetchingUrl = 'https://textfeed-api.herokuapp.com/json_feed'
  while(fetchingUrl) {
    const responseJson = await fetch(fetchingUrl).then(res =>res.json())
    fetchingUrl = responseJson.next_url
    yield (responseJson.items as any[]).map((item: any) => ({ ...item, _site_name: 'microblog'} as JsonFeedItem))
  }
}

export async function fetchFeeds(): Promise<JsonFeedItem[]> {
  let p: JsonFeedItem[] = [];
  for await (const f of fetchFeedsGenerator()) {
    p.push(...f);
  }
  return p;
}
