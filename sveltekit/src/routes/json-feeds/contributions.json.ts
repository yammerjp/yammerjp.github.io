import type { RequestHandler } from './__types';

import body from '$lib/dataSources/contributions'

export const GET: RequestHandler = () => {
  return { body }
};
