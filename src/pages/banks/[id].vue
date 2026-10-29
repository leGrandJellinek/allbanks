<template>
  <div class="bank-detail-wrapper">
    <Navbar />
    <main class="main bank-detail">
      <div class="container">
        <!-- Breadcrumb / back link -->
        <div class="bank-detail__breadcrumbs">
          <router-link to="/banks" class="bank-detail__back">
            ‹ Назад к списку банков
          </router-link>
        </div>

        <h1 class="bank-detail__page-title section-title">{{ bank.name }}</h1>

        <!-- Top Overview Grid (Figma Frame 60) -->
        <div class="bank-detail__overview-grid">
          <!-- Left Info Card -->
          <div class="bank-detail__info-card">
            <div class="info-card__logo-wrap">
              <img :src="getMainImage(bank.icon)" :alt="bank.name" class="info-card__logo" />
            </div>
            <div class="info-card__divider"></div>
            <ul class="info-card__list">
              <li class="info-card__item">
                <span class="info-card__dot"></span>
                <span class="info-card__text"><strong>АО "{{ bank.name }}"</strong></span>
              </li>
              <li class="info-card__item">
                <span class="info-card__dot"></span>
                <span class="info-card__text">{{ bank.license }}</span>
              </li>
              <li class="info-card__item">
                <span class="info-card__dot"></span>
                <span class="info-card__text">Руководитель: Марат Альменов (по информации на 16.02.2021)</span>
              </li>
              <li class="info-card__item">
                <span class="info-card__dot"></span>
                <span class="info-card__text">{{ bank.location }}</span>
              </li>
              <li class="info-card__item">
                <span class="info-card__dot"></span>
                <a :href="`tel:${bank.phoneNumber}`" class="info-card__link">{{ bank.phoneNumber }}</a>
              </li>
            </ul>
          </div>

          <!-- Right Reference Info Block -->
          <div class="bank-detail__ref-block">
            <h2 class="ref-block__title">Справочная информация:</h2>
            <p class="ref-block__text">
              {{ bank.name }} — универсальный коммерческий банк, предоставляющий полный спектр продуктов и услуг корпоративным и розничным клиентам. Центральный офис банка находится в г. Алматы, Казахстан. Банк имеет филиалы в пяти крупных городах страны — Алматы, Астана (Нур-Султан), Шымкент, Актау и Атырау.
            </p>
            <p class="ref-block__text">
              Акционерами банка являются ведущие международные и национальные финансовые институты: China CITIC Bank Corporation Limited (50.1%), китайская компания China Shuangwei Investment Co., Ltd. (9.9%) и AO «Народный Банк Казахстана» (40.0%).
            </p>
            <button class="ref-block__more-btn" @click="isExpanded = !isExpanded">
              {{ isExpanded ? 'Свернуть' : 'Читать далее' }}
            </button>
            <p v-if="isExpanded" class="ref-block__text extra">
              Банк обладает высоким кредитным рейтингом инвестиционного уровня от международных агентств Fitch Ratings и Standard & Poor's. Обслуживание клиентов осуществляется по современным стандартам цифрового банкинга и через развитую сеть банкоматов и отделений по всей Республике.
            </p>
          </div>
        </div>

        <!-- Branches Section -->
        <div class="bank-detail__section">
          <div class="bank-detail__section-head">
            <h2 class="bank-detail__section-title">Отделения</h2>
            <button class="bank-detail__toggle-btn" @click="showBranches = !showBranches">
              {{ showBranches ? 'Скрыть филиалы' : 'Показать филиалы' }}
            </button>
          </div>

          <div v-if="showBranches" class="bank-detail__branches-grid">
            <div class="branch-card" v-for="(branch, idx) in branches" :key="idx">
              <span class="branch-card__dot"></span>
              <div class="branch-card__content">
                <p class="branch-card__address">{{ branch.address }}</p>
                <a :href="`tel:${branch.phone}`" class="branch-card__phone">{{ branch.phone }}</a>
                <p class="branch-card__hours">• {{ branch.hours }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Comments & Reviews Block (Figma Artboards 10, 11 & Frame 60) -->
        <CommentsBlock />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import CommentsBlock from '@/components/CommentsBlock.vue'
import { useBanksStore } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

const route = useRoute()
const banksStore = useBanksStore()

const bankId = computed(() => Number((route.params as { id?: string }).id) || 1)
const bank = computed(() => {
  return banksStore.banks.find(b => b.id === bankId.value) || banksStore.banks[0]
})

watch(bank, (b) => {
  if (b) document.title = `${b.name} - AllBanks.kz`
}, { immediate: true })

const isExpanded = ref(false)
const showBranches = ref(true)

const branches = ref([
  {
    phone: '+7(727) 35 65 777',
    address: 'Республика Казахстан, A05A1B9, г. Алматы, пр. Абая 109 «В»',
    hours: 'Понедельник - Пятница: 09:00 - 18:00'
  },
  {
    phone: '+7 (7172) 59 69 00',
    address: 'г. Астана, ул. Достык 18, БЦ «Москва», 1 этаж',
    hours: 'Понедельник - Пятница: 09:00 - 18:00'
  },
  {
    phone: '+7 (7252) 99 55 11',
    address: 'г. Шымкент, пр. Тауке хана 45',
    hours: 'Понедельник - Пятница: 09:00 - 18:00'
  },
  {
    phone: '+7 (7122) 59 69 00',
    address: 'г. Атырау, пр. Студенческий 55',
    hours: 'Понедельник - Пятница: 09:00 - 18:00'
  }
])
</script>

<style lang="scss" scoped>
.bank-detail-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.bank-detail {
  &__breadcrumbs {
    margin-bottom: 16px;
  }

  &__back {
    font-size: 14px;
    font-weight: 500;
    color: #ff8a16;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__page-title {
    font-size: 28px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 24px;
  }

  &__overview-grid {
    display: grid;
    grid-template-columns: 377px 1fr;
    gap: 32px;
    margin-bottom: 40px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  &__info-card {
    background: rgba(235, 235, 235, 0.4);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 14px;
    padding: 24px;

    .info-card__logo-wrap {
      display: flex;
      align-items: center;
      height: 48px;
      margin-bottom: 12px;
    }

    .info-card__logo {
      max-height: 44px;
      max-width: 160px;
      object-fit: contain;
    }

    .info-card__divider {
      height: 1px;
      background: #e0e0e0;
      margin: 16px 0;
    }

    .info-card__list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .info-card__item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 12px;
      line-height: 1.45;
      color: #333333;
    }

    .info-card__dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #828282;
      flex-shrink: 0;
      margin-top: 6px;
    }

    .info-card__link {
      color: #ff8a16;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__ref-block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .ref-block__title {
      font-size: 18px;
      font-weight: 700;
      color: #1e1e1e;
      margin-bottom: 14px;
    }

    .ref-block__text {
      font-size: 14.5px;
      line-height: 1.65;
      color: #4f4f4f;
      margin-bottom: 14px;

      &.extra {
        margin-top: 10px;
        background: #f9f9f9;
        padding: 12px 16px;
        border-radius: 8px;
      }
    }

    .ref-block__more-btn {
      align-self: flex-start;
      background: none;
      border: none;
      padding: 0;
      color: #ff8a16;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: #e67508;
      }
    }
  }

  &__section {
    margin-bottom: 40px;
    padding-top: 24px;
    border-top: 1px solid #f0f0f0;
  }

  &__section-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__section-title {
    font-size: 22px;
    font-weight: 700;
    color: #1e1e1e;
  }

  &__toggle-btn {
    background: none;
    border: 1px solid #ff8a16;
    color: #ff8a16;
    padding: 6px 14px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #ff8a16;
      color: #ffffff;
    }
  }

  &__branches-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .branch-card {
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 16px 18px;
    display: flex;
    gap: 10px;
    align-items: flex-start;

    &__dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ff8a16;
      margin-top: 6px;
      flex-shrink: 0;
    }

    &__address {
      font-size: 13.5px;
      font-weight: 600;
      color: #1e1e1e;
      margin-bottom: 4px;
    }

    &__phone {
      display: inline-block;
      font-size: 13px;
      color: #ff8a16;
      text-decoration: none;
      margin-bottom: 4px;
    }

    &__hours {
      font-size: 11.5px;
      color: #828282;
      margin: 0;
    }
  }
}
</style>