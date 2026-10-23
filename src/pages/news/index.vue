<template>
  <div>
    <Navbar />
    <main class="main news-page">
      <div class="container">
        <h1 class="news-page__title section-title">Новости финансов и банков</h1>
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

        <!-- News Grid -->
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
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from '@/components/Navbar.vue'

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
    title: 'Национальный банк РК сохранил базовую ставку на уровне 14,5%',
    category: 'Новости банков',
    date: 'Сегодня, 14:20',
    excerpt: 'Комитет по денежно-кредитной политике Национального Банка принял решение сохранить базовую ставку с процентным коридором +/- 1,0 п.п.',
    bg: '#E2EDFE'
  },
  {
    id: 2,
    title: 'Казахстанцы открыли рекордное количество депозитов за месяц',
    category: 'Новости вкладов',
    date: 'Вчера, 18:30',
    excerpt: 'Общий объем вкладов физических лиц в банках второго уровня превысил исторический максимум на фоне привлекательных процентных ставок.',
    bg: '#FEF1E2'
  },
  {
    id: 3,
    title: 'Банки Казахстана расширяют программы кредитования для малого бизнеса',
    category: 'Новости кредитов',
    date: '21 октября, 11:15',
    excerpt: 'Финансовые организации внедряют скоринговые модели на базе искусственного интеллекта для ускорения выдачи займов предпринимателям.',
    bg: '#F1FED5'
  },
  {
    id: 4,
    title: 'Анализ курса тенге: влияние стоимости энергоносителей и динамики доллара',
    category: 'Аналитика',
    date: '20 октября, 09:40',
    excerpt: 'Эксперты финансового рынка представили прогноз валютных колебаний на ближайший квартал.',
    bg: '#FEE2E2'
  }
])

const filteredNews = computed(() => {
  if (selectedCat.value === 'Все категории') return newsList.value
  return newsList.value.filter(n => n.category === selectedCat.value)
})
</script>

<style lang="scss" scoped>
.news-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__subtitle {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
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
  padding: 8px 16px;
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: #333333;
  transition: all 0.2s ease;

  &.active, &:hover {
    background: #ff8a16;
    border-color: #ff8a16;
    color: #ffffff;
  }
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.news-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;

  &__thumb {
    height: 140px;
    padding: 16px;
    display: flex;
    align-items: flex-start;
  }

  &__category {
    background: rgba(255, 255, 255, 0.9);
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
    font-size: 12px;
    color: #888888;
    margin-bottom: 6px;
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.35;
    margin-bottom: 10px;

    a {
      color: #1e1e1e;
      text-decoration: none;

      &:hover {
        color: #ff8a16;
      }
    }
  }

  &__excerpt {
    font-size: 14px;
    line-height: 1.5;
    color: #666666;
    margin-bottom: 16px;
    flex: 1;
  }

  &__more {
    color: #ff8a16;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
