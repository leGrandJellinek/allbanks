<template>
<section class="main__categories">
    <div class="main__categories-container">
        <div class="main__categories-block pc">
            <CategoriesItem 
            v-for="item in getCategoriesList" 
            :key="item.id"            
            :item="item"/>
        </div>
        <swiper 
            class="main__categories-block main-categories-swiper" 
            :slidesPerView="2"
            :spaceBetween="30"
            :centeredSlides="true"
            :pagination="{
            clickable: true,
            }"
            :modules="modules">
            <swiper-slide
             v-for="item in getCategoriesList" 
            :key="item.id">
                <CategoriesItem 
                :item="item"/>
            </swiper-slide>
        </swiper>
    </div>
</section>
</template>

<script>

import {mapGetters} from "vuex";

import CategoriesItem from "@/components/Main/CategoriesItem.vue"

import {Swiper,  SwiperSlide} from 'swiper/vue';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
    computed: {
        ...mapGetters(["getCategoriesList"])
    },
    components: {
        CategoriesItem,
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules:[Pagination, Navigation],
        };
    },
}


</script>

<style lang="sass">
.main-categories-swiper
    width: 100%
    height: 300px
    display: none !important
    & div.swiper-slide 
        text-align: center
        background: #fff
        display: -webkit-box
        display: -ms-flexbox
        display: -webkit-flex
        display: flex
        -webkit-box-pack: center
        -ms-flex-pack: center
        -webkit-justify-content: center
        justify-content: center
        -webkit-box-align: center
        -ms-flex-align: center
        -webkit-align-items: center
        align-items: center
    
.swiper-slide-active
    transform: scale(1.3)
    transition: all 500ms ease
</style>