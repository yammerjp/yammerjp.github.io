<h2>Links</h2>
<div class="links">
  {#each linkItems as linkItem}
    <!-- <div class="link-item"> -->
      <a href="{linkItem.url}">
        <img class="links-icon {linkItem.id}" src="{linkItem.imgSrc}" alt="{linkItem.displayTitle} icon"/>
        <div>{linkItem.displayTitle}</div>
      </a>
    <!-- </div> -->
  {/each}
</div>

<script>
  type LinkItem = {
    id: string;
    displayTitle: string;
    url: string;
    imgSrc: string;
  }
  const linkItems: LinkItem[] = [
    {
      id: 'twitter',
      displayTitle: 'Twitter',
      url: 'https://twitter.com/yammerjp',
      imgSrc: '/assets/twitter.png'
    },
    {
      id: 'github',
      displayTitle: 'GitHub',
      url: 'https://github.com/yammerjp',
      imgSrc: '/assets/github.png'
    },
    {
      id: 'qiita',
      displayTitle: 'Qiita',
      url: 'https://qiita.com/basd4g',
      imgSrc: '/assets/qiita.png'
    },
    {
      id: 'hatenablog',
      displayTitle: 'はてなブログ',
      url: 'https://basd4g.hatenablog.com',
      imgSrc: '/assets/hatenablog.png'
    },
    {
      id: 'memo-yammer-jp',
      displayTitle: 'memo.yammer.jp',
      url: 'https://memo.yammer.jp',
      imgSrc: '/assets/memo-yammer-jp.png'
    },
  ]

</script>

<style>
.links {
  margin-top: 5px;
  width: 100%;
}
.links > a {
  display: block;
}
.links > a:before {
  content: "・";
  display: inline-block;
  text-decoration: none;
}
@media screen and (min-width: 430px) {
  .links {
    text-align: center;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .links > a {
    flex-grow: 1;
    border-style: solid;
    border-color: #777777;
    border-width: 0 1px 0 0;
  }
  .links > a:first-child {
    border-width: 0 1px;
  }
  .links > a:before {
    content: none;
  }
}

.links-icon {
  width: 64px;
  height: 64px;
  border-radius: 8px;
}
</style>