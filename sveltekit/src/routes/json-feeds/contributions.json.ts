import type { RequestHandler } from './__types';

import body from '$lib/dataSouces/contributions'

export const GET: RequestHandler = () => {
  return { body }
};
