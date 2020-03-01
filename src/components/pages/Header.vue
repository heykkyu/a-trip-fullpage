<template>
  <div
    class="TripHeader">
    <span class="site-title">
      hey.trip
    </span>
      <ul id="menu" :class="{active: checked}" >
        <li class="mobile-lines"  @click="checked = !checked">
          <span></span>
          <span></span>
          <span></span>
        </li>
        <template
          v-for="(anchor,index) in anchors"
        >
          <li
            :data-menuanchor="anchor"
            :key="anchor">
            <a :href="'#'+anchor">
              {{titles[index]}}
            </a>
          </li>
        </template>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    anchors: Array,
    page: String,
  },
  watch: {
    page () {
      this.checked = false;
    }
  },
  data () {
    return {
      checked: false,
      titles: [
        'home', 'hey.scores', 'your.scores', 'sponsors' 
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.TripHeader {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 50px;
  background-color: rgba(256,256,256,1);
  line-height: 2.5;
  .site-title {
    position: absolute;
    font-weight: bold;
    left: 30px;
    font-size: 20px;
  }
  #menu {
    margin: 0;
    position: absolute;
    right: 30px;
    .mobile-lines {
      display: none;
    }
    li {
      a {
        color: #1f75fe;
        opacity: .7;
        font-weight: bold;
        text-decoration: none;
        font-size: 20px;
      }
      &.active {
        a {
          opacity: 1;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    background: none;
    .site-title {
      color: #1f75fe;
    }
    #menu {
      position: fixed;
      padding-right: 20px;
      right: 0;
      width: 10%;
      height: 10%;
      li {
        display: block;
        margin: 0 5px;
        text-align: right;
        display: none;
        a {
          color: #fff;
        }
      }
      &.active {
        background: rgba(0,0,0,.4);
        width: 30%;
        height: 100%;
        li {
          display: block;
        }
        span {
          &:nth-of-type(1) {
            -webkit-transform: translateY (10px) rotate (-45deg);
            transform: translateY(10px) rotate(-45deg);
          }
          &:nth-of-type(2) {
            opacity: 0;
          }
          &:nth-of-type(3) {
            -webkit-transform: translateY(-10px) rotate(45deg);
            transform: translateY(-10px) rotate(45deg);
          }
        }
      }
      .mobile-lines {
        display: block;
        position: relative;
        width: 30px;
        height: 25px;
        text-align: right;
        margin: 15px 5px 15px auto;
        span {
          display: inline-block;
          transition: all .4s;
          box-sizing: border-box;
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #1f75fe;
          border-radius: 4px;
          &:nth-of-type(1) {
            top: 0;
          }
          &:nth-of-type(2) {
            top: 10px;
          }
          &:nth-of-type(3) {
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
