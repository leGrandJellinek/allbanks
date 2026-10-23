<template lang="pug">
.main__banks-item
  .main__banks-item-up
    img(:src="getMainImage(item.icon)" :alt="item.name")
    .main__banks-item-info
      p.main__banks-item-name {{ item.name }}
      p.main__banks-item-license {{ item.license }}
  .main__banks-item-bottom
    ul.main__banks-item-list
      li.main__banks-item-loc {{ item.location }}
      li.main__banks-item-text
        a(:href="`tel:${item.phoneNumber}`") {{ item.phoneNumber }}
      li.main__banks-item-text
        a(:href="`https://${item.website}`" target="_blank" rel="noopener") {{ item.website }}
    router-link.main__banks-item-btn(:to="`/banks/${item.id}`") Узнать больше
</template>

<script setup lang="ts">
import type { BankItem } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

defineProps<{
  item: BankItem
}>()
</script>
