import type { RequestHandler } from '@sveltejs/kit';
import body from '$lib/dataSources/contributions.json'

export const GET: RequestHandler = () => {
  return { body }
};
