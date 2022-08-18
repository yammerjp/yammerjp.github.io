import type { RequestHandler } from './__types';

import body from '$lib/dataSouces/related-articles'

export const GET: RequestHandler = () => {
  return { body }
};
