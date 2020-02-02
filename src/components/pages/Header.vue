<template>
  <div
    class="TripHeader">
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
  #menu {
    position: fixed;
    margin: 10px;
    text-align: right; 
    right:40px;
    top :10px;
    padding: 0;
    z-index: 10;
    width: 100%;
    li {
      a {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        text-decoration: none;
        font-size: 16px;
      }
    }
  }
}
</style>
