async function* fetchFeedsGenerator(url) {
  while (url) {
    const responseJson = await fetch(url).then((res) => res.json());
    url = responseJson.next_url;
    yield responseJson.items;
  }
}
export async function fetchFeeds(url) {
  let p = [];
  for await (const f of fetchFeedsGenerator(url)) {
    p.push(...f);
  }
  return p;
}
