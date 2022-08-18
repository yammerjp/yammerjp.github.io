import type { RequestHandler } from './__types';
import { fetchFeeds } from '$lib/feedsManagement/JsonFeedFetcher'

const feedUrl = 'https://textfeed-api.herokuapp.com/json_feed';

export const GET: RequestHandler = async () => {
  const feeds = await fetchFeeds(feedUrl)
  return { body: feeds }
};
