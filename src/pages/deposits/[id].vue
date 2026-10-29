<template>
  <div>
    <main class="main deposit-detail">
      <div class="container">
        <router-link to="/deposits" class="deposit-detail__back">‹ Назад к вкладам</router-link>

        <div class="deposit-detail__card">
          <div class="deposit-detail__header">
            <span class="bank-tag">{{ deposit.bank }}</span>
            <h1 class="deposit-detail__title">{{ deposit.subtitle }}</h1>
            <p class="deposit-detail__rate">{{ deposit.rate }} годовых</p>
          </div>

          <div class="deposit-detail__specs">
            <div class="spec-box">
              <span class="label">Валюта вклада</span>
              <strong class="val">{{ deposit.currency }} (Тенге)</strong>
            </div>
            <div class="spec-box">
              <span class="label">Сумма вклада</span>
              <strong class="val">{{ deposit.minSum }}</strong>
            </div>
            <div class="spec-box">
              <span class="label">Срок размещения</span>
              <strong class="val">{{ deposit.term }}</strong>
            </div>
            <div class="spec-box">
              <span class="label">Выплата процентов</span>
              <strong class="val">Ежемесячно с капитализацией</strong>
            </div>
          </div>

          <div class="deposit-detail__content">
            <h2>Условия по вкладу</h2>
            <ul>
              <li v-for="(cond, i) in depositConditions" :key="i">{{ cond }}</li>
            </ul>
          </div>

          <div class="deposit-detail__action">
            <a href="tel:77075789999" class="open-deposit-btn">Открыть вклад в отделении</a>
          </div>

          <!-- Comments and reviews section matching Figma Artboards 10 & 11 -->
          <CommentsBlock />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import CommentsBlock from '@/components/CommentsBlock.vue'
import { DEPOSIT_LIST, type DepositItem } from '@/data/deposits'

const route = useRoute()

const deposit = computed<DepositItem>(() => {
  const id = Number((route.params as { id?: string }).id) || 1
  return DEPOSIT_LIST.find(d => d.id === id) || DEPOSIT_LIST[0]
})

const depositConditions = computed(() => {
  return deposit.value.fullConditions || [
    'Возможность пополнения вклада без ограничений по сумме',
    'Частичное снятие до суммы неснижаемого остатка',
    'Автоматическая пролонгация договора на новый срок',
    'Депозит застрахован Казахстанским фондом гарантирования депозитов (КФГД)'
  ]
})

watch(deposit, (d) => {
  if (d) {
    document.title = `${d.bank} - ${d.subtitle} - AllBanks.kz`
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.deposit-detail {
  padding-bottom: 70px;

  &__back {
    display: inline-block;
    color: #ff8a16;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  &__card {
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 12px;
    padding: 32px;

    @media (max-width: 768px) {
      padding: 20px 16px;
    }
  }

  &__header {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 24px;
    margin-bottom: 24px;

    .bank-tag {
      display: inline-block;
      font-size: 13px;
      font-weight: 600;
      color: #ff8a16;
      background: #fff5eb;
      padding: 4px 10px;
      border-radius: 4px;
      margin-bottom: 12px;
    }
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #1e1e1e;
    margin: 0 0 10px 0;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  &__rate {
    font-size: 20px;
    font-weight: 700;
    color: #27ae60;
    margin: 0;
  }

  &__specs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 32px;
    background: #fafafa;
    padding: 20px;
    border-radius: 8px;

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    .spec-box {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .label {
        font-size: 12px;
        color: #828282;
      }

      .val {
        font-size: 15px;
        color: #1e1e1e;
        font-weight: 600;
      }
    }
  }

  &__content {
    margin-bottom: 32px;

    h2 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #1e1e1e;
    }

    ul {
      list-style: disc;
      padding-left: 20px;

      li {
        font-size: 14px;
        color: #4f4f4f;
        line-height: 1.6;
        margin-bottom: 8px;
      }
    }
  }

  &__action {
    margin-bottom: 40px;

    .open-deposit-btn {
      display: inline-block;
      background: #ff8a16;
      color: #ffffff;
      padding: 12px 28px;
      border-radius: 6px;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.2s;

      &:hover {
        background: #e67605;
      }
    }
  }
}
</style>
