import type { JsonFeedItem } from '$lib/types/JsonFeedItem'
import { transformFeeds } from '$lib/feedsManagement/FeedTransformer'

type Loaded = {
  status: number,
  props: {
    message: string,
    cardItems: JsonFeedItem[]
  }
}

export const loadInternalEndpointFeeds = async (fetch: any, feedPath: string): Promise<Loaded> => {
  const res = await fetch(feedPath)
  if (!res.ok) {
    return {
      status: res.status,
      props: {
        message: 'failed to fetch feeds on load function',
        cardItems: []
      }
    }
  }
  const cardItems = transformFeeds(await res.json() as JsonFeedItem[])
  return {
    status: 200,
    props: {
      message: '',
      cardItems, 
    }
  }
}
