<template>
  <div>
    <Navbar />
    <main class="main news-detail">
      <div class="container">
        <router-link to="/news" class="news-detail__back">‹ Назад к новостям</router-link>

        <article class="news-detail__article">
          <div class="news-detail__meta">
            <span class="category">Финансовые рынки</span>
            <span class="date">Сегодня, 14:20</span>
          </div>

          <h1 class="news-detail__title">
            Национальный банк РК сохранил базовую ставку на уровне 14,5%
          </h1>

          <div class="news-detail__body">
            <p>
              Комитет по денежно-кредитной политике Национального Банка Республики Казахстан принял решение сохранить базовую ставку на уровне 14,50% годовых с процентным коридором +/- 1,00 процентных пункта. Соответственно, ставка по операциям постоянного доступа по предоставлению ликвидности составит 15,50%, а по операциям постоянного доступа по изъятию ликвидности — 13,50%.
            </p>
            <p>
              Решение принято с учетом баланса рисков инфляции во внутренней и внешней среде. Годовая инфляция складывается в рамках траектории прогнозов Национального Банка. Сохраняются проинфляционные факторы со стороны внешнего сектора из-за высокой инфляции в странах — торговых партнерах и глобальных логистических цепочек.
            </p>
            <p>
              Дальнейшие решения по базовой ставке будут зависеть от соответствия фактической динамики инфляции прогнозным оценкам, а также от рисков достижения среднесрочной цели в 5%.
            </p>
          </div>

          <div class="news-detail__footer">
            <router-link to="/news" class="back-btn">Все новости</router-link>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<style lang="scss" scoped>
.news-detail {
  padding-bottom: 70px;

  &__back {
    display: inline-block;
    color: #ff8a16;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  &__article {
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 14px;
    padding: 36px 32px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    max-width: 820px;
  }

  &__meta {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 12px;

    .category {
      background: #fef2e3;
      color: #ff8a16;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }

    .date {
      font-size: 13px;
      color: #888888;
    }
  }

  &__title {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.35;
    color: #1e1e1e;
    margin-bottom: 24px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 15px;
    line-height: 1.7;
    color: #333333;
    border-top: 1px solid #f0f0f0;
    padding-top: 24px;
    margin-bottom: 30px;
  }

  &__footer {
    border-top: 1px solid #f0f0f0;
    padding-top: 20px;

    .back-btn {
      display: inline-block;
      background: #ff8a16;
      color: #ffffff;
      padding: 10px 22px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
    }
  }
}
</style>
