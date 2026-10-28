<template>
  <div class="news-pagination">
    <div class="news-pagination__pages">
      <button 
        v-for="page in [1, 2, 3]" 
        :key="page"
        class="news-pagination__page"
        :class="{ 'news-pagination__page--active': currentPage === page }"
        @click="selectPage(page)"
      >
        {{ page }}
      </button>

      <span class="news-pagination__dots">...</span>

      <button 
        class="news-pagination__page news-pagination__page--wide"
        :class="{ 'news-pagination__page--active': currentPage === totalPages }"
        @click="selectPage(totalPages)"
      >
        {{ totalPages }}
      </button>
    </div>

    <div class="news-pagination__info">
      Новости {{ startCount }}—{{ endCount }} из {{ totalCount }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    totalPages?: number
    totalCount?: number
    startCount?: number
    endCount?: number
  }>(),
  {
    totalPages: 30,
    totalCount: 45631,
    startCount: 1,
    endCount: 10
  }
)

const currentPage = ref(1)

function selectPage(p: number) {
  currentPage.value = p
}
</script>

<style lang="scss" scoped>
.news-pagination {
  margin-top: 40px;
  margin-bottom: 60px;

  @media (max-width: 767px) {
    margin-top: 30px;
    margin-bottom: 40px;
  }

  &__pages {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__page {
    width: 31px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #B8B8B8;
    background: transparent;
    color: #000000;
    font-family: 'GP', sans-serif;
    font-size: 17px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    transition: border-color 0.2s ease, color 0.2s ease;

    &:hover {
      border-color: #FF8A16;
      color: #FF8A16;
    }

    &--active {
      border-color: #FF8A16;
      color: #FF8A16;
    }

    &--wide {
      width: 43px;
    }
  }

  &__dots {
    font-family: 'GP', sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    padding: 0 3px;
    user-select: none;
  }

  &__info {
    margin-top: 15px;
    font-family: 'GP', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    line-height: 1;
  }
}
</style>
