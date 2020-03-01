<template>
  <div id="app">
    <trip-head
      :anchors="options.anchors"
      :page="page"
    >
    </trip-head>
    <full-page
      ref="fullpage"
      id="fullpage"
      :options="options"
      @on-slide-leave="onSlideLeave"
      @on-leave="onLeave"
    >
      <div 
        class="section"
        :class="item"
        v-for="item in options.anchors"
        :key="item">
        <component
          :is="item"
          :slidePage="slide"
          :mobile="mobile"
        >
      </component>
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      TripHead: require('./components/pages/Header.vue').default,
      Page1: require('./components/pages/Page1.vue').default,
      Page2: require('./components/pages/Page2.vue').default,
      Page3: require('./components/pages/Page3.vue').default,
      Page4: require('./components/pages/Page4.vue').default,
    },
    created() {
      window.addEventListener('resize', this.resizeBrowse);
      this.resizeBrowse();
    },
    destroyed() {
      window.removeEventListener('resize', this.resizeBrowse);
    },
    data () {
      return {
        page: 'page1',
        mobile: false,
        slide: 0,
        options: {
          licenseKey: 'YOUR_KEY_HERE',
          scrollOverflow: false,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3', 'page4'],
          slidesNavigation: true,
          slidesNavPosition: 'bottom',
          onSlideLeave: this.onSlideLeave,
          onLeave: this.onLeave
        }
      }
    },
    methods: {
      onLeave (origin, destination, direction) {
        this.page = destination.anchor;
      },
      toggleNavigation () {
        this.options.navigation = !this.options.navigation
      },
      toggleScrollbar () {
        console.log('Changing scrollbar...')
        this.options.scrollBar = !this.options.scrollBar
      },
      onSlideLeave (section, origin, destination, direction) {
        this.slide = origin.index;
        console.log(origin.index)
      },
      resizeBrowse () {
        this.mobile = window.innerWidth <= 800 ? true : false;
      }
    }
  }
</script>

