<template>
  <div>
    <Navbar />
    <main class="main cash-page">
      <div class="container">
        <h1 class="cash-page__title section-title">Кредиты наличными</h1>
        <p class="cash-page__desc">
          Оформите потребительский кредит наличными с минимальным пакетом документов.
        </p>

        <div class="cash-grid">
          <div v-for="offer in banksStore.creditOffers" :key="offer.id" class="cash-card">
            <h3 class="bank-title" :style="{ color: offer.logoColor }">
              {{ offer.logoText || offer.name }}
            </h3>
            <div class="specs">
              <div><span>Возраст:</span> <strong>{{ offer.age }}</strong></div>
              <div><span>Сумма:</span> <strong>{{ offer.sum }}</strong></div>
              <div><span>Срок:</span> <strong>{{ offer.term }}</strong></div>
              <div><span>Ставка:</span> <strong>{{ offer.rate }}</strong></div>
              <div><span>Время решения:</span> <strong>{{ offer.responseTime }}</strong></div>
            </div>
            <router-link to="/credits/apply" class="btn">Получить наличные</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()
</script>

<style lang="scss" scoped>
.cash-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 14px;
    color: #666666;
    margin-bottom: 28px;
  }
}

.cash-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.cash-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bank-title {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 14px;
  }

  .specs {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    margin-bottom: 16px;

    div {
      display: flex;
      justify-content: space-between;

      span {
        color: #777777;
      }

      strong {
        color: #1e1e1e;
      }
    }
  }

  .btn {
    display: block;
    background: #ff8a16;
    color: #ffffff;
    text-align: center;
    padding: 10px 0;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
