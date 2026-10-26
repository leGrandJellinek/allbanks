<template>
  <div>
    <Navbar />
    <main class="main deposit-detail">
      <div class="container">
        <router-link to="/deposits" class="deposit-detail__back">‹ Назад к вкладам</router-link>

        <div class="deposit-detail__card">
          <div class="deposit-detail__header">
            <span class="bank-tag">Altyn Bank</span>
            <h1 class="deposit-detail__title">Вклад «Управляй Онлайн»</h1>
            <p class="deposit-detail__rate">14.5% годовых</p>
          </div>

          <div class="deposit-detail__specs">
            <div class="spec-box">
              <span class="label">Валюта вклада</span>
              <strong class="val">KZT (Тенге)</strong>
            </div>
            <div class="spec-box">
              <span class="label">Сумма вклада</span>
              <strong class="val">от 10 000 до 50 000 000 ₸</strong>
            </div>
            <div class="spec-box">
              <span class="label">Срок размещения</span>
              <strong class="val">12 месяцев</strong>
            </div>
            <div class="spec-box">
              <span class="label">Выплата процентов</span>
              <strong class="val">Ежемесячно с капитализацией</strong>
            </div>
          </div>

          <div class="deposit-detail__content">
            <h2>Условия по вкладу</h2>
            <ul>
              <li>Возможность пополнения вклада без ограничений по сумме</li>
              <li>Частичное снятие до суммы неснижаемого остатка (10 000 ₸)</li>
              <li>Автоматическая пролонгация договора на новый срок</li>
              <li>Депозит застрахован Казахстанским фондом гарантирования депозитов (КФГД)</li>
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
import Navbar from '@/components/Navbar.vue'
import CommentsBlock from '@/components/CommentsBlock.vue'
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

    .deposit-detail__title {
      font-size: 26px;
      font-weight: 700;
      color: #1e1e1e;
      margin: 6px 0;
    }

    .deposit-detail__rate {
      font-size: 20px;
      font-weight: 800;
      color: #5fb451;
    }
  }

  &__specs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .spec-box {
      background: #fafafa;
      padding: 16px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;

      .label {
        font-size: 12px;
        color: #888888;
      }

      .val {
        font-size: 14px;
        color: #1e1e1e;
      }
    }
  }

  &__content {
    margin-bottom: 30px;

    h2 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    ul {
      list-style: disc;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 14px;
      color: #444444;
      line-height: 1.5;
    }
  }

  &__action {
    .open-deposit-btn {
      display: inline-block;
      background: #ff8a16;
      color: #ffffff;
      padding: 12px 28px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;

      &:hover {
        background: #e67508;
      }
    }
  }
}
</style>
