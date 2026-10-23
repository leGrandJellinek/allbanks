<template>
  <router-link 
    :to="item.path || '/'" 
    class="main__categories-item" 
    :style="{ backgroundColor: item.bgcolor }"
  >
    <h2 class="main__categories-title">
      {{ item.title }}
    </h2>
    <img :src="getMainImage(item.img)" :alt="item.title" class="main__categories-img" />
  </router-link>
</template>

<script setup lang="ts">
import type { CategoryItem } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

defineProps<{
  item: CategoryItem
}>()
</script>

<style lang="scss" scoped>
.main__categories-item {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}
</style>
