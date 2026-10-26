<template>
  <div class="news-detail-wrapper">
    <Navbar />
    <main class="main news-detail">
      <div class="container">
        <router-link to="/news" class="news-detail__back">‹ Назад к новостям</router-link>

        <article class="news-detail__article">
          <div class="news-detail__meta">
            <span class="category">Новости экономики</span>
            <span class="date">16 февраля 2022</span>
          </div>

          <h1 class="news-detail__title">
            Philip Morris работает над вариантами выхода с российского рынка
          </h1>

          <div class="news-detail__body">
            <p>
              Совет директоров и топ-менеджеры табачной компании Philip Morris International (PMI) работают над вариантами упорядоченного выхода с российского рынка в связи с изменением регуляторной и операционной среды.
            </p>
            <p>
              В заявлении компании отмечается, что процесс выхода является сложным и требует соблюдения всех юридических требований как в юрисдикциях присутствия, так и на международном уровне, при этом приоритетом остается безопасность сотрудников и выполнение обязательств перед клиентами и контрагентами.
            </p>
            <p>
              Ранее компания уже приостановила запланированные инвестиции в Российской Федерации, включая запуск новых продуктов, а также сократила масштабы производственных операций.
            </p>
          </div>

          <div class="news-detail__footer">
            <router-link to="/news" class="back-btn">Все новости</router-link>
          </div>
        </article>

        <!-- Comments & Discussion (Frame 56) -->
        <CommentsBlock />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CommentsBlock from '@/components/CommentsBlock.vue'
</script>

<style lang="scss" scoped>
.news-detail-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.news-detail {
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

  &__article {
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 14px;
    padding: 36px 32px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    margin-bottom: 40px;
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
    margin: 0 0 24px 0;

    @media (max-width: 767px) {
      font-size: 20px;
    }
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
      transition: background 0.2s;

      &:hover {
        background: #e67508;
      }
    }
  }
}
</style>