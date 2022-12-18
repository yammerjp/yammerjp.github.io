import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const url = 'https://usememos.yammer.jp/api/memo?openId=49b6166e-8ddf-476e-8384-be3a2746591f';
  const responseJson = await fetch(url).then(res =>res.json())
  const feeds = responseJson.data.map((item: any) => (
    {
      id: item.id,
      url: `https://usememos.yammer.jp/m/${item.id}`,
      title: "",
      content_text: item.content,
      date_published: new Date(item.createdTs * 1000).toISOString(),
    }
  )).filter((item: any) => item.content_text.trim().length > 0)
  return { body: feeds }
};
