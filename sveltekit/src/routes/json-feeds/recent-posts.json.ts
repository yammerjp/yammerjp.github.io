import type { RequestHandler } from './__types';
import { fetchFeeds } from '$lib/feedsManagement/JsonFeedFetcher'

const feedUrl = 'https://rsss.yammer.jp/v0/json_feed';

export const GET: RequestHandler = async () => {
  const feeds = await fetchFeeds(feedUrl)
  return { body: feeds }
};
