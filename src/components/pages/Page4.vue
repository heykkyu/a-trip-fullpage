<template>
  <div class="TripPage4">
    <div class="sponsers">
      <p>
        <span class="color-blue">hey.trip</span> gratefully acknowledges the generosity of our generous sponsors.<br>
         Their support, along with that of our members, helps make it possible to accomplish all that we do.
      </p>
      <template v-for="item in sponsorImgs"  > 
        <img :src="`${publicPath}images/${item}`" :key="item">
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL,
      sponsorImgs: ['sponser_t2.png','sponser_t1.png','sponser_t3.jpg']
    }
  }
}
</script>

<style lang="scss" scoped>
.TripPage4 {
  width: 100%;
  height: 100%;
  position: relative;
  .sponsers {
    text-align: center;
    position: absolute;
    top: 50%;
    width :100%;
    transform: translateY(-50%);
    p {
      width: 80%;
      font-size: 1.4rem;
      margin: 20px auto 50px auto;
    }
    img {
      display: inline-block;
      position: relative;
      height: 60px;
      margin: 0 8px;
      &:hover {
        cursor: pointer;
        opacity: .7;
      }
    }
     @media screen and (max-width: 768px) {
      p {
        font-size: 0.9rem;
        margin: 20px auto 30px auto;
      }
      img  {
        height: 40px;
        display: block;
        margin: 15px auto;
      }
    }
  }
}
</style>