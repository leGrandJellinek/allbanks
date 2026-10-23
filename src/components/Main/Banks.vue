<template lang="pug">
.main__banks-block
  BanksItem(
    v-for="item in banksStore.banks"
    :key="item.id"
    :item="item"
  )
</template>

<script setup lang="ts">
import { useBanksStore } from '@/stores/banks'
import BanksItem from '@/components/Main/BanksItem.vue'

const banksStore = useBanksStore()
</script>
