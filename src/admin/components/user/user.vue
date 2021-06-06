<template lang="pug">
    .user-component
        avatar(size="2.7" :src="userPic")
        .username Яруллин Рустам

</template>

<script>
import avatar from '../avatar/avatar'

export default {
    components: {avatar},
    computed: {
        userPic() {
            return require('../../../images/content/user.jpg').default
        }
    }
}
</script>

<style lang="postcss" src='./user.pcss'></style>