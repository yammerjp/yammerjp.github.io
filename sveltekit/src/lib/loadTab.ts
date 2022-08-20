import type { JsonFeedItem } from '$lib/types/JsonFeedItem'
import type { Tab } from '$lib/types/Tab'
import TabDefinitions from '$lib/dataSources/TabDefinitions.json'
import { transformFeeds } from '$lib/feedsManagement/FeedTransformer'

type Loaded = {
  status: number,
  props?: {
    message: string,
    cardItems: JsonFeedItem[]
  }
}

// TODO: replace any
export const loadTab = async (fetch: any, tabId: string): Promise<Loaded> => {
  const tab: Tab | undefined = TabDefinitions.find((t : Tab)=> t.id === tabId)
  if (!tab) {
    return {
      status: 404
    }
  }

  const res = await fetch(tab.feedPath)
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
