import { CacheFeeds } from '../CacheFeeds'
import slides from '../dataSouces/slides.json'
import contributions from '../dataSouces/contributions.json'
import relatedArticles from '../dataSouces/related-articles.json'
import { fetchAndTransformFeeds } from '../FeedTransformer'

const cacheFeeds = new CacheFeeds();
cacheFeeds.setFetcher('投稿', () => fetchAndTransformFeeds('https://rsss.yammer.jp/v0/json_feed'))
cacheFeeds.setFetcher('発表', () => Promise.resolve(slides))
cacheFeeds.setFetcher('寄稿', () => Promise.resolve(contributions))
cacheFeeds.setFetcher('関連', () => Promise.resolve(relatedArticles))
cacheFeeds.setFetcher('近況', () => fetchAndTransformFeeds('https://textfeed-api.herokuapp.com/json_feed'))

export { cacheFeeds }
