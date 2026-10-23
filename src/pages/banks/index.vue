<template lang="pug">
div
  Navbar
  main.main
    .main__container
      section.main__banks
        h1.main__banks-title.section-title Банки Казахстана
        Banks
        p.main__banks-text Все курсы взяты с сайтов банков. Возможно несоответствие курсов в данной таблице реальным курсам в отделениях банков.
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Banks from '@/components/Main/Banks.vue'
</script>

<style lang="scss" scoped>
.main__banks-title {
  margin-bottom: 24px;
}
.main__banks-text {
  margin-top: 24px;
  margin-bottom: 40px;
}
</style>
