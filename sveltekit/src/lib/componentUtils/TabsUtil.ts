import { CacheFeeds } from '../feedsManagement/CacheFeeds'
import slides from '../dataSouces/slides.json'
import contributions from '../dataSouces/contributions.json'
import relatedArticles from '../dataSouces/related-articles.json'
import { fetchAndTransformFeeds } from '../feedsManagement/FeedTransformer'

const cacheFeeds = new CacheFeeds();
cacheFeeds.setFetcher('recent-posts', () => fetchAndTransformFeeds('https://rsss.yammer.jp/v0/json_feed'))
cacheFeeds.setFetcher('slides', () => Promise.resolve(slides))
cacheFeeds.setFetcher('contributions', () => Promise.resolve(contributions))
cacheFeeds.setFetcher('related-posts', () => Promise.resolve(relatedArticles))
cacheFeeds.setFetcher('murmurs', () => fetchAndTransformFeeds('https://textfeed-api.herokuapp.com/json_feed'))

export { cacheFeeds }
