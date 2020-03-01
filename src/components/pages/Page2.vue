<template>
  <div class="TripPage2">
    <div v-for="(item,index) in list" :key="item" > 
      <div class="slide">
        <div class="pic-text">
          <p class="pic-title">{{item}}</p>
          <p class="pic-ment">{{ment[index]}}</p>
          <p class="pic-desc">pictures taken by heykkyu</p>
        </div>
        <img :src="`${publicPath}images/${item}.jpg`">
        <p class="img-current">{{index+1}} / {{list.length}}</p>
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
      ment: [
        'If you stay here Paris, it becomes youre present.',
        'Nowhere on this planet is the desert as fascinating as it is in Arizona.',
        'Living in a hot spring like a king.',
        'I give you Chicago. ―H. L. Mencken'
      ],
      show: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.TripPage2 {
  .slide {
    overflow: hidden;
    position: relative;
    .pic-text {
      position: absolute;
      top: 50%;
      margin: 0 auto;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      width: 60%;
      color: #fff;
      font-size: 30px;
      left: 20%;
      font-weight: bold;
      transform: translateY(-50%);
      .pic-title {
        top: 0;
        margin: 10px 0 0 0;
      }
      .pic-ment {
        font-size: 1.2rem;
        font-weight: normal;
      }
      .pic-desc {
        position: absolute;
        right: 10px;
        bottom: 0;
        font-size: 0.7rem;
        opacity: 0.7;
        margin: 0;
      }
    }
    img {
      width: 60%;
      max-height: 80%;
      overflow: hidden;
    }
    .img-current {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .slide {
      .pic-text {
        width: 80%;
        left: 10%;
      }
      img {
        height: 100vh;
        width: auto;
        max-height: unset;
      }
      .img-current {
        display: block;
        position: absolute;
        bottom: 8%;
        color: #fff;
        width: 100%;
        background:rgba(0, 0, 0, 0.4);
        padding: 13px;
      }
    }
  }
}
</style>