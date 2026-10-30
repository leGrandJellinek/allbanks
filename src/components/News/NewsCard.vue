<template>
  <article class="news-card">
    <div class="news-card__badge">{{ item.date || 'Сегодня, 11:00' }}</div>

    <div class="news-card__image-wrap">
      <img :src="item.image" :alt="item.title" class="news-card__image" loading="lazy" />
    </div>

    <h2 class="news-card__title">
      <router-link :to="`/news/${item.id}`" class="news-card__link">
        {{ item.title }}
      </router-link>
    </h2>

    <div class="news-card__divider"></div>

    <p class="news-card__excerpt">{{ item.excerpt }}</p>
  </article>
</template>

<script setup lang="ts">
import type { NewsItem } from '@/data/news'

defineProps<{
  item: NewsItem
}>()
</script>

<style lang="scss" scoped>
.news-card {
  width: 100%;
  height: 256px;
  background: #f9f9f9;
  border-radius: 14px;
  padding: 25px 25px 20px 25px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &__badge {
    order: 1;
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
    color: #ffffff;
    line-height: 1;
    margin-bottom: 16px;
    flex-shrink: 0;
  }

  /* Desktop Order: Badge (1) -> Title (2) -> Image (3) -> Divider (none) -> Excerpt (5) */
  &__title {
    order: 2;
    font-family: 'GP', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: #000000;
    margin: 0 0 10px 0;
    height: 32px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    flex-shrink: 0;
  }

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #ff8a16;
    }
  }

  &__image-wrap {
    order: 3;
    width: 100%;
    height: 84px;
    overflow: hidden;
    margin-bottom: 10px;
    flex-shrink: 0;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__divider {
    order: 4;
    display: none;
  }

  &__excerpt {
    order: 5;
    font-family: 'GP', sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    color: #000000;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  /* Mobile: 375px viewport (Figma Frame 353:1212 & 353:957) */
  @media (max-width: 767px) {
    height: 242px;
    padding: 15px 20px 16px 20px;

    &__badge {
      order: 1;
      width: 78px;
      height: 14px;
      font-size: 8px;
      margin-bottom: 10px;
    }

    &__image-wrap {
      order: 2;
      height: 84px;
      margin-bottom: 15px;
    }

    &__title {
      order: 3;
      font-size: 14px;
      line-height: 16px;
      height: 32px;
      margin-bottom: 10px;
    }

    &__divider {
      order: 4;
      display: block;
      width: 100%;
      height: 1px;
      background: #b8b8b8;
      margin-bottom: 10px;
      flex-shrink: 0;
    }

    &__excerpt {
      order: 5;
      font-size: 10px;
      line-height: 13px;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
