import tagsEdit from './tagsEdit'

export default {
    title: 'tagsEdit',
    components: {tagsEdit}
}

export const defaultView = () => ({
    components: {tagsEdit},
    data() {
        return {
            tags: 'One, two, three',
        }
    },
    template: '<tagsEdit v-model="tags"/>'
})