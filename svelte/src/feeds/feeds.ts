import type { JsonFeedItem } from '../types/JsonFeedItem'

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

export const fetchFeeds = (json_feed_url: string): Promise<JsonFeedItem[]> =>
  fetch(json_feed_url).then(res => res.json()).then(rj => (rj.items as any[]).map(i => ({...i, content_text: i.summary, _site_name: siteName(i.url)})))

