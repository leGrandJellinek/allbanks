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
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  box-sizing: border-box;

  // Desktop (1:1 from Figma Desktop Frame 1: 159x146px, radius 10px)
  height: 146px;
  border-radius: 10px;
  padding: 18px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 991px) {
    height: auto;
    min-height: 104px;
    border-radius: 14px;
    padding: 12px 6px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
  }
}

.main__categories-icon-wrap {
  // Desktop: bottom-right offset matching Figma
  position: absolute;
  right: -8px;
  bottom: -10px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  pointer-events: none;

  .main__categories-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 991px) {
    position: static;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;

    .main__categories-img {
      max-width: 54px;
      max-height: 50px;
      object-fit: contain;
    }
  }
}

.main__categories-title {
  // Desktop: top-left matching Figma
  position: relative;
  z-index: 2;
  font-family: 'GP', 'Gotham Pro', sans-serif;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 500;
  color: #000000;
  text-align: left;
  display: block;

  @media (max-width: 991px) {
    font-size: 11.5px;
    line-height: 1.2;
    font-weight: 500;
    color: #1e1e1e;
    text-align: center;
    margin-top: 4px;
    white-space: nowrap;
  }
}
</style>
