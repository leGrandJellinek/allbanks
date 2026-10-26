<template>
  <div class="comments-section">
    <!-- Reviews Thread Matching Figma -->
    <div class="comments-thread">
      <h3 class="comments-title">Отзывы и вопросы пользователей</h3>
      <div v-for="review in reviews" :key="review.id" class="review-item">
        <div class="review-item__header">
          <div class="review-item__user">
            <span class="user-icon">👤</span>
            <strong class="user-name">{{ review.name }}</strong>
          </div>
          <span class="review-date">{{ review.date }}</span>
        </div>
        <p class="review-text">{{ review.text }}</p>
        <button class="review-reply-btn" @click="handleReply(review.name)">Ответить</button>
      </div>

      <!-- Pagination -->
      <div class="comments-pagination">
        <button class="page-btn active">1</button>
        <button class="page-btn">2</button>
        <button class="page-btn">3</button>
        <span class="page-dots">...</span>
        <button class="page-btn">30</button>
        <span class="pagination-info">Отзывов 1—15 из 426</span>
      </div>
    </div>

    <!-- Leave Comment Card Matching Figma Artboard 10 & 11 -->
    <div class="comment-card">
      <div class="comment-card__header">
        <h4 class="comment-card__title">Оставить комментарий</h4>
        <div class="comment-card__auth-links">
          <a href="#" @click.prevent="alertAuth">Войти в личный кабинет</a>
          <span>/</span>
          <a href="#" @click.prevent="alertAuth">Зарегистрироваться</a>
        </div>
      </div>

      <form class="comment-card__form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <input type="text" v-model="formName" placeholder="Имя" required />
        </div>
        <div class="form-group">
          <input type="email" v-model="formEmail" placeholder="Ваш e-mail *" required />
        </div>
        <div class="form-group">
          <textarea v-model="formComment" placeholder="Комментарий:" rows="4" required></textarea>
        </div>
        <button type="submit" class="comment-submit-btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formName = ref('')
const formEmail = ref('')
const formComment = ref('')

const reviews = ref([
  {
    id: 1,
    name: 'Динара',
    date: '26 февраля 2018, 11:34',
    text: 'Как оформить у вас кредит на сумму семь миллионов тенге под залог квартиры в Астане площадью 80 кв.м. оценка стоимости порядка 75 тысяч долларов. При сроке погашения десять лет сколько придется платить ежемесячно? Какова процентная ставка, за десять лет сколько миллионов тенге будет моя переплата? Можно досрочно погасить кредит?'
  },
  {
    id: 2,
    name: 'Сандугаш',
    date: '26 февраля 2018, 11:34',
    text: 'Добрый день, у меня зарплатная карта алтын банк. Меня интересует ипотека сейчас связи с возобновлением стройки в банках других проходят всевозможные акции по выгодным условиям (без первоначального взноса или низкий %, залоговое имущество итд). И так далее, у меня стабильная заработная плата с января 196 000 на карту, хорошая кредитная история часто пользуюсь кредитами и погашаю в срок. Вышлите пожалуйста условия по ипотеке в вашем банке. Спасибо за подробный ответ.'
  },
  {
    id: 3,
    name: 'Жаскайрат',
    date: '26 февраля 2018, 11:34',
    text: '...мен сиздерден карточка алдым енди кредит алгым кеп едим калай алам'
  }
])

function handleReply(name: string) {
  formComment.value = `@${name}, `
}

function handleSubmit() {
  if (!formName.value || !formComment.value) return
  reviews.value.unshift({
    id: Date.now(),
    name: formName.value,
    date: 'Только что',
    text: formComment.value
  })
  alert('Ваш комментарий успешно опубликован!')
  formName.value = ''
  formEmail.value = ''
  formComment.value = ''
}

function alertAuth() {
  alert('Авторизация через личный кабинет AllBanks')
}
</script>

<style lang="scss" scoped>
.comments-section {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.comments-title {
  font-size: 20px;
  font-weight: 700;
  color: #1e1e1e;
  margin-bottom: 20px;
}

.comments-thread {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.review-item {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: 8px;

    .user-icon {
      font-size: 16px;
    }

    .user-name {
      font-size: 15px;
      font-weight: 700;
      color: #1e1e1e;
    }
  }

  .review-date {
    font-size: 12px;
    color: #999999;
  }

  .review-text {
    font-size: 14px;
    line-height: 1.6;
    color: #444444;
  }

  .review-reply-btn {
    align-self: flex-start;
    background: none;
    border: none;
    color: #ff8a16;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  }
}

.comments-pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;

  .page-btn {
    width: 34px;
    height: 34px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    background: #ffffff;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: #333333;

    &.active {
      background: #ffffff;
      border-color: #ff8a16;
      color: #ff8a16;
    }
  }

  .page-dots {
    color: #999999;
    padding: 0 4px;
  }

  .pagination-info {
    margin-left: auto;
    font-size: 13px;
    color: #888888;
  }
}

.comment-card {
  background: #fdfdfd;
  border: 1px solid #eeeeee;
  border-radius: 14px;
  padding: 24px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__title {
    font-size: 17px;
    font-weight: 700;
    color: #1e1e1e;
  }

  &__auth-links {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;

    a {
      color: #ff8a16;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      color: #cccccc;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 14px;

    .form-group {
      input, textarea {
        width: 100%;
        padding: 12px 14px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        outline: none;
        box-sizing: border-box;

        &:focus {
          border-color: #ff8a16;
        }
      }
    }
  }

  .comment-submit-btn {
    align-self: flex-start;
    background: #ff8a16;
    color: #ffffff;
    border: none;
    padding: 11px 28px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #e67508;
    }
  }
}
</style>
