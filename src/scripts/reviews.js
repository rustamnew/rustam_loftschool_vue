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
                slidesPerView: 2
            }
        }
    },
    methods: {
        
        requireImagesToArray(data) {
            
            return data.map((item) => {
                const requiredImage = require(`../images/content/${item.pic}`).default
                item.pic = requiredImage
                return item
            })
        },
        
        slide(direction) {
            console.log(window.innerWidth)

            const slider = this.$refs['slider'].$swiper;
            switch(direction) {
                case 'next' :
                    slider.slideNext()
                    break;
                case 'prev' :
                    slider.slidePrev()
                    break;
            }
        }
    },
    created() {
        const data = require('../data/reviews.json');
        this.reviews = this.requireImagesToArray(data)
        let windowWidth = window.innerWidth

        if (windowWidth <= 480) {
            this.sliderOptions.slidesPerView = 1
        }

        console.log(this.sliderOptions.slidesPerView)
    }
})