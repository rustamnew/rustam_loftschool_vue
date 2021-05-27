import Vue from 'vue'

const thumbs = {
    props: ['currentWork', 'works'],
    template: '#works-thumbs',
}

const buttons = {
    template: '#works-buttons',
}

const tags = {
    props: ['tags'],
    template: '#works-tags',
}

const display = {
    props: ['currentWork', 'works'],
    template: '#works-display',
    components: {thumbs, buttons},
    
}

const info = {
    props: ['currentWork'],
    template: '#works-info',
    components: {tags},
    computed: {
        tagsArray(){
            return this.currentWork.skills.split(",")
        }
    }
}

new Vue({
    el: '#works-component',
    template: '#works-container',
    components: {display, info},
    data(){
        return {
            works:[],
            currentIndex: 0
        }
    },
    computed: {
        currentWork(){
            return this.works[this.currentIndex]
        }
    },
    watch: {
        currentIndex(value) {
            this.indexLoop(value)
        }
    },
    methods: {
        thumbsClick(e) {
            let target = e.currentTarget
            let array = target.closest('.works__thumbnails').children
            for (let child of array) {
                child.classList.remove('active')
            }
            target.classList.add('active')
            this.currentIndex = target.dataset.number - 1
        },
        indexLoop(index) {
            let worksNumber = this.works.length - 1
            if (index < 0) {
                this.currentIndex = worksNumber
            } else if (index > worksNumber) {
                this.currentIndex = 0
            }

            console.log(index)
        },
        requireImagesToArray(data){
            return data.map(item => {
                const requiredImage = require(`../images/content/${item.photo}`).default
                item.photo = requiredImage
                return item
            })
        },
        slide(direction) {
            switch(direction) {
                case 'next' :
                    this.currentIndex++
                    break;

                case 'prev' :
                    this.currentIndex--
                    break;
            }
        }
    },
    created(){
        const data = require('../data/works.json')
        this.works = this.requireImagesToArray(data)
    }
})
