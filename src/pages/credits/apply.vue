<template>
  <div>
    <Navbar />
    <main class="main apply-page">
      <div class="container">
        <router-link to="/credits" class="apply-page__back">‹ Назад к кредитам</router-link>

        <div class="apply-card">
          <div class="apply-card__header">
            <h1 class="apply-card__title">
              Поздравляем! Вы в одном шаге от получения кредита!
            </h1>
            <p class="apply-card__subtitle">
              Заполните короткую анкету, и банк свяжется с вами в течение нескольких минут для подтверждения заявки.
            </p>
          </div>

          <form @submit.prevent="submitApplication" class="apply-form">
            <div class="form-group">
              <label>ФИО полностью *</label>
              <input v-model="form.fullName" type="text" placeholder="Иванов Иван Иванович" required />
            </div>

            <div class="form-group">
              <label>ИИН (12 цифр) *</label>
              <input v-model="form.iin" type="text" maxlength="12" placeholder="000000000000" required />
            </div>

            <div class="form-group">
              <label>Номер телефона *</label>
              <input v-model="form.phone" type="tel" placeholder="+7 (___) ___-__-__" required />
            </div>

            <div class="form-group">
              <label>Сумма кредита (₸) *</label>
              <input v-model="form.sum" type="number" placeholder="500000" required />
            </div>

            <div class="form-group">
              <label>Срок кредитования</label>
              <select v-model="form.term">
                <option value="12">12 месяцев</option>
                <option value="24">24 месяца</option>
                <option value="36">36 месяцев</option>
                <option value="60">60 месяцев</option>
              </select>
            </div>

            <div class="form-agree">
              <input type="checkbox" id="agree" v-model="form.agree" required />
              <label for="agree">
                Я даю согласие на обработку персональных данных и передачу кредитной истории
              </label>
            </div>

            <button type="submit" class="apply-submit-btn">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const form = ref({
  fullName: '',
  iin: '',
  phone: '',
  sum: 1000000,
  term: '24',
  agree: true
})

function submitApplication() {
  alert('Заявка успешно принята! Ожидайте звонка от банка.')
}
</script>

<style lang="scss" scoped>
.apply-page {
  padding-bottom: 70px;

  &__back {
    display: inline-block;
    color: #ff8a16;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 500;
  }
}

.apply-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 14px;
  padding: 32px 28px;
  max-width: 680px;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);

  &__header {
    margin-bottom: 28px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 20px;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  &__subtitle {
    font-size: 14px;
    color: #666666;
    line-height: 1.5;
  }
}

.apply-form {
  display: flex;
  flex-direction: column;
  gap: 18px;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
      font-size: 13px;
      font-weight: 600;
      color: #333333;
    }

    input, select {
      padding: 12px 14px;
      border: 1px solid #dddddd;
      border-radius: 6px;
      font-size: 14px;
      font-family: inherit;

      &:focus {
        outline: none;
        border-color: #ff8a16;
      }
    }
  }

  .form-agree {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 12px;
    color: #777777;
    line-height: 1.4;

    input {
      margin-top: 2px;
    }
  }

  .apply-submit-btn {
    background: #ff8a16;
    color: #ffffff;
    border: none;
    padding: 14px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.2s;

    &:hover {
      background: #e67508;
    }
  }
}
</style>
