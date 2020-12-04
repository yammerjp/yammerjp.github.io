<template>
  <div class="avater">
    <img
      alt="basd4g avater icon"
      src="../assets/gather_fishes_200x200.jpg"
      srcset="../assets/gather_fishes_200x200.jpg 1x, ../assets/gather_fishes_400x400.jpg 2x"
      class="avater-icon"
      width="200px"
      height="200px"
    >
    <div>Keisuke Nakayama</div>
    <!--
    <div>Web Frontend Developper</div>
    -->
  </div>
</template>

<script>

export default {
  name: 'AboutMe',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avater-icon {
  border-radius: 50%;
}
.avater {
  font-size: 30px;
}
</style>
