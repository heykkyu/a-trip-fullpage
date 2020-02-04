<template>
  <div class="TripPage2">
    <div v-for="item in list" :key="item"> 
      <div class="slide">
        <p class="city-title">{{item}}</p>
        <img :src="`${publicPath}images/${item}.jpg`">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL,
      list: ['Paris','Arizona','Budapest','Chicago'],
    }
  },
  props: [
    // 'page', 'slide' ,'pathTest'
  ]
}
</script>

<style lang="scss" scoped>
.TripPage2 {
  .slide {
    overflow: hidden;
    position: relative;
    .city-title {
      position: absolute;
      top: 50%;
      margin: 0 auto;
      text-align: center;
      height: 50px;
      background: rgba(0, 0, 0, 0.4);
      width: 60%;
      line-height: 1.5;
      color: #fff;
      font-size: 30px;
      left: 20%;
      font-weight: bold;
      transform: translateY(-50%);
    }
    img {
      width: 60%;
      // height: inherit;
      overflow: hidden;
    }
  }
}
</style>