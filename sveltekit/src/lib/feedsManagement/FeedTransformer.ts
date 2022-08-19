import { fetchFeeds } from './JsonFeedFetcher'
import type { JsonFeedItemWithSummary } from './JsonFeedFetcher'

function siteName(url: string): string {
  if (/^https:\/\/memo\.yammer\.jp\//.test(url)) {
    return 'memo.yammer.jp';
  }
  if (/^https:\/\/basd4g\.hatenablog\.com\//.test(url)) {
    return 'はてなブログ';
  }
  if (/^https:\/\/qiita\.com\/yammerjp\//.test(url)) {
    return 'Qiita';
  }
  if (/^https:\/\/microblog\.yammer\.jp/.test(url)) {
    return 'microblog';
  }
  return url;
}

export const transformFeeds = (feeds: JsonFeedItemWithSummary[]) => feeds.map(elm => ({
  ...elm,
  content_text: elm.summary ?? elm.content_text,
  _site_name: siteName(elm.url)
}))

export const fetchAndTransformFeeds = (url: string) => fetchFeeds(url).then(transformFeeds)
