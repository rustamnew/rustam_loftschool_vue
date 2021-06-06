import category from './category'
import {action} from '@storybook/addon-actions'

export default {
    title: 'category',
    components: {category}
}

const methods = {
    onRemove: action('onRemove'),
    onRemoveSkill: action('onRemoveSkill'),
    onEditSkill: action('onEditSkill')
}

const skills = [
    {id: 0, title: 'HTML', percent: 50},
    {id: 1, title: 'CSS', percent: 100}
]

export const defaultView = () => ({
    components: {category},
    data(){
        return {
            title: 'Frontend',
            skills
        }
    },
    template: `
        <category 
        :title='title' 
        :skills='skills' 
        @remove='onRemove'
        @removeSkill='onRemoveSkill'
        @editSkill='onEditSkill'/>
    `,
    methods
})