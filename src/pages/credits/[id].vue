<template>
  <div>
    <Navbar />
    <main class="main credit-detail">
      <div class="container">
        <router-link to="/credits" class="credit-detail__back">‹ Назад к кредитам</router-link>

        <div class="credit-detail__card">
          <div class="credit-detail__header">
            <span class="bank-tag">Bank RBK</span>
            <h1 class="credit-detail__title">
              «Нужный кредит» под залог (без комиссии и с подтверждением дохода)» на срок от 6 до 120 месяцев под от 25% от Bank RBK
            </h1>
          </div>

          <div class="credit-detail__specs">
            <div class="spec-card">
              <span class="spec-label">Сумма</span>
              <strong class="spec-val">от 750 000 до 75 000 000 ₸</strong>
            </div>
            <div class="spec-card">
              <span class="spec-label">Ставка</span>
              <strong class="spec-val">от 25% годовых</strong>
            </div>
            <div class="spec-card">
              <span class="spec-label">Срок</span>
              <strong class="spec-val">от 6 до 120 мес.</strong>
            </div>
          </div>

          <div class="credit-detail__action">
            <router-link to="/credits/apply" class="apply-btn">Получить кредит</router-link>
          </div>

          <div class="credit-detail__terms">
            <h2>Условия кредитования</h2>
            
            <div class="term-group">
              <h3>Комиссия за выдачу кредита</h3>
              <p>ДБ АО «Банк Хоум Кредит» / Bank RBK — кредит в холдинговую компанию Home Credit N.V., комиссия за выдачу по потребительскому финансированию: 0 тенге.</p>
            </div>

            <div class="term-group">
              <h3>Комиссия за досрочное погашение</h3>
              <p>Комиссия за досрочное погашение кредита — 0 тенге без штрафных санкций.</p>
            </div>

            <div class="term-group">
              <h3>Подтверждение дохода</h3>
              <p>Требуется подтверждение дохода выпиской из пенсионного фонда за последние 6 месяцев.</p>
            </div>

            <div class="term-group">
              <h3>Требуется залог</h3>
              <p>Квартира, жилой дом с земельным участком, коммерческая недвижимость, новый и подержанный автотранспорт, другое имущество в соответствии с решением уполномоченного органа Банка.</p>
            </div>

            <div class="term-group">
              <h3>Перечень предоставляемых документов</h3>
              <ol>
                <li>Документ, удостоверяющий личность заемщика/созаемщика/залогодателя (оригинал).</li>
                <li>Справка о доходах (при необходимости).</li>
                <li>Правоустанавливающие, технические и идентификационные документы на предмет обеспечения (залог).</li>
                <li>Справка об обременении на недвижимость.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
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
    border-radius: 14px;
    padding: 32px 28px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  }

  &__header {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 20px;
    margin-bottom: 24px;

    .bank-tag {
      font-size: 13px;
      font-weight: 700;
      color: #ff8a16;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .credit-detail__title {
      font-size: 24px;
      font-weight: 700;
      color: #1e1e1e;
      line-height: 1.35;
      margin-top: 8px;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

  &__specs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .spec-card {
      background: #fafafa;
      padding: 18px 20px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      border: 1px solid #f0f0f0;

      .spec-label {
        font-size: 12px;
        color: #888888;
        text-transform: uppercase;
      }

      .spec-val {
        font-size: 16px;
        font-weight: 700;
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
      padding: 13px 32px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 700;
      font-size: 15px;
      border: 1px solid #ff8a16;
      transition: all 0.2s ease;

      &:hover {
        background: #fef2e3;
        color: #ff8a16;
      }
    }
  }

  &__terms {
    border-top: 1px solid #f0f0f0;
    padding-top: 28px;

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
        color: #ff8a16;
        margin-bottom: 6px;
      }

      p {
        font-size: 14px;
        line-height: 1.6;
        color: #444444;
      }

      ol {
        padding-left: 20px;
        font-size: 14px;
        line-height: 1.6;
        color: #444444;

        li {
          margin-bottom: 6px;
        }
      }
    }
  }
}
</style>
