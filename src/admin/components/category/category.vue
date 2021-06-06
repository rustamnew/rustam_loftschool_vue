<template lang="pug">
    card(slim)
        edit-line(
            slot='title' 
            v-model='categoryTitle' 
            editModeByDefault
            @remove='$emit("remove", $event)'
        )
        template(slot='content')
            ul.skills(v-if='empty === false')
                li.item(v-for='skill in skills' :key='skill.id')
                    skill(
                        :skill='skill' 
                        @remove='$emit("removeSkill", $event)' 
                        @approve='$emit("editSkill", $event)' 
                        
                        )
            .bottom-line
                skill-add-line(:blocked='empty')
</template>

<script>
import card from '../card/card'
import editLine from '../editLine/editLine'
import skill from '../skill/skill'
import skillAddLine from '../skillAddLine/skillAddLine'


export default {
    props: {
        empty: Boolean,
        title: {
            type: String,
            default: ''
        },
        skills: {
            type: Array,
            default: ()=> [],
        }
    },
    components: {card, editLine, skill, skillAddLine},
    data() {
        return {
            categoryTitle: this.title,
        }
    }
}
</script>

<style lang="postcss" scoped src='./category.pcss'></style>