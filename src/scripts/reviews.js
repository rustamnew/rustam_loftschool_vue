import Vue from 'vue'
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

new Vue ({
    el: '#reviews-component',
    template: '#reviews-container',
    components: {
        Swiper, SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            reviews: [],
            sliderOptions: {
                slidesPerView: 1,
                breakpoints: {
                    481: {
                        slidesPerView: 2,
                    }
                }
            }
        }
    },
    methods: {
        checkIndex() {
            let index = this.$refs['slider'].$swiper.activeIndex
            let max = this.$refs['slider'].$swiper.slides.length - 2
            let left = document.querySelector('.slider__buttons').childNodes[0]
            let right = document.querySelector('.slider__buttons').childNodes[1]

            if(window.innerWidth < 481) {
                max +=1
            }

            if (index == 0) {
                left.classList.add('disabled')
            } else if (index == max) {
                right.classList.add('disabled')
            } else {
                left.classList.remove('disabled')
                right.classList.remove('disabled')
            }
        },
        
        requireImagesToArray(data) {
            return data.map((item) => {
                const requiredImage = require(`../images/content/${item.pic}`).default
                item.pic = requiredImage
                return item
            })
        },
        
        slide(direction) {
            const slider = this.$refs['slider'].$swiper;
            switch(direction) {
                case 'next' :
                    slider.slideNext()
                    break;
                case 'prev' :
                    slider.slidePrev()
                    break;
            }
            this.checkIndex()
        }
    },
    created() {
        const data = require('../data/reviews.json');
        this.reviews = this.requireImagesToArray(data)
        let windowWidth = window.innerWidth

        if (windowWidth <= 480) {
            this.sliderOptions.slidesPerView = 1
        }
        
    },
    mounted() {
        this.checkIndex()
    }
})