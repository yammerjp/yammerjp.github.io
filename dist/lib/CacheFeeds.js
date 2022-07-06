export class CacheFeeds {
  constructor() {
    this.feeds = {};
    this.fetchers = {};
    this.fetcheds = {};
    this.faileds = {};
  }
  setFetcher(key, fetcher) {
    this.fetchers[key] = fetcher;
    this.fetcheds[key] = false;
    this.faileds[key] = false;
    this.feeds[key] = [];
  }
  async getFeed(key) {
    if (this.faileds[key]) {
      return Promise.reject("failed to fetch feed");
    }
    if (this.fetcheds[key]) {
      return this.feeds[key] ?? [];
    }
    if (!this.fetchers[key]) {
      return Promise.reject("fetcher is not set");
    }
    const items = await this.fetchers[key]().catch(() => {
      this.faileds[key] = true;
      return Promise.reject("failed to fetch feed");
    });
    this.feeds[key] = items;
    this.fetcheds[key] = true;
    return items;
  }
}
