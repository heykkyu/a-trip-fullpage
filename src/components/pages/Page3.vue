<template>
  <div class="TripPage3">
    <p
      contenteditable
      spellcheck="false" 
      v-html="example" 
      ref="example" 
      @click="example = 'type here!'"></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      example: 'how about type what you wanna do?'
    }
  }
}
</script>