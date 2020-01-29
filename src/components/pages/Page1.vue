<template>
  <div class="TripPage1">
    <div class="slide">
      <p>Where you wanna go?</p>
      <video controls="controls" loop muted data-autoplay>
        <source src="/../images/main.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.TripPage1 {
  position: relative;
  p {
    text-align: center;
    position: absolute;
    top:40%;
    color: #fff;
    z-index: 5;
    font-family: 'Roboto', sans-serif;
    font-size: 55px;
    width :100%;
    transform: translateY(-50%);
  }
  video {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-color: black;
    background-position: center center;
    background-size: contain;
    object-fit: cover;
    z-index: 3;
  }
}

</style>