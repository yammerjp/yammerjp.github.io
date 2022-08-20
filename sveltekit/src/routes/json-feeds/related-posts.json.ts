import type { RequestHandler } from '@sveltejs/kit';
import body from '$lib/dataSources/related-articles.json'

export const GET: RequestHandler = () => {
  return { body }
};
