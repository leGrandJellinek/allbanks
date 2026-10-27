<template>
  <div class="main__banks-block">
    <BanksItem
      v-for="item in banksStore.banks"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import { useBanksStore } from '@/stores/banks'
import BanksItem from '@/components/Main/BanksItem.vue'

const banksStore = useBanksStore()
</script>
