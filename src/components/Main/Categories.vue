<template>
  <section class="main__categories">
    <div class="main__categories-container">
      <div class="main__categories-grid">
        <CategoriesItem v-for="item in banksStore.categoriesList" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBanksStore } from '@/stores/banks'
import CategoriesItem from '@/components/Main/CategoriesItem.vue'

const banksStore = useBanksStore()
</script>

<style lang="scss" scoped>
.main__categories-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
}
</style>
