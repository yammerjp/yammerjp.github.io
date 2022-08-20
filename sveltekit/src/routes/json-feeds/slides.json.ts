import type { RequestHandler } from './__types';

import body from '$lib/dataSources/slides'

export const GET: RequestHandler = () => {
  return { body }
};
