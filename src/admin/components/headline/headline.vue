<template lang="pug">
    .headline-component
        .container.headline-container
            .title 
                slot
                .page-title {{title}}
            .button Выйти
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Панель администрирования'
        }
    }
}
</script>

<style lang="postcss" scoped src='./headline.pcss'></style>