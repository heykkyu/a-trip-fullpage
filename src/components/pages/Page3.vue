<template>
  <div class="TripPage3" :class="{active: sliderPage == 2}">
    <div v-if="sliderPage == 1" class="slidePage1">
      <p
        class="slider-title" 
      > {{sliderTitle}}</p>
      <div class="slider-wrapper">
        <vue-slider
          v-model="sliderValue"
          :min="0"
          :max="10"
        />
      </div>
      
    </div>
    <div class="slidePage2" v-else>
      <p
        class="slider-title" 
      >{{sliderResult}}</p>
    </div>
    <button
      class="btn btn-submit"
      @click="travelSubmit()"
    >
      {{sliderPage == 1 ? 'SUBMIT' : 'REVERT'}}
    </button>
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
      sliderValue: 5,
      sliderPage: 1,
      sliderTitle: 'How much you want to travel now?',
      sliderResult: ''
    }
  },
  methods: {
    travelSubmit () {
      if (this.sliderPage == 2) {
        this.sliderPage = 1;
        return;
      }

      this.sliderPage = 2;
      switch (this.sliderValue) {
        case 0:
        case 1:
        case 2:
        case 3:
          this.sliderResult = "Okay, then what I can do for you?";
          break;
        case 4:
        case 5:
        case 6:
          this.sliderResult = "Guess, you don't know where you are at this time.";
          break;
        case 7:
        case 8:
        case 9:  
        case 10:
          this.sliderResult = "Great!!! Let's go now!!";
          break;

        default:
          this.sliderResult = "Refresh, please.";
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.TripPage3 {
  .sliderPage2 {
    display: none;
    opacity: 0;
  }
  &.active {
    .sliderPage2 {
      display: block;
      opacity: 1;
      transition: all 1s ease-in;
    }
  }
  .slider-title {
    font-size: 2rem;
    margin-bottom: 5px;
    padding-bottom: 30px;
  }
  .slider-wrapper {
    width: 50%;
    min-width: 300px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 0 50px 0;
  }
  .btn-submit {
    width: 80px;
    height: 30px;
    background: none;
    border-radius: unset;
    border: 1px solid gray;
    color: gray;
    &:hover,
    &:active {
      color: #9cd5ff;
      border: 1px solid #9cd5ff;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    .slider-title {
      font-size: 1.2rem;
    }
  }
}
</style>