import type { RequestHandler } from '@sveltejs/kit';
import { fetchFeeds } from '$lib/feedsManagement/JsonFeedFetcher'

const feedUrl = 'https://textfeed-api.yammer.jp/json_feed';

export const GET: RequestHandler = async () => {
  const feeds = await fetchFeeds(feedUrl)
  return { body: feeds }
};
