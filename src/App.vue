<template>
  <div id="app">
      <trip-head
        :anchors="options.anchors"
        :page="page"
      >
      </trip-head>
      
      <full-page ref="fullpage" :options="options" id="fullpage">
          <div class="section">
            <trip-page1

            ></trip-page1>
          </div>
          <div class="section">
              <trip-page2>
                
              </trip-page2>
          </div>
          <div class="section">
              <trip-page3>
                
              </trip-page3>
          </div>
      </full-page>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      TripHead: require('./components/pages/Header.vue').default,
      TripPage1: require('./components/pages/Page1.vue').default,
      TripPage2: require('./components/pages/Page2.vue').default,
      TripPage3: require('./components/pages/Page3.vue').default,
    },
    data () {
      return {
        page: 'page1',
        options: {
          licenseKey: 'YOUR_KEY_HERE',
          afterLoad: this.afterLoad,
          scrollOverflow: true,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['hey.trip', 'recommend', 'challenge'],
          slidesNavigation: true,
		      slidesNavPosition: 'bottom',
        }
      }
    },
    methods: {
      afterLoad () {
        console.log('After load')
        // this.page = fullpage_api.setAllowScrolling(true);
      },
      addSection (e) {
        e.preventDefault()
        var newSectionNumber = document.querySelectorAll('.fp-section').length + 1
        // creating the section div
        var section = document.createElement('div')
        section.className = 'section'
        section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`
        // adding section
        document.querySelector('#fullpage').appendChild(section)
        // creating the section menu element
        var sectionMenuItem = document.createElement('li')
        sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber)
        sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`
        // adding it to the sections menu
        var sectionsMenuItems = document.querySelector('#menu')
        sectionsMenuItems.appendChild(sectionMenuItem)
        // adding anchor for the section
        this.options.anchors.push(`page${newSectionNumber}`)
        // we have to call `update` manually as DOM changes won't fire updates
        // requires the use of the attribute ref="fullpage" on the
        // component element, in this case, <full-page>
        // ideally, use an ID element for that element too
        this.$refs.fullpage.build()
      },
      removeSection () {
        var sections = document.querySelector('#fullpage').querySelectorAll('.fp-section')
        var lastSection = sections[sections.length - 1]
        // removing the last section
        lastSection.parentNode.removeChild(lastSection)
        // removing the last anchor
        this.options.anchors.pop()
        // removing the last item on the sections menu
        var sectionsMenuItems = document.querySelectorAll('#menu li')
        var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
        lastItem.parentNode.removeChild(lastItem)
      },
      toggleNavigation () {
        this.options.navigation = !this.options.navigation
      },
      toggleScrollbar () {
        console.log('Changing scrollbar...')
        this.options.scrollBar = !this.options.scrollBar
      }
    }
  }
</script>

