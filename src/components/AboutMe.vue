<template>
  <div class="about-me">
    <h2>About Me</h2>
    <div>やんまー</div>
    <div>中山 慶祐</div>
    <div>埼玉大学工学部情報システム工学科 (2017/04/01 - )</div>

    <h2>Links</h2>
    <div class="links">
      <a href="https://twitter.com/basd4g">Twitter</a> |
      <a href="https://github.com/basd4g">GitHub</a> |
      <a href="https://qiita.com/basd4g">Qiita</a> |
      <a href="https://basd4g.hatenablog.com">はてなブログ</a> |
      <a href="https://memo.basd4g.net">memo.basd4g.net</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutMe',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-me {
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
}
.about-me > .links {
  width: 100%;
  text-align: center;
}
.links {
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.links > a {
  display: inline-box;
  margin: 0 10px;
}
</style>
