<template lang='pug'>
  div(:class="['tag', {interactive: interactive}]")
    .tag-title {{title}}
    icon(
      v-on="$listeners"
      v-if="interactive" 
      symbol='cross'
      class="remove" 
      type="button"
    )


</template>



<script>

import icon from '../icon/icon.vue'


export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    interactive: Boolean,
  },
  components: {
    icon
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>