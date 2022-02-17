// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".nickname.svelte-1td42zl{margin-top:24px;color:#888888}.description.svelte-1td42zl{margin-top:24px;font-size:16px;color:#888888}.description-mass.svelte-1td42zl{display:inline-block}.avater-icon.svelte-1td42zl{border-radius:64px}.avater.svelte-1td42zl{margin-top:48px;font-size:30px;padding:8px}.avater-icon.svelte-1td42zl{clip-path:url(\"#bezier-curve-circle\");width:200px}.avater-container.svelte-1td42zl{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:space-between;padding-right:0}.avater-container-start.svelte-1td42zl,.avater-container-end.svelte-1td42zl{margin-bottom:48px}.avater-container-end.svelte-1td42zl{margin:0 24px;margin-left:auto;padding-right:24px;margin-right:0;padding-right:0;text-align:right;min-width:260px}.avater-description.svelte-1td42zl{height:200px;display:flex;flex-flow:column;justify-content:space-between}.avater-svg-wrapper.svelte-1td42zl{position:absolute;top:-200px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}