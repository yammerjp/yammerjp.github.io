// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "button.tab-selector.svelte-1b4a4nj{background-color:transparent;border:none;cursor:pointer;outline:none;padding:0;appearance:none;padding:12px 16px;margin:0;border-bottom:solid 2px #eeeeee;font-size:1.0rem;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}button.tab-selector.svelte-1b4a4nj:hover{border-bottom:solid 2px #999999}button.tab-selector.selected.svelte-1b4a4nj{border-bottom:solid 2px #999999}nav.tab-selector-wrapper.svelte-1b4a4nj::after{flex-grow:1;border-bottom:solid 2px #eeeeee;content:'';display:block}nav.tab-selector-wrapper.svelte-1b4a4nj{margin-top:48px;display:flex;overflow-x:auto}.feeds-wrapper.svelte-1b4a4nj{padding:0 8px;margin-top:32px\n  }";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}