<script lang="ts">
import Card from './Card.svelte'
export let card: CardType
export let isFirst: boolean

function description() {
  const maxLength = 400;
  const str = card.description;
  if (str?.length && str.length <= maxLength) {
    return str;
  }
  return `${str.slice(0, maxLength - 1)}...`;
}

</script>

<Card card={card} isFirst={isFirst}>
  <div class="description">{ description() }</div>
</Card>

<style>
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
