// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".links.svelte-3o6qne.svelte-3o6qne{margin-top:5px;width:100%;margin-top:16px;text-align:center;display:inline-flex;justify-content:space-between;flex-wrap:wrap}.links.svelte-3o6qne>a.svelte-3o6qne{display:block;flex-grow:1;flex:1;margin:8px 0;padding:0 8px}.links-icon.svelte-3o6qne.svelte-3o6qne{width:64px;height:64px;border-radius:8px}.links-icon.svelte-3o6qne.svelte-3o6qne{box-shadow:0 0 3px 0 rgba(0,0,0,.12), 0 2px 3px 0 rgba(0,0,0,.22);transition:.1s}.links.svelte-3o6qne a:hover .links-icon.svelte-3o6qne{box-shadow:0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);transform:translateY(-4px)}.links.svelte-3o6qne a:not(:hover) .title.svelte-3o6qne{display:none}.title-wrapper.svelte-3o6qne.svelte-3o6qne{height:16px}@media screen and (max-width: 410px){.links.svelte-3o6qne .title.svelte-3o6qne{display:none}.title-wrapper.svelte-3o6qne.svelte-3o6qne{height:0px}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}