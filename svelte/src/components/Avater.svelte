<div class="avater">
  <div class="avater-container">
    <div class="avater-container-start">
      <img
        src="../assets/gather_fishes_200x200.jpg"
        srcset="../assets/gather_fishes_200x200.jpg 1x, ../assets/gather_fishes_400x400.jpg 2x"
        class="avater-icon"
        alt="yammerjp avater icon"
        width="200px"
        height="200px"
      />
    </div>
    <div class="avater-container-end">
      <div class="avater-description">
        <div class="fullname">Keisuke Nakayama</div>
        <div class="nickname">yammer</div>
        <div class="description">
          <span class="description-mass">Web Application Developper /</span>
          <span class="description-mass">SCUBA Diver</span>
         </div>
      </div>
    </div>
  </div>
</div>

<div class="avater-svg-wrapper">
  <svg name="bezier-curve-circle">
    <clipPath id="bezier-curve-circle" clipPathUnits="objectBoundingBox">
    <path d="
             M 0 0.5
             C 0 0.166, 0.166 0, 0.5 0
             S 1 0.166, 1 0.5
             S 0.833 1, 0.5 1
             S 0, 0.833, 0, 0.5
             Z
             "/>
    </clipPath>
  </svg>
</div>

<style>
  /*
.fullname {
  margin-top: 24px;
}
*/
.nickname {
  margin-top: 24px;
  color: #888888;
}
.description {
  margin-top: 24px;
  font-size: 16px;
  color: #888888;
}
.description-mass {
  display: inline-block;
}
.avater-icon {
  border-radius: 64px;
}
.avater {
  margin-top: 48px;
  font-size: 30px;
  padding: 8px;
  /*
  text-align: center;
  */
}
.avater-icon {
  clip-path: url("#bezier-curve-circle");
  width: 200px;
}
.avater-container {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 0;
}

.avater-container-start, .avater-container-end {
  margin-bottom: 48px;
}

.avater-container-end {
  margin: 0 24px;
  margin-left: auto;
  padding-right: 24px;
  margin-right: 0;
  padding-right: 0;
  text-align: right;
  min-width: 260px;
}

.avater-description {
  height: 200px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.avater-svg-wrapper {
  position: absolute;
  top: -200px;
}
</style>
