async function* fetchFeedsGenerator() {
  let fetchingUrl = "https://textfeed-api.herokuapp.com/json_feed";
  while (fetchingUrl) {
    const responseJson = await fetch(fetchingUrl).then((res) => res.json());
    fetchingUrl = responseJson.next_url;
    yield responseJson.items.map((item) => ({...item, _site_name: "microblog"}));
  }
}
export async function fetchFeeds() {
  let p = [];
  for await (const f of fetchFeedsGenerator()) {
    p.push(...f);
  }
  return p;
}
