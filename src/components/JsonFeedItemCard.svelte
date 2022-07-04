<script lang="ts">
import type { JsonFeedItem } from '../types/JsonFeedItem'
import { description, iso8601toStr } from './JsonFeedItemCardUtilis'
export let item: JsonFeedItem
export let isFirst: boolean
</script>

<a href="{item.url}" class="article-wrapper-link {isFirst ? 'is-first': ''}">
  <div class="article">
    {#if item.title}
      <h3 class="title">{item.title}</h3>
    {/if}
    <div class="date_and_site">
      { iso8601toStr(item.date_published) }
      {#if item._site_name}
        - {item._site_name}
      {/if}
    </div>
    <div class="content">
      {#if item.content_html}
        {@html item.content_html}
      {:else if item.content_text}
        <div class="description">
          {description(item.content_text)}
        </div>
      {/if}
    </div>
  </div>
</a>

<style>
a {
  text-decoration: none;
}
.article {
  text-align: left;
  padding: 8px;
}
.article-wrapper-link {
  display: block;
  margin-top: 32px;
}
.article-wrapper-link.is-first {
  margin-top: 24px;
}

.article .date_and_site {
  margin: 5px 0;
  color: #777777;
}
.article h3.title {
  text-decoration: underline;
  margin-bottom: 0;
  font-weight: normal;
  margin-top: 0px;
}
.article:hover {
  background: #f8f8f8;
  border-radius: 8px;
}
.article:hover .content{
  color: #222222;
}
.content {
  color: #2c3e50e0;
  font-size: 16px;
}

.description {
  color: #2c3e50e0;
  font-size: 16px;
  /* 3行表示し、残りは ... で隠す. ベンダープレフィックスがあるが主要ブラウザの最新版は各対応 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height:48px; /* line-clamp 非対応のブラウザでも全文が表示されるのを避ける */
}
</style>
