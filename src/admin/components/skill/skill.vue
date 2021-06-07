<template lang="pug">
    .skill-component(v-if='editmode === false')
        .title {{skill.title}}
        .percent {{skill.percent}} %
        .buttons
            icon(symbol='pencil' class='button' grayscale @click='editmode = true')
            icon(symbol='trash' class='button' grayscale @click='$emit("remove", skill.id)')

    .skill-component(v-else)
        .title 
            app-input(v-model='currentSkill.title' noSidePaddings :errorMessage='errorMessage.title')
        .percent
            app-input(v-model='currentSkill.percent' type='number' min='0' max='100' maxlength='3' :errorMessage='errorMessage.percent')
    
        .buttons
            icon(symbol='tick' class='button' @click='checkInputs')
            icon(symbol='cross' class='button' @click='editmode = false')
</template>

<script>
import input from '../input/input'
import icon from '../icon/icon'

export default {
    props: {
        skill: {
            type: Object,
            default: () => {},
            required: true
        } 
    },
    components: {appInput: input, icon},
    data() {
        return {
            editmode: false,
            currentSkill: {
                id: 0,
                title: this.skill.title,
                percent: this.skill.percent
            },
            errorMessage: {
                title: '',
                percent: ''
            }
        }
    },
    methods: {
        checkInputs(e) {
            let target = e.currentTarget
            let component = target.closest('.skill-component')
            let title = component.querySelector('.title').querySelector('.input__elem').value
            let percent = component.querySelector('.percent').querySelector('.input__elem').value

            if (title && percent) {
                console.log('ok')
                this.errorMessage.title= ''
                this.errorMessage.percent= ''
            } else {
                e.preventDefault()
                if (title) {
                    this.errorMessage.title= ''
                } else {
                    console.log('bad title')
                    this.errorMessage.title= 'Название'
                }

                if (percent) {
                    this.errorMessage.percent=''
                } else {
                    console.log('bad percent')
                    this.errorMessage.percent= 'Проценты'
                }
            }

            this.$emit("approve", this.currentSkill)
        }
    }
}
</script>

<style lang="postcss" scoped src='./skill.pcss'></style>