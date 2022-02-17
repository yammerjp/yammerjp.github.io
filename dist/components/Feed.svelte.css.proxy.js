// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "a.svelte-1mrfwgc.svelte-1mrfwgc{text-decoration:none}.feed.svelte-1mrfwgc.svelte-1mrfwgc{text-align:left;padding:8px}.feed-wrapper-link.svelte-1mrfwgc.svelte-1mrfwgc{display:block;margin-top:30px}.feed-wrapper-link.svelte-1mrfwgc.svelte-1mrfwgc:first-child{margin-top:0px}.feed.svelte-1mrfwgc .description.svelte-1mrfwgc{color:#2c3e50e0;font-size:16px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-height:48px}.feed.svelte-1mrfwgc .date_and_site.svelte-1mrfwgc{margin:5px 0;color:#777777}.feed.svelte-1mrfwgc h3.title.svelte-1mrfwgc{text-decoration:underline;margin-bottom:0;font-weight:normal;margin-top:0px}.feed.svelte-1mrfwgc.svelte-1mrfwgc:hover{background:#f8f8f8;border-radius:8px}.feed.svelte-1mrfwgc:hover .description.svelte-1mrfwgc{color:#222222}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}