<template>
  <div class="TripPage3">
    <p
      class="slider-title" 
    > {{sliderTitle}}</p>
    <div class="slider-wrapper">
      <vue-slider
        v-model="value"
        :min="0"
        :max="10"
      />
    </div>
    <button class="btn">submit</button>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider
  },
  data () {
    return {
      value: 5,
      sliderTitle: 'How much you want to travel now?'
    }
  }
}
</script>

<style lang="scss" scoped>
.TripPage3 {
  .slider-title {
    font-size: 2rem;
  }
  .slider-wrapper {
    width: 50%;
    min-width: 300px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px 0;
  }
}
</style>