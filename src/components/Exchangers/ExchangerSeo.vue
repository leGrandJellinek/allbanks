<template>
  <section class="exchanger-seo">
    <!-- Source Disclaimer -->
    <p class="exchanger-seo__disclaimer">
      Данные дополняются из открытых источников. kurs.kz (курс.кз), mig.kz (миг.кз) и др.
    </p>

    <!-- Free Add Link -->
    <div class="exchanger-seo__action-wrap">
      <a 
        href="mailto:info@allbanks.kz" 
        class="exchanger-seo__free-link"
      >
        Добавьте Ваш обменный пункт БЕСПЛАТНО!
      </a>
    </div>

    <!-- SEO Description -->
    <div class="exchanger-seo__text-block">
      <p class="exchanger-seo__text" :class="{ 'exchanger-seo__text--collapsed': isCollapsed }">
        На этой странице Вы можете сравнить курс валют в обменных пунктах {{ banksStore.selectedCity }}. 
        В таблице представлены основные валюты, которые могут Вас заинтересовать. 
        Курс доллара к тенге на сегодня, а так же курс евро, рубля, юаня и тенге по отношению к этим валютам - 
        всё на одной странице и удобно для анализа и выбора. Зелёным выделены ячейки с данными, которые 
        являются лучшими предложениями в {{ banksStore.selectedCity }} на данный момент.
      </p>
      <button 
        type="button" 
        class="exchanger-seo__more-btn" 
        @click="isCollapsed = !isCollapsed"
      >
        {{ isCollapsed ? 'Читать далее' : 'Свернуть' }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()
const isCollapsed = ref(true)
</script>

<style lang="scss" scoped>
.exchanger-seo {
  margin-top: 32px;
  margin-bottom: 60px;

  &__disclaimer {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #A0A0A0;
    margin: 0 0 16px 0;
  }

  &__action-wrap {
    margin-bottom: 36px;
  }

  &__free-link {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.0;
    color: #FF8A16;
    text-decoration: underline;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__text-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  &__text {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
    margin: 0;
    max-width: 1190px;
    transition: all 0.3s ease;

    &--collapsed {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &__more-btn {
    background: none;
    border: none;
    padding: 0;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.0;
    color: #FF8A16;
    text-decoration: underline;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Responsive Mobile Styles matching Frame 292:1399 */
  @media (max-width: 991px) {
    margin-top: 24px;
    margin-bottom: 40px;

    &__disclaimer {
      font-size: 12px;
      line-height: 1.3;
      margin-bottom: 12px;
    }

    &__action-wrap {
      margin-bottom: 24px;
    }

    &__free-link {
      font-size: 14px;
    }

    &__text {
      font-size: 13px;
      line-height: 1.45;

      &--collapsed {
        -webkit-line-clamp: 4;
      }
    }

    &__more-btn {
      font-size: 14px;
    }
  }
}
</style>
