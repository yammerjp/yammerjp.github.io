import type { RequestHandler } from '@sveltejs/kit';
import body from '$lib/dataSources/slides.json'

export const GET: RequestHandler = () => {
  return { body }
};
