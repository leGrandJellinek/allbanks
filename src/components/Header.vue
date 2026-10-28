<template>
  <header class="header">
    <Navbar />
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
            <div v-if="slide.decor" class="header__content-decor">
              <img :src="slide.decor" :alt="slide.alt || ''" />
            </div>

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

            <div v-if="slide.theme === 'pink'" class="header__content-block-shadow"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import creditCardImg from '@/assets/images/main/credit_card.png'
import safeImg from '@/assets/images/main/safe_and_coin.png'

const modules = [Autoplay]

interface SlideData {
  id: number
  theme: 'pink' | 'blue' | 'peach'
  title: string
  timeText: string
  decor?: string
  alt?: string
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
    timeText: 'Онлайн',
    decor: creditCardImg,
    alt: 'Кредиты'
  },
  {
    id: 3,
    theme: 'peach',
    title: 'Мониторинг курсов и обменных пунктов',
    timeText: 'AllBanks',
    decor: safeImg,
    alt: 'Депозиты'
  },
  {
    id: 4,
    theme: 'blue',
    title: 'Лучшие предложения по вкладам и займам',
    timeText: 'ТОП-2024',
    decor: creditCardImg,
    alt: 'Вклады'
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
    background: linear-gradient(135deg, #CFDEF0 0%, #8EB6E0 100%);
  }

  &--peach {
    background: linear-gradient(135deg, #FDECE3 0%, #E69D80 100%);
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
    background: rgba(239, 206, 217, 0.4);

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
      background: #6D9ACD;
    }

    &--peach {
      background: #D8825F;
    }

    @media (max-width: 767px) {
      font-size: 16px;
      padding: 6px 14px;
      border-radius: 4px;
    }
  }

  &-decor {
    position: absolute;
    left: 80px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 1;

    img {
      width: 160px;
      height: 160px;
      object-fit: contain;
      filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15));
    }

    @media (max-width: 991px) {
      left: 30px;
      img {
        width: 110px;
        height: 110px;
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }
}
</style>
