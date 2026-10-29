<template>
  <header class="header">
    <div class="header__slider-wrapper">
      <Swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="28"
        :loop="true"
        :grab-cursor="true"
        :speed="600"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :breakpoints="{
          320: {
            spaceBetween: 14
          },
          768: {
            spaceBetween: 20
          },
          1200: {
            spaceBetween: 28
          }
        }"
        class="header__swiper"
      >
        <SwiperSlide 
          v-for="slide in allSlides" 
          :key="slide.uid" 
          class="header__slide"
        >
          <div 
            class="header__content" 
            :class="`header__content--${slide.theme}`"
          >
            <div class="header__content-block">
              <h2 class="header__content-title">
                {{ slide.title }}
              </h2>
              <div 
                class="header__content-time" 
                :class="`header__content-time--${slide.theme}`"
              >
                {{ slide.timeText }}
              </div>
            </div>

            <div 
              class="header__content-block-shadow"
              :class="`header__content-block-shadow--${slide.theme}`"
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const modules = [Autoplay]

interface SlideData {
  id: number
  theme: 'pink' | 'blue' | 'peach' | 'purple'
  title: string
  timeText: string
}

const baseSlides: SlideData[] = [
  {
    id: 1,
    theme: 'pink',
    title: 'Самые актуальные курсы валют',
    timeText: '24/7'
  },
  {
    id: 2,
    theme: 'blue',
    title: 'Выгодные кредиты и депозиты в банках Казахстана',
    timeText: 'Онлайн'
  },
  {
    id: 3,
    theme: 'peach',
    title: 'Мониторинг курсов и обменных пунктов',
    timeText: 'AllBanks'
  },
  {
    id: 4,
    theme: 'purple',
    title: 'Лучшие предложения по вкладам и займам',
    timeText: 'ТОП-2024'
  }
]

// Duplicate to ensure smooth seamless infinite loop on any screen resolution
const allSlides = computed(() => [
  ...baseSlides.map((s, i) => ({ ...s, uid: `s1-${i}` })),
  ...baseSlides.map((s, i) => ({ ...s, uid: `s2-${i}` }))
])
</script>

<style lang="scss" scoped>
.header__slider-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 6px 0 25px 0;
}

:deep(.header__swiper) {
  width: 100%;
  overflow: visible !important;
}

:deep(.header__slide) {
  width: 1197px;
  height: 495px;
  transition: transform 0.4s ease, opacity 0.4s ease;
  transform: scale(0.92);
  opacity: 0.75;
  cursor: grab;
  user-select: none;
  box-sizing: border-box;

  &:active {
    cursor: grabbing;
  }

  &.swiper-slide-active {
    transform: scale(1);
    opacity: 1;
  }

  @media (max-width: 1279px) {
    width: calc(100vw - 80px);
    max-width: 960px;
    height: 400px;
  }

  @media (max-width: 991px) {
    height: 340px;
  }

  @media (max-width: 767px) {
    width: calc(100vw - 40px);
    max-width: 335px;
    height: 220px;
    transform: scale(0.96);

    &.swiper-slide-active {
      transform: scale(1);
    }
  }
}

.header__content {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;

  @media (max-width: 767px) {
    border-radius: 12px;
  }

  &--pink {
    background: url("@/assets/images/header/header__content-bg.png") no-repeat center right;
    background-size: cover;
    background-color: #EFD0DA;
  }

  &--blue {
    background: url("@/assets/images/header/header__content-bg-blue.png") no-repeat center right;
    background-size: cover;
    background-color: #CFDEF0;
  }

  &--peach {
    background: url("@/assets/images/header/header__content-bg-peach.png") no-repeat center right;
    background-size: cover;
    background-color: #F6D6C8;
  }

  &--purple {
    background: url("@/assets/images/header/header__content-bg-purple.png") no-repeat center right;
    background-size: cover;
    background-color: #DCD0F0;
  }

  &-block {
    display: flex;
    gap: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    padding-right: 48px;
    z-index: 2;

    @media (max-width: 767px) {
      padding-right: 16px;
      padding-left: 16px;
      align-items: flex-start;
      gap: 16px;
    }
  }

  &-block-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 60px;
    pointer-events: none;

    &--pink {
      background: rgba(239, 206, 217, 0.4);
    }

    &--blue {
      background: rgba(207, 222, 240, 0.4);
    }

    &--peach {
      background: rgba(246, 214, 200, 0.4);
    }

    &--purple {
      background: rgba(220, 208, 240, 0.4);
    }

    @media (max-width: 1160px) {
      display: none;
    }
  }

  &-title {
    cursor: default;
    color: #ffffff;
    font-size: 42px;
    line-height: 1.15;
    font-weight: 700;
    max-width: 440px;
    width: 100%;
    text-align: right;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin: 0;

    @media (max-width: 991px) {
      font-size: 32px;
      max-width: 340px;
    }

    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 1.2;
      max-width: 190px;
      text-align: left;
    }
  }

  &-time {
    cursor: default;
    font-weight: 800;
    font-size: 32px;
    line-height: 1;
    color: #ffffff;
    padding: 14px 26px;
    border-radius: 6px;
    text-align: center;
    display: inline-block;

    &--pink {
      background: #EAACC1;
    }

    &--blue {
      background: #89AEDB;
    }

    &--peach {
      background: #E8A185;
    }

    &--purple {
      background: #B6A2DC;
    }

    @media (max-width: 767px) {
      font-size: 16px;
      padding: 6px 14px;
      border-radius: 4px;
    }
  }
}
</style>
