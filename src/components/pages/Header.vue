<template>
  <div
    class="TripHeader">
    <span class="site-title">
      hey.trip
    </span>
    <ul id="menu">
      <template
        v-for="anchor in anchors"
      >
        <li
          :data-menuanchor="anchor"
          :key="anchor">
          <a :href="'#'+anchor">
            {{anchor}}
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    anchors: Array
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
    li {
      a {
        color: #1f75fe;
        font-weight: bold;
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
}
</style>
