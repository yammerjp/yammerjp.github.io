import {fetchFeeds} from "./JsonFeedFetcher.js";
function siteName(url) {
  if (/^https:\/\/memo\.yammer\.jp\//.test(url)) {
    return "memo.yammer.jp";
  }
  if (/^https:\/\/basd4g\.hatenablog\.com\//.test(url)) {
    return "はてなブログ";
  }
  if (/^https:\/\/qiita\.com\/yammerjp\//.test(url)) {
    return "Qiita";
  }
  if (/^https:\/\/microblog\.yammer\.jp/.test(url)) {
    return "microblog";
  }
  return url;
}
export const fetchAndTransformFeeds = (url) => fetchFeeds(url).then((arr) => arr.map((elm) => ({
  ...elm,
  content_text: elm.summary ?? elm.content_text,
  _site_name: siteName(elm.url)
})));
