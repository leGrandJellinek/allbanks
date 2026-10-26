<template>
  <div class="banks-page-wrapper">
    <Navbar />
    <main class="main">
      <div class="main__container">
        <section class="main__banks">
          <h1 class="main__banks-title section-title">Банки Казахстана</h1>
          <Banks />
          <p class="main__banks-text">
            Все курсы взяты с сайтов банков. Возможно несоответствие курсов в данной таблице реальным курсам в отделениях банков.
          </p>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Banks from '@/components/Main/Banks.vue'
</script>

<style lang="scss" scoped>
.banks-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    margin-bottom: 60px;
  }
}

.main__banks-title {
  margin-bottom: 28px;
  font-size: 28px;
  font-weight: 700;
  color: #1e1e1e;
}

.main__banks-text {
  margin-top: 32px;
  font-size: 13px;
  color: #828282;
  line-height: 1.6;
}
</style>