import type { RequestHandler } from './__types';

import body from '$lib/dataSources/related-articles'

export const GET: RequestHandler = () => {
  return { body }
};
