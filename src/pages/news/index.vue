<template>
  <div class="news-page-wrapper">
    <Navbar />
    <main class="main news-page">
      <div class="container">
        <h1 class="news-page__title section-title">Новости</h1>
        <p class="news-page__subtitle">Самые важные события финансового сектора Казахстана и мира</p>

        <!-- Category Filters -->
        <div class="news-categories">
          <button 
            v-for="cat in categories" 
            :key="cat"
            class="news-cat-btn"
            :class="{ active: selectedCat === cat }"
            @click="selectedCat = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- 3-Column News Grid (Figma Frame 54 & 55) -->
        <div class="news-grid">
          <article 
            v-for="item in filteredNews" 
            :key="item.id" 
            class="news-card"
          >
            <div class="news-card__thumb" :style="{ backgroundColor: item.bg }">
              <span class="news-card__category">{{ item.category }}</span>
            </div>
            <div class="news-card__content">
              <span class="news-card__date">{{ item.date }}</span>
              <h2 class="news-card__title">
                <router-link :to="`/news/${item.id}`">{{ item.title }}</router-link>
              </h2>
              <p class="news-card__excerpt">{{ item.excerpt }}</p>
              <router-link :to="`/news/${item.id}`" class="news-card__more">
                Читать далее ›
              </router-link>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="pagination-container">
          <div class="pagination">
            <button class="page-num active">1</button>
            <button class="page-num">2</button>
            <button class="page-num">3</button>
            <span class="page-dots">...</span>
            <button class="page-num">30</button>
          </div>
          <span class="pagination-info">Новостей 1—6 из 84</span>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const categories = [
  'Все категории',
  'Новости банков',
  'Новости вкладов',
  'Новости кредитов',
  'Аналитика',
  'Новости экономики'
]
const selectedCat = ref('Все категории')

const newsList = ref([
  {
    id: 1,
    title: 'Philip Morris работает над вариантами выхода с российского рынка',
    category: 'Новости экономики',
    date: '16 февраля 2022',
    excerpt: 'Совет директоров и топ-менеджеры Philip Morris работают над вариантами упорядоченного выхода с российского рынка.',
    bg: '#E2EDFE'
  },
  {
    id: 2,
    title: 'Национальный банк РК сохранил базовую ставку на уровне 14,5%',
    category: 'Новости банков',
    date: '15 февраля 2022',
    excerpt: 'Комитет по денежно-кредитной политике Национального Банка принял решение сохранить базовую ставку с процентным коридором.',
    bg: '#FEF1E2'
  },
  {
    id: 3,
    title: 'Казахстанцы открыли рекордное количество депозитов за месяц',
    category: 'Новости вкладов',
    date: '14 февраля 2022',
    excerpt: 'Общий объем вкладов физических лиц в банках второго уровня превысил исторический максимум на фоне привлекательных процентных ставок.',
    bg: '#F1FED5'
  },
  {
    id: 4,
    title: 'Банки Казахстана расширяют программы кредитования для малого бизнеса',
    category: 'Новости кредитов',
    date: '12 февраля 2022',
    excerpt: 'Финансовые организации внедряют скоринговые модели на базе искусственного интеллекта для ускорения выдачи займов.',
    bg: '#FEE2E2'
  },
  {
    id: 5,
    title: 'Анализ курса тенге: динамика валютных торгов на бирже KASE',
    category: 'Аналитика',
    date: '10 февраля 2022',
    excerpt: 'Эксперты финансового рынка представили подробный отчет по колебаниям курса доллара и евро в Казахстане.',
    bg: 'rgba(214, 213, 254, 0.7)'
  },
  {
    id: 6,
    title: 'Altyn Bank запустил новые цифровые сервисы для корпоративных клиентов',
    category: 'Новости банков',
    date: '08 февраля 2022',
    excerpt: 'Банк расширяет возможности дистанционного банковского обслуживания для юридических лиц и ИП.',
    bg: 'rgba(213, 254, 252, 0.7)'
  }
])

const filteredNews = computed(() => {
  if (selectedCat.value === 'Все категории') return newsList.value
  return newsList.value.filter(n => n.category === selectedCat.value)
})
</script>

<style lang="scss" scoped>
.news-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.news-page {
  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 8px;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__subtitle {
    font-size: 14px;
    color: #828282;
    margin-bottom: 24px;
  }
}

.news-categories {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.news-cat-btn {
  padding: 8px 18px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  color: #1e1e1e;
  transition: all 0.2s ease;

  &.active, &:hover {
    background: #ff8a16;
    border-color: #ff8a16;
    color: #ffffff;
  }
}

/* 3-Column News Grid (Frame 54 & 55) */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.news-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }

  &__thumb {
    height: 140px;
    padding: 16px;
    display: flex;
    align-items: flex-start;
  }

  &__category {
    background: rgba(255, 255, 255, 0.92);
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    color: #1e1e1e;
  }

  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__date {
    font-size: 11.5px;
    color: #828282;
    margin-bottom: 8px;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.35;
    margin: 0 0 10px 0;

    a {
      color: #1e1e1e;
      text-decoration: none;

      &:hover {
        color: #ff8a16;
      }
    }
  }

  &__excerpt {
    font-size: 13px;
    line-height: 1.5;
    color: #666666;
    margin: 0 0 16px 0;
    flex: 1;
  }

  &__more {
    color: #ff8a16;
    text-decoration: underline;
    font-weight: 600;
    font-size: 13px;
    align-self: flex-start;

    &:hover {
      color: #e67508;
    }
  }
}

/* Pagination */
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid #f0f0f0;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
  }
}

.pagination {
  display: flex;
  align-items: center;
  gap: 6px;

  .page-num {
    width: 31px;
    height: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    background: #ffffff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    color: #1e1e1e;
    transition: all 0.2s;

    &.active, &:hover {
      background: #ff8a16;
      border-color: #ff8a16;
      color: #ffffff;
    }
  }

  .page-dots {
    color: #828282;
    padding: 0 4px;
  }
}

.pagination-info {
  font-size: 12px;
  color: #828282;
}
</style>