<template>
  <div class="news-page-wrapper">
    <Navbar />
    <main class="main news-page">
      <div class="container news-page__container">
        <!-- Title: 1:1 from Figma Frame 54 & 353:1212 -->
        <h1 class="news-page__title">Новости</h1>

        <!-- Category Filters -->
        <NewsFilter
          :categories="NEWS_CATEGORIES"
          :selected="selectedCategory"
          @select="handleCategorySelect"
        />

        <!-- News Cards Grid (3 columns Desktop / 1 column Mobile) -->
        <div class="news-page__grid">
          <NewsCard
            v-for="item in filteredNews"
            :key="item.id"
            :item="item"
          />
        </div>

        <!-- Pagination (1:1 from Figma 353:1212) -->
        <NewsPagination 
          :total-count="45631"
          :start-count="1"
          :end-count="filteredNews.length"
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import NewsCard from '@/components/News/NewsCard.vue'
import NewsFilter from '@/components/News/NewsFilter.vue'
import NewsPagination from '@/components/News/NewsPagination.vue'
import { NEWS_ITEMS, NEWS_CATEGORIES } from '@/data/news'

const selectedCategory = ref('')

function handleCategorySelect(cat: string) {
  selectedCategory.value = cat
}

const filteredNews = computed(() => {
  if (!selectedCategory.value) {
    return NEWS_ITEMS
  }
  return NEWS_ITEMS.filter(n => n.category === selectedCategory.value)
})
</script>

<style lang="scss" scoped>
.news-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
  }
}

.news-page {
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
    line-height: 35px;
    color: #000000;
    margin: 0 0 28px 0;
    letter-spacing: 0;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 20px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
}
</style>
