<template>
  <div class="TripPage1">
      <p>Where you wanna go?</p>
      <video id="myVideo" loop muted preload="auto" controls autoplay>>
        <source src="../../assets/main.mp4" type="video/mp4">
      </video>
  </div>
</template>

<style lang="scss" scoped>
.TripPage1 {
  width: 100%;
  height: 100%;
  position: relative;
  p {
    text-align: center;
    position: absolute;
    top:40%;
    color: #fff;
    z-index: 5;
    font-size: 40px;
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
