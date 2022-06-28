<script lang="ts">
export let card: CardType
export let isFirst: boolean

function date(): string {
  const d = new Date(card.isoDate);
  const yyyy = `${d.getFullYear()}`;
  const mm = (`00${d.getMonth() + 1}`).slice(-2);
  const dd = (`00${d.getDate()}`).slice(-2);
  return `${yyyy}/${mm}/${dd}`;
}

function dateAndSite(): string {
  if (card.siteName) {
    return `${date()} - ${card.siteName}`
  }
  return date()
}

</script>

<a href="{card.url}" class="article-wrapper-link {isFirst ? 'is-first': ''}">
  <div class="article">
    {#if card.title}
      <h3 class="title">{card.title}</h3>
    {/if}
    <div class="date_and_site">{ dateAndSite() }</div>
    <div class="content">
      <slot></slot>
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
</style>
