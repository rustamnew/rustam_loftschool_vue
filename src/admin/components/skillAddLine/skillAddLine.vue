<template lang="pug">
    div(
        :class='["skill-add-line-component", {blocked: blocked}]'
    )
        .title
            app-input(placeholder='Новый навык' noSidePaddings :errorMessage='errorMessage.title')
        .percent
            app-input( type='number' min='0' max='100' maxlength='3' :errorMessage='errorMessage.percent')
        .button
            round-button(type="round" @click='checkInputs')
</template>

<script>

import input from '../input/input'
import icon from '../icon/icon'
import button from "../button"

export default {
    props: {
        blocked: Boolean
    },
    components: {
        appInput: input, icon, roundButton: button
    },
    data() {
        return {
            errorMessage: {
                title: '',
                percent: ''
            }
            
        }
    },
    methods: {
        checkInputs(e) {
            let target = e.currentTarget
            let component = target.closest('.skill-add-line-component')
            let title = component.querySelector('.title').querySelector('.input__elem').value
            let percent = component.querySelector('.percent').querySelector('.input__elem').value

            if (title && percent) {
                this.errorMessage.title= ''
                this.errorMessage.percent= ''
            } else {
                e.preventDefault()
                if (title) {
                    this.errorMessage.title= ''
                } else {
                    this.errorMessage.title= 'Название'
                }

                if (percent) {
                    this.errorMessage.percent=''
                } else {
                    this.errorMessage.percent= 'Проценты'
                }
            }

        }
    }
}
</script>

<style lang="postcss" scoped src='./skillAddLine.pcss'></style>