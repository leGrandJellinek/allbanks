<template>
  <div>
    <main class="main credit-detail">
      <div class="container">
        <router-link to="/credits" class="credit-detail__back">‹ Назад к кредитам</router-link>

        <div class="credit-detail__card">
          <div class="credit-detail__header">
            <span class="bank-tag">{{ offer.name }}</span>
            <h1 class="credit-detail__title">
              «Нужный кредит» под залог (без комиссии и с подтверждением дохода)» на срок до {{ offer.term }} под {{ offer.rate }} от {{ offer.name }}
            </h1>
          </div>

          <div class="credit-detail__specs">
            <div class="spec-card">
              <span class="spec-label">Сумма</span>
              <strong class="spec-val">до {{ offer.sum }} ₸</strong>
            </div>
            <div class="spec-card">
              <span class="spec-label">Ставка</span>
              <strong class="spec-val">{{ offer.rate }} годовых</strong>
            </div>
            <div class="spec-card">
              <span class="spec-label">Срок</span>
              <strong class="spec-val">до {{ offer.term }}</strong>
            </div>
            <div class="spec-card">
              <span class="spec-label">Время ответа</span>
              <strong class="spec-val">{{ offer.responseTime }}</strong>
            </div>
          </div>

          <div class="credit-detail__action">
            <router-link to="/credits/apply" class="apply-btn">Получить кредит</router-link>
          </div>

          <div class="credit-detail__terms">
            <h2>Условия кредитования</h2>
            
            <div class="term-group">
              <h3>Комиссия за выдачу кредита</h3>
              <p>АО «{{ offer.name }}» — комиссия за выдачу по потребительскому финансированию: 0 тенге.</p>
            </div>

            <div class="term-group">
              <h3>Комиссия за досрочное погашение</h3>
              <p>Комиссия за досрочное погашение кредита — 0 тенге без штрафных санкций на любом сроке.</p>
            </div>

            <div class="term-group">
              <h3>Подтверждение дохода</h3>
              <p>Требуется подтверждение дохода выпиской из пенсионного фонда за последние 6 месяцев (или без справок при оформлении онлайн).</p>
            </div>

            <div class="term-group">
              <h3>Требуется залог</h3>
              <p>Квартира, жилой дом с земельным участком, коммерческая недвижимость или без залога в зависимости от запрашиваемой суммы.</p>
            </div>

            <div class="term-group">
              <h3>Перечень предоставляемых документов</h3>
              <ol>
                <li>Удостоверение личности гражданина Республики Казахстан с ИИН</li>
                <li>Справка о заработной плате за последние 6 месяцев (по требованию)</li>
                <li>Документы на залоговое имущество (при оформлении залогового займа)</li>
              </ol>
            </div>
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
import { useBanksStore } from '@/stores/banks'

const route = useRoute()
const banksStore = useBanksStore()

const offerId = computed(() => Number((route.params as { id?: string }).id) || 1)
const offer = computed(() => {
  return banksStore.creditOffers.find(o => o.id === offerId.value) || banksStore.creditOffers[0]
})

watch(offer, (o) => {
  if (o) {
    document.title = `${o.name} - Кредит наличными - AllBanks.kz`
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.credit-detail {
  padding-bottom: 70px;

  &__back {
    display: inline-block;
    color: #ff8a16;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
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
    font-size: 24px;
    font-weight: 700;
    color: #1e1e1e;
    line-height: 1.4;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  &__specs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 28px;

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    .spec-card {
      background: #fafafa;
      border-radius: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;

      .spec-label {
        font-size: 12px;
        color: #828282;
      }

      .spec-val {
        font-size: 16px;
        font-weight: 600;
        color: #1e1e1e;
      }
    }
  }

  &__action {
    margin-bottom: 32px;

    .apply-btn {
      display: inline-block;
      background: #ff8a16;
      color: #ffffff;
      padding: 12px 32px;
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

  &__terms {
    margin-bottom: 40px;
    border-top: 1px solid #f0f0f0;
    padding-top: 30px;

    h2 {
      font-size: 20px;
      font-weight: 700;
      color: #1e1e1e;
      margin-bottom: 20px;
    }

    .term-group {
      margin-bottom: 20px;

      h3 {
        font-size: 15px;
        font-weight: 600;
        color: #1e1e1e;
        margin-bottom: 6px;
      }

      p {
        font-size: 14px;
        color: #4f4f4f;
        line-height: 1.6;
        margin: 0;
      }

      ol {
        padding-left: 20px;
        margin-top: 8px;

        li {
          font-size: 14px;
          color: #4f4f4f;
          line-height: 1.6;
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
