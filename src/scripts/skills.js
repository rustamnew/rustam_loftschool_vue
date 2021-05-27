import Vue from 'vue';

const skillsItem = {
    props: ['skill'],
    template: '#skills-item',
    methods: {
        drawCircle() {
            const cirlce = this.$refs['skill-circle']
            const dashArray = parseInt(
                getComputedStyle(cirlce).getPropertyValue('stroke-dasharray')
            )
            const percent = (dashArray / 100) * (100- this.skill.percent)
            cirlce.style.strokeDashoffset = percent
        },
    },
    mounted() {
        this.drawCircle()
    }
}

const skillsRow = {
    props: ['category'],
    template: '#skills-row',
    components: {
        skillsItem
    }
}

new Vue({
    el: '#skills-component',
    template: '#skills-list',
    components: {
        skillsRow
    },
    data() {
        return {
            skills: []
        }
    },
    created() {
        this.skills = require('../data/skills.json')
    }
})