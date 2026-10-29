<template>
  <div class="news-detail-wrapper">
    <main class="main news-detail">
      <div class="container news-detail__container">
        <!-- Main title: 1:1 from Figma Desktop Frame 56 (421:1740) & Mobile Frame 367:2018 -->
        <h1 class="news-detail__title">{{ currentArticle.title }}</h1>

        <!-- Hero Image (1200x378 on Desktop / 335x109 on Mobile per Figma) -->
        <div class="news-detail__hero">
          <img 
            :src="currentArticle.heroImage || defaultHero" 
            :alt="currentArticle.title" 
            class="news-detail__hero-img" 
          />
        </div>

        <!-- Article Body Paragraphs -->
        <div class="news-detail__content">
          <p 
            v-for="(paragraph, idx) in currentArticle.paragraphs" 
            :key="idx" 
            class="news-detail__paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <!-- Bottom Action Bar: "‹ Вернуться назад" + Date Badge -->
        <div class="news-detail__bottom-bar">
          <router-link to="/news" class="news-detail__back-link">
            <svg class="news-detail__back-arrow" width="9" height="13" viewBox="0 0 9 13" fill="none">
              <path 
                d="M7.5 11.5L2 6.5L7.5 1.5" 
                stroke="#FF8A16" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
            <span class="news-detail__back-text">Вернуться назад</span>
          </router-link>

          <div class="news-detail__date-badge">
            {{ currentArticle.date || 'Сегодня, 11:00' }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { NEWS_ITEMS, type NewsItem } from '@/data/news'
import defaultHero from '@/assets/images/news/news-hero.png'

const route = useRoute()

const currentArticle = computed<NewsItem>(() => {
  const idParam = 'id' in route.params ? (route.params as any).id : undefined
  const id = Number(idParam)
  const found = NEWS_ITEMS.find(item => item.id === id)
  return found || NEWS_ITEMS[0]
})

watch(currentArticle, (a) => {
  if (a) document.title = `${a.title} - AllBanks.kz`
}, { immediate: true })
</script>

<style lang="scss" scoped>
.news-detail-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
  }
}

.news-detail {
  &__container {
    padding-top: 53px;

    @media (max-width: 767px) {
      padding-top: 26px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &__title {
    font-family: 'GP', sans-serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.15;
    color: #000000;
    margin: 0 0 30px 0;
    max-width: 1105px;
    letter-spacing: 0;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 25px;
    }
  }

  &__hero {
    width: 100%;
    max-width: 1200px;
    height: 378px;
    margin-bottom: 60px;
    overflow: hidden;

    @media (max-width: 767px) {
      height: 109px;
      margin-bottom: 25px;
    }
  }

  &__hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__content {
    max-width: 1175px;
    margin-bottom: 30px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  &__paragraph {
    font-family: 'GP', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: #000000;
    margin: 0 0 24px 0;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 16px;
    }
  }

  &__bottom-bar {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 80px;

    @media (max-width: 767px) {
      gap: 15px;
      margin-bottom: 50px;
    }
  }

  &__back-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    text-decoration: none;
    cursor: pointer;

    &:hover .news-detail__back-text {
      color: #FF8A16;
    }
  }

  &__back-arrow {
    flex-shrink: 0;
  }

  &__back-text {
    font-family: 'GP', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    line-height: 1;
    transition: color 0.2s ease;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__date-badge {
    width: 100px;
    height: 19px;
    background: rgba(255, 138, 22, 0.8);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'GP', sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1;
    flex-shrink: 0;

    @media (max-width: 767px) {
      width: 78px;
      height: 14px;
      font-size: 8px;
    }
  }
}
</style>
