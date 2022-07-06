import type { JsonFeedItem } from '../types/JsonFeedItem'

export class CacheFeeds {
  feeds: {[key: string]: JsonFeedItem[]} = {}
  fetchers: {[key: string]: () => Promise<JsonFeedItem[]>} = {}
  fetcheds: {[key: string]: boolean} = {}
  faileds: {[key: string]: boolean} = {}
  setFetcher(key: string, fetcher: () => Promise<JsonFeedItem[]>) {
    this.fetchers[key] = fetcher;
    this.fetcheds[key] = false;
    this.faileds[key] = false;
    this.feeds[key] = [];
  }
  async getFeed(key: string): Promise<JsonFeedItem[]> {
    if (this.faileds[key]) {
      return Promise.reject('failed to fetch feed')
    }
    if (this.fetcheds[key]) {
      return this.feeds[key] ?? [];
    }
    if (!this.fetchers[key]) {
      return Promise.reject('fetcher is not set');
    }
    const items = await this.fetchers[key]().catch(() => {
      this.faileds[key] = true
      return Promise.reject('failed to fetch feed')
    })
    this.feeds[key] = items;
    this.fetcheds[key] = true;
    return items
  }
}
