// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "a.svelte-1w1tyr.svelte-1w1tyr{text-decoration:none}.article.svelte-1w1tyr.svelte-1w1tyr{text-align:left;padding:8px}.article-wrapper-link.svelte-1w1tyr.svelte-1w1tyr{display:block;margin-top:32px}.article-wrapper-link.is-first.svelte-1w1tyr.svelte-1w1tyr{margin-top:24px}.article.svelte-1w1tyr .date_and_site.svelte-1w1tyr{margin:5px 0;color:#777777}.article.svelte-1w1tyr h3.title.svelte-1w1tyr{text-decoration:underline;margin-bottom:0;font-weight:normal;margin-top:0px}.article.svelte-1w1tyr.svelte-1w1tyr:hover{background:#f8f8f8;border-radius:8px}.article.svelte-1w1tyr:hover .content.svelte-1w1tyr{color:#222222}.content.svelte-1w1tyr.svelte-1w1tyr{color:#2c3e50e0;font-size:16px}.description.svelte-1w1tyr.svelte-1w1tyr{color:#2c3e50e0;font-size:16px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-height:48px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}