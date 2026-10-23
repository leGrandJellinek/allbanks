<template>
  <div>
    <Navbar />
    <main class="main bank-detail">
      <div class="container">
        <!-- Back link -->
        <router-link to="/banks" class="bank-detail__back">
          ‹ Вернуться назад
        </router-link>

        <div class="bank-detail__card" v-if="bank">
          <div class="bank-detail__top">
            <div class="bank-detail__brand">
              <img :src="getMainImage(bank.icon)" :alt="bank.name" class="bank-detail__logo" />
              <h1 class="bank-detail__name">{{ bank.name }}</h1>
            </div>
            <p class="bank-detail__license">{{ bank.license }}</p>
          </div>

          <div class="bank-detail__desc">
            <p>
              {{ bank.name }} — универсальный коммерческий банк Казахстана, предоставляющий широкий спектр финансовых услуг для физических и юридических лиц. Банк стабильно входит в число надежных финансовых институтов страны с высокими рейтингами кредитоспособности.
            </p>
          </div>

          <!-- Requisites -->
          <div class="bank-detail__section">
            <h2 class="bank-detail__subtitle">Справочная информация</h2>
            <ul class="bank-detail__requisites">
              <li>
                <strong>Юридический адрес:</strong>
                <span>{{ bank.location }}</span>
              </li>
              <li>
                <strong>Телефон call-центра:</strong>
                <a :href="`tel:${bank.phoneNumber}`">{{ bank.phoneNumber }}</a>
              </li>
              <li>
                <strong>Официальный сайт:</strong>
                <a :href="`https://${bank.website}`" target="_blank" rel="noopener">{{ bank.website }}</a>
              </li>
            </ul>
          </div>

          <!-- Branches Section -->
          <div class="bank-detail__section">
            <div class="bank-detail__section-head">
              <h2 class="bank-detail__subtitle">Отделения</h2>
              <button class="bank-detail__toggle-btn" @click="showBranches = !showBranches">
                {{ showBranches ? 'Скрыть филиалы' : 'Показать филиалы' }}
              </button>
            </div>

            <div v-if="showBranches" class="bank-detail__branches-list">
              <div class="branch-item" v-for="(branch, idx) in branches" :key="idx">
                <p class="branch-item__phone">{{ branch.phone }}</p>
                <p class="branch-item__address">{{ branch.address }}</p>
                <p class="branch-item__hours">• {{ branch.hours }}</p>
              </div>
            </div>
          </div>

          <!-- Reviews / Comments Section -->
          <div class="bank-detail__section">
            <h2 class="bank-detail__subtitle">Комментарии (3)</h2>
            <div class="bank-detail__comments">
              <div class="comment-item" v-for="c in comments" :key="c.id">
                <div class="comment-item__head">
                  <span class="comment-item__author">👤 {{ c.author }}</span>
                  <span class="comment-item__date">{{ c.date }}</span>
                </div>
                <p class="comment-item__text">{{ c.text }}</p>
                <button class="comment-item__reply">Ответить</button>
              </div>
            </div>

            <!-- Comment Form -->
            <div class="bank-detail__form-block">
              <h3 class="bank-detail__form-title">Оставить комментарий</h3>
              <form @submit.prevent="submitComment" class="bank-detail__form">
                <input v-model="commentForm.name" type="text" placeholder="Имя" required />
                <input v-model="commentForm.email" type="email" placeholder="Ваш e-mail *" required />
                <textarea v-model="commentForm.text" placeholder="Комментарий" rows="4" required></textarea>
                <button type="submit" class="bank-detail__submit-btn">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { useBanksStore } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

const route = useRoute()
const banksStore = useBanksStore()

const bankId = computed(() => Number((route.params as { id?: string }).id) || 1)
const bank = computed(() => {
  return banksStore.banks.find(b => b.id === bankId.value) || banksStore.banks[0]
})

const showBranches = ref(true)
const branches = ref([
  {
    phone: '+7(727) 35 65 777',
    address: 'Алматы, ул. Толе Би, 101, уг. Байтурсынова',
    hours: 'Понедельник - Пятница: 09:00 - 18:00'
  },
  {
    phone: '+7 (727) 259 69 00',
    address: 'Алматы, пр. Достык, 43 / Астана, А2101H3',
    hours: 'Понедельник - Пятница: 09:00 - 18:00'
  },
  {
    phone: '+7(7122) 59 69 00',
    address: 'Атырау, пр. Студенческий, д. 55',
    hours: 'Понедельник - Пятница: 09:00 - 18:00'
  }
])

const comments = ref([
  {
    id: 1,
    author: 'Жаксылык',
    date: '28 февраля 2022, 11:34',
    text: 'Могу ли провести рефинансирование действующего займа в данном банке?'
  },
  {
    id: 2,
    author: 'Динара',
    date: '15 января 2022, 16:10',
    text: 'Как оформить у вас кредит на сумму семь миллионов тенге под залог квартиры в Астане?'
  },
  {
    id: 3,
    author: 'Саулегуль',
    date: '03 декабря 2021, 09:45',
    text: 'Добрый день, у меня зарплатная карта в вашем банке. Могу ли рассчитывать на сниженную ставку?'
  }
])

const commentForm = ref({
  name: '',
  email: '',
  text: ''
})

function submitComment() {
  if (!commentForm.value.name || !commentForm.value.text) return
  comments.value.unshift({
    id: Date.now(),
    author: commentForm.value.name,
    date: 'Только что',
    text: commentForm.value.text
  })
  commentForm.value.name = ''
  commentForm.value.email = ''
  commentForm.value.text = ''
  alert('Ваш комментарий успешно отправлен!')
}
</script>

<style lang="scss" scoped>
.bank-detail {
  padding-bottom: 80px;

  &__back {
    display: inline-block;
    color: #ff8a16;
    text-decoration: none;
    font-size: 15px;
    margin-bottom: 24px;
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

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 20px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__logo {
    height: 48px;
    object-fit: contain;
  }

  &__name {
    font-size: 26px;
    font-weight: 700;
    color: #000000;
  }

  &__license {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
  }

  &__desc {
    font-size: 15px;
    line-height: 1.6;
    color: #333333;
    margin-bottom: 30px;
  }

  &__section {
    margin-top: 36px;
    border-top: 1px solid #f0f0f0;
    padding-top: 28px;
  }

  &__section-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 18px;
  }

  &__toggle-btn {
    background: none;
    border: 1px solid #ff8a16;
    color: #ff8a16;
    padding: 6px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
  }

  &__requisites {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      font-size: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      strong {
        color: #555555;
      }

      a {
        color: #ff8a16;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__branches-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .branch-item {
    background: #fbfbfb;
    border: 1px solid #f0f0f0;
    padding: 16px 20px;
    border-radius: 8px;

    &__phone {
      font-weight: 700;
      color: #1e1e1e;
      margin-bottom: 6px;
    }

    &__address {
      font-size: 14px;
      color: #444444;
      margin-bottom: 4px;
    }

    &__hours {
      font-size: 13px;
      color: #888888;
    }
  }

  &__comments {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 30px;
  }

  .comment-item {
    padding: 16px;
    background: #fdfdfd;
    border: 1px solid #f0f0f0;
    border-radius: 8px;

    &__head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 13px;
    }

    &__author {
      font-weight: 600;
      color: #1e1e1e;
    }

    &__date {
      color: #999999;
    }

    &__text {
      font-size: 14px;
      line-height: 1.5;
      color: #333333;
      margin-bottom: 10px;
    }

    &__reply {
      background: none;
      border: none;
      color: #ff8a16;
      font-size: 12px;
      cursor: pointer;
      padding: 0;
      text-decoration: underline;
    }
  }

  &__form-block {
    background: #fafafa;
    border-radius: 10px;
    padding: 24px;
    margin-top: 24px;
  }

  &__form-title {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    input, textarea {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      font-size: 14px;
      font-family: inherit;
      background: #ffffff;

      &:focus {
        outline: none;
        border-color: #ff8a16;
      }
    }

    button {
      align-self: flex-start;
      background: #ff8a16;
      color: #ffffff;
      border: none;
      padding: 12px 28px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background: #e67508;
      }
    }
  }
}
</style>
