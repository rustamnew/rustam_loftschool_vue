<template lang="pug">
  .app
    .header
      headline
        user
      navigation
    .content
      .container
        .content__header
          .title Блок «Обо мне»
          .button
            iconed-button(type="iconed" title="Добавить группу" @click="showEmptyCategory = true")
        .skills
          .list
            li.item(v-if='showEmptyCategory === true')
              category(
                empty
                @remove='showEmptyCategory = false'
              )
            li.item(v-for='category in categories' :key='category.id')
              category(:title='category.category' :skills='category.skills')
            
</template>

<script>
import headline from './components/headline/headline.vue'
import user from './components/user/user'
import navigation from './components/navigation/navigation'
import button from './components/button/button'
import category from './components/category/category'

export default {
    components: {
      headline, user, navigation, iconedButton: button, category
    },
    data(){
      return {
        categories: [],
        showEmptyCategory: false
      }
    },
    created() {
      this.categories = require('../data/skills.json')
    }
}
</script>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src='./app.pcss'></style>