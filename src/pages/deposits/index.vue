<template>
  <div class="deposits-page">
    <Navbar />
    <main class="deposits-page__main">
      <div class="container deposits-page__container">
        <!-- Main Title -->
        <h1 class="deposits-page__title">Вклады для физических лиц</h1>

        <!-- Filters Block -->
        <DepositFilters @search="handleSearch" />

        <!-- Deposits Grid (3-column Desktop / 1-column Mobile) -->
        <div class="deposits-page__grid">
          <DepositCard 
            v-for="deposit in depositList" 
            :key="deposit.id" 
            :deposit="deposit" 
          />
        </div>

        <!-- Pagination -->
        <DepositPagination 
          :current-page="1" 
          @change="handlePageChange" 
        />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import DepositFilters from '@/components/Deposits/DepositFilters.vue'
import DepositCard from '@/components/Deposits/DepositCard.vue'
import DepositPagination from '@/components/Deposits/DepositPagination.vue'
import { DEPOSIT_LIST } from '@/data/deposits'

function handleSearch(filters: Record<string, string>) {
  console.log('Поиск депозитов:', filters)
}

function handlePageChange(page: number) {
  console.log('Page changed to:', page)
}

const depositList = ref(DEPOSIT_LIST)
</script>

<style lang="scss" scoped>
.deposits-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  &__main {
    flex: 1;
    padding-bottom: 70px;
  }

  &__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 1240px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &__title {
    font-size: 36px;
    font-weight: 500;
    color: #000000;
    line-height: 38px;
    margin: 28px 0 24px 0;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 23px;
      margin: 18px 0 16px 0;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 30px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
  }
}
</style>
