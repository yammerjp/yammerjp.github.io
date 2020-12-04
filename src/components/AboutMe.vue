<template>
  <div class="about-me">
    <h2>About Me</h2>
    <table>
    <tr>
      <td>Nickname</td> <td>yammer<br>やんまー</td>
    </tr>
    <tr>
      <td>Name</td> <td>Keisuke, Nakayama<br>中山 慶祐</td>
    </tr>
    <tr>
      <td>Education</td>
      <td>Department of Information and Computer Sciences, Saitama University
      <br>埼玉大学工学部情報システム工学科 (2017- )</td>
    </tr>
    </table>
    <h2>Links</h2>
    <div class="links">
      <a href="https://twitter.com/basd4g">Twitter</a>
      <a href="https://github.com/basd4g">GitHub</a>
      <a href="https://qiita.com/basd4g">Qiita</a>
      <a href="https://basd4g.hatenablog.com">はてなブログ</a>
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

.links {
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

table {
  border: none;
}
td {
  padding: 5px 0;
}
td:first-child {
  padding-right: 20px;
}
</style>
