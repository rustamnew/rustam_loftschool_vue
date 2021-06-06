<template lang="pug">
    .tags-edit-components
        app-input(
            title='Добавление тега' 
            v-model='currentTags'
            @input='$emit("change", currentTags)'
            )
        ul.list
            li.item(v-for='(tag, index) in tagsArray' :key="`${tag}${index}`")
                tag(@click='removeTag(tag)' interactive :title='tag')
</template>

<script>

import tag from '../tag/tag.vue'
import input from '../input'

export default {
    components: {
        appInput: input,
        tag,
    },
    props: {
        tags: {
            type: String,
            default: ''
        }
    },
    model: {
        prop: 'tags',
        event: 'change'
    },
    data() {
        return {
            currentTags: this.tags
        }
    },
    computed: {
        tagsArray() {
            return this.currentTags.trim().split(',')
        }
    },
    methods: {
        removeTag(tag) {
            const tags = [...this.tagsArray]
            const tagIndex = tags.indexOf(tag)
            tags.splice(tagIndex, 1)
            this.currentTags = tags.join(', ')
            this.$emit('change', this.currentTags)
        }
    }
    
}
</script>

<style lang="postcss" scoped src='./tagsEdit.pcss'></style>