import type { JsonFeedItem } from '../types/JsonFeedItem'
const fetchFeedsIterable = {
  async * [Symbol.asyncIterator]() {
    let fetchingUrl = 'https://textfeed-api.herokuapp.com/json_feed'
    while(fetchingUrl) {
      const responseJson = await fetch(fetchingUrl).then(res =>res.json())
      fetchingUrl = responseJson.next_url
      yield (responseJson.items as any[]).map((item: any) => ({ ...item, _site_name: 'microblog'} as JsonFeedItem))
    }
  }
}

export async function fetchFeeds() {
  let p: any = [];
  for await (let f of fetchFeedsIterable) {
    p.push(...f);
  }
  return p;
}
