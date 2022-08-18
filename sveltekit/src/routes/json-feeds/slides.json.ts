import type { RequestHandler } from './__types';

import body from '$lib/dataSouces/slides'

export const GET: RequestHandler = () => {
  return { body }
};
