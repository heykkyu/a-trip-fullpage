<template>
  <div
    class="TripHeader">
    <span class="site-title">
      hey.trip
    </span>
    <div class="menu-wrapper">
      <input type="checkbox" v-model="checked"/>
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu" :class="{active: checked}">
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
  </div>
</template>

<script>
export default {
  props: {
    anchors: Array
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
  .menu-wrapper {
    input, span {
      display: none;
    }
    #menu {
      margin: 0;
      position: absolute;
      right: 30px;
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
  }
  @media screen and (max-width: 768px) {
    background: none;
    .site-title {
      color: #1f75fe;
    }
    .menu-wrapper {
      input, span {
        display: block;
      }
      display: block;
      position: relative;
      z-index: 1;
      -webkit-user-select: none;
      user-select: none;
      float: right;
      left: unset;
      right: 15px;
      width: 33px;
      text-align: right;
      top: 15px;
      #menu {
        height: 100%;
        display: none;
        position: absolute;
        right: 0;
        width: 100px;
        background-color: rgba(0,0,0,0.2);
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        &.active {
          display: block;
        }
        li {
          display: block;
        }
      }
      a {
        color: #232323;
        transition: color 0.3s ease;
      }
      input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        cursor: pointer;
        opacity: 0;
        z-index: 2; 
        -webkit-touch-callout: none;
      }
      span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: #cdcdcd;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
        &:first-child {
          transform-origin: 0% 0%;
        }
        &:nth-last-child(2) {
          transform-origin: 0% 100%;
        }
      }
    }
  }
}
.menu-wrapper {
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  } 
  input:checked ~ ul {
    transform: none;
  }
}
</style>
