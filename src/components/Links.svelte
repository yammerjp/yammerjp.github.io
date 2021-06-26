<h2>Links</h2>
<div class="links">
  <a href="https://twitter.com/yammerjp">
    Twitter
  </a>
  <a href="https://github.com/yammerjp">
    GitHub
  </a>
  <a href="https://qiita.com/basd4g">
    Qiita
  </a>
  <a href="https://basd4g.hatenablog.com">
    はてなブログ
  </a>
  <a href="https://memo.yammer.jp">
    memo.yammer.jp
  </a>
</div>

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

</style>