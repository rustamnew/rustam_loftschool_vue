<template lang="pug">
    nav.navigation-component
        .container.navigation-container
            ul.list
                li(
                    :class="['item', {active: link.active}]"
                    v-for="link in links" 
                    :key="link.id"
                )
                    a.link(:href='`/${link.alias}`') {{link.title}}
</template>


<script>

const links = [
    {id: 0, title: 'Обо мне', alias: 'about', active: true},
    {id: 1, title: 'Работы', alias: 'works', active: false},
    {id: 2, title: 'Отзывы', alias: 'reviews', active: false},
]

export default {
    data() {
        return {
            links
        }
    }
}
</script>

<style lang="postcss" scoped src='./navigation.pcss'></style>