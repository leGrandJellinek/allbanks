<template>
  <router-link 
    :to="item.path || '/'" 
    class="main__categories-item" 
    :style="{ backgroundColor: item.bgcolor }"
  >
    <div class="main__categories-icon-wrap">
      <img :src="getMainImage(item.img)" :alt="item.title" class="main__categories-img" />
    </div>
    <span class="main__categories-title">
      {{ item.title }}
    </span>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  border-radius: 14px;
  padding: 12px 6px 10px;
  min-height: 104px;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

.main__categories-icon-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .main__categories-img {
    max-width: 54px;
    max-height: 50px;
    object-fit: contain;
  }
}

.main__categories-title {
  font-size: 11.5px;
  line-height: 1.2;
  font-weight: 500;
  color: #1e1e1e;
  text-align: center;
  margin-top: 4px;
  white-space: nowrap;
}
</style>
