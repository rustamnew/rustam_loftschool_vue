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
        currentIndex() {
            this.indexCheck()
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
        indexCheck() {
            let index = this.currentIndex
            let left = document.querySelector('.works__buttons').childNodes[0]
            let right = document.querySelector('.works__buttons').childNodes[1]
            let max = this.works.length - 1
            if (index == 0) {
                left.classList.add('disabled')
            } else if (index == max) {
                right.classList.add('disabled')
            } else {
                left.classList.remove('disabled')
                right.classList.remove('disabled')
            }
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
                    if(this.currentIndex < this.works.length) {
                        this.currentIndex++
                    }
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
    },
    mounted(){
        this.indexCheck()
    }
    
})
