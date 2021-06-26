<h2>Links</h2>
<div class="links">
<a href="https://twitter.com/yammerjp">
    <img class="links-icon twitter" alt="twitter icon" src="assets/twitter.png" />
</a>
<a href="https://github.com/yammerjp">
    <img class="links-icon github" alt="github icon" src="assets/github.png" />
</a>
<a href="https://qiita.com/basd4g">
    <img class="links-icon qiita" alt="qiita icon" src="assets/qiita.png" />
</a>
<a href="https://basd4g.hatenablog.com">
    <img class="links-icon hatenablog" alt="hatenablog icon" src="assets/hatenablog.png" />
</a>
<a href="https://memo.yammer.jp">
    <img class="links-icon memo-yammer-jp" alt="memo.yammer.jp icon" src="assets/memo-yammer-jp.png" />
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

.links-icon {
  width: 64px;
  height: 64px;
  border-radius: 8px;
}
</style>