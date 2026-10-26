<template>
  <div class="exchangers-page-wrapper">
    <Navbar />
    <main class="main exchangers-page">
      <div class="container">
        <!-- Breadcrumb / Header links -->
        <div class="exchangers-page__top-links">
          <button class="action-link" @click="activeTab = 'converter'">Конвертер валют по лучшим курсам</button>
          <span class="sep">•</span>
          <a href="mailto:info@allbanks.kz" class="action-link highlight">Добавьте Ваш обменный пункт БЕСПЛАТНО!</a>
        </div>

        <h1 class="exchangers-page__title section-title">
          Курс доллара, евро, рубля и юаня в обменниках {{ banksStore.selectedCity }} на сегодня
        </h1>

        <!-- Currency Converter Widget (Figma Frame 59) -->
        <div class="converter-box">
          <div class="converter-box__header">
            <h2 class="converter-box__title">
              Купить {{ calcAmount }} {{ calcCurrency }} по лучшему курсу в г. {{ banksStore.selectedCity }}
            </h2>
          </div>
          <div class="converter-box__form">
            <div class="form-item action-select">
              <label>Хочу</label>
              <select v-model="calcAction">
                <option value="buy">Купить</option>
                <option value="sell">Продать</option>
              </select>
            </div>
            <div class="form-item amount-input">
              <label>Сумма</label>
              <input type="number" v-model.number="calcAmount" min="1" />
            </div>
            <div class="form-item currency-select">
              <label>Валюта</label>
              <select v-model="calcCurrency">
                <option value="USD">USD (доллары)</option>
                <option value="EUR">EUR (евро)</option>
                <option value="RUB">RUB (рубли)</option>
                <option value="CNY">CNY (юани)</option>
              </select>
            </div>
            <button class="calc-btn" @click="doCalculation">
              Рассчитать
            </button>
          </div>

          <!-- Top Exchangers Results (Figma Frame 59 3-column cards) -->
          <div class="converter-box__results">
            <h3 class="results-title">
              Где лучше {{ calcAction === 'buy' ? 'Купить' : 'Продать' }} {{ calcAmount }} {{ calcCurrency }} в г. {{ banksStore.selectedCity }}
            </h3>
            <div class="exchanger-cards-grid">
              <div 
                v-for="exc in topExchangers" 
                :key="exc.id" 
                class="exc-card"
              >
                <div class="exc-card__top">
                  <h4 class="exc-card__name">{{ exc.name }}</h4>
                  <div class="exc-card__rates">
                    <span class="rate-val">Курс: <strong>{{ exc.rate }}</strong></span>
                    <span class="total-val">Итог: <strong>{{ (calcAmount * exc.rate).toLocaleString('ru-RU') }} ₸</strong></span>
                  </div>
                </div>
                <div class="exc-card__divider"></div>
                <ul class="exc-card__details">
                  <li>
                    <span class="dot"></span>
                    <span>{{ exc.address }}</span>
                  </li>
                  <li>
                    <span class="dot"></span>
                    <a :href="`tel:${exc.phone}`">{{ exc.phone }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter & Search Card -->
        <div class="exchangers-filter-card">
          <div class="filter-header">
            <h3 class="filter-title">Фильтр</h3>
            <div class="filter-city">
              <button class="city-selector-btn" @click="banksStore.toggleCityDropdown">
                <span>{{ banksStore.selectedCity }}</span>
                <span class="arrow">▾</span>
              </button>
            </div>
          </div>
          <div class="filter-controls">
            <div class="filter-select-group">
              <label>Район</label>
              <select v-model="selectedDistrict">
                <option value="all">Все районы</option>
                <option value="almaty">Алмалинский</option>
                <option value="bostandyk">Бостандыкский</option>
                <option value="medeu">Медеуский</option>
                <option value="auezov">Ауэзовский</option>
              </select>
            </div>
            <div class="filter-actions">
              <button class="map-btn" @click="showMapAlert">Показать на карте</button>
            </div>
          </div>
        </div>

        <!-- Exchangers Rates Table Card (Desktop Multi-column + Mobile) -->
        <div class="exchangers-table-card">
          <div class="table-head-bar">
            <h2 class="table-title">Курсы валют в обменных пунктах на сегодня</h2>
          </div>

          <!-- Desktop Comparison Table (1:1 with Figma Frame 47) -->
          <div class="desktop-only full-table-wrap">
            <table class="desktop-exc-table">
              <thead>
                <tr class="thead-main">
                  <th class="col-name">Обменный пункт</th>
                  <th colspan="2" class="col-curr usd">USD $</th>
                  <th colspan="2" class="col-curr eur">EUR €</th>
                  <th colspan="2" class="col-curr rub">RUB ₽</th>
                  <th colspan="2" class="col-curr cny">CNY ¥</th>
                </tr>
                <tr class="thead-sub">
                  <th class="col-name"></th>
                  <th>Покупка</th>
                  <th>Продажа</th>
                  <th>Покупка</th>
                  <th>Продажа</th>
                  <th>Покупка</th>
                  <th>Продажа</th>
                  <th>Покупка</th>
                  <th>Продажа</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in exchangersList" :key="item.id" class="exc-row">
                  <td class="col-name">
                    <div class="exc-info">
                      <strong class="exc-title">{{ item.name }}</strong>
                      <span class="exc-addr">{{ item.address }}</span>
                      <span class="exc-time">Обн. в {{ item.time }}</span>
                    </div>
                  </td>
                  <td class="col-rate"><span class="rate-pill" :class="{ best: item.isBest }">{{ item.usdBuy }}</span></td>
                  <td class="col-rate"><span class="rate-pill">{{ item.usdSell }}</span></td>
                  <td class="col-rate"><span class="rate-pill">{{ item.eurBuy }}</span></td>
                  <td class="col-rate"><span class="rate-pill">{{ item.eurSell }}</span></td>
                  <td class="col-rate"><span class="rate-pill">{{ item.rubBuy }}</span></td>
                  <td class="col-rate"><span class="rate-pill">{{ item.rubSell }}</span></td>
                  <td class="col-rate"><span class="rate-pill">64.50</span></td>
                  <td class="col-rate"><span class="rate-pill">66.20</span></td>
                </tr>

                <!-- Average row -->
                <tr class="exc-row summary-row">
                  <td class="col-name">
                    <strong>Средний курс валют в обменниках</strong>
                  </td>
                  <td class="col-rate"><strong>430.50</strong></td>
                  <td class="col-rate"><strong>435.50</strong></td>
                  <td class="col-rate"><strong>485.00</strong></td>
                  <td class="col-rate"><strong>492.00</strong></td>
                  <td class="col-rate"><strong>5.40</strong></td>
                  <td class="col-rate"><strong>5.80</strong></td>
                  <td class="col-rate"><strong>64.50</strong></td>
                  <td class="col-rate"><strong>66.00</strong></td>
                </tr>

                <!-- Best row -->
                <tr class="exc-row summary-row best">
                  <td class="col-name">
                    <strong>Лучшие курсы валют на сегодня</strong>
                  </td>
                  <td class="col-rate"><span class="rate-pill best">431.00</span></td>
                  <td class="col-rate"><span class="rate-pill best">435.00</span></td>
                  <td class="col-rate"><span class="rate-pill best">486.00</span></td>
                  <td class="col-rate"><span class="rate-pill best">491.00</span></td>
                  <td class="col-rate"><span class="rate-pill best">5.45</span></td>
                  <td class="col-rate"><span class="rate-pill best">5.75</span></td>
                  <td class="col-rate"><span class="rate-pill best">64.80</span></td>
                  <td class="col-rate"><span class="rate-pill best">65.80</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mobile Simplified Table (< 992px) -->
          <div class="mobile-only mobile-exc-wrap">
            <div class="mobile-curr-tabs">
              <button 
                v-for="curr in ['USD', 'EUR', 'RUB', 'CNY']" 
                :key="curr"
                class="m-curr-btn"
                :class="{ active: mobileCurr === curr }"
                @click="mobileCurr = curr"
              >
                {{ curr }}
              </button>
            </div>
            <div class="mobile-table-rows">
              <div class="m-row m-head">
                <span>Обменный пункт</span>
                <span>Покупка</span>
                <span>Продажа</span>
              </div>
              <div v-for="item in exchangersList" :key="item.id" class="m-row">
                <div class="m-col name">
                  <strong>{{ item.name }}</strong>
                  <span>{{ item.address }}</span>
                </div>
                <span class="m-col price buy">{{ item.usdBuy }} ₸</span>
                <span class="m-col price sell">{{ item.usdSell }} ₸</span>
              </div>
            </div>
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
            <span class="pagination-info">Обменников 1—5 из 42</span>
          </div>
        </div>

        <div class="exchangers-page__seo">
          <p>
            На этой странице Вы можете сравнить курс валют в обменных пунктах Алматы. В таблице представлены основные валюты, которые могут Вас заинтересовать. Курс доллара к тенге на сегодня, а также курс евро, рубля, юаня и тенге по отношению к этим валютам — всё на одной странице и удобно для анализа и выбора. Зелёным и оранжевым выделены ячейки с данными, которые являются лучшими предложениями в Алматы на данный момент.
          </p>
          <p class="source-note">
            Данные дополняются из открытых источников: kurs.kz (курс.кз), mig.kz (миг.кз) и др.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()

const activeTab = ref('table')
const calcAction = ref<'buy' | 'sell'>('buy')
const calcAmount = ref(100)
const calcCurrency = ref('USD')
const selectedDistrict = ref('all')
const mobileCurr = ref('USD')

const topExchangers = ref([
  {
    id: 1,
    name: 'Azia Exchange (курсы оптовые от 5000 $)',
    rate: 466.00,
    address: 'мкр. Аксай-5, ул. Момышулы, 25, уг. ул. Жубанова, ТЦ "USH SUNQAR"',
    phone: '+7(727)356-57-77'
  },
  {
    id: 2,
    name: 'ТОО "Триллионер"',
    rate: 466.00,
    address: 'мкр. Аксай-5, ул. Момышулы, 25, уг. ул. Жубанова, ТЦ "USH SUNQAR"',
    phone: '+7(727)327-80-27'
  },
  {
    id: 3,
    name: 'ТОО "TRUST-Exchange"',
    rate: 466.00,
    address: 'ул. Розыбакиева, д. 166/1, напротив Народного банка (выше ул. Сатпаева)',
    phone: '+7(700)278-42-42'
  }
])

const exchangersList = ref([
  {
    id: 1,
    name: 'ТОО "Som Exchange"',
    address: 'Алмалинский, Ауезова, 32 выше Толе би',
    time: '15:12',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80',
    isBest: true
  },
  {
    id: 2,
    name: 'MIRVAN LTD',
    address: 'Медеуский р-н, пр. Достык, 42',
    time: '15:10',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80',
    isBest: false
  },
  {
    id: 3,
    name: 'БАНКА Exchange',
    address: 'Бостандыкский р-н, ул. Гоголя, 84',
    time: '15:08',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80',
    isBest: false
  },
  {
    id: 4,
    name: 'Som Exchange 2',
    address: 'Бостандыкский р-н, ул. Тимирязева, 17',
    time: '15:05',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80',
    isBest: false
  },
  {
    id: 5,
    name: 'Som Exchange 1',
    address: 'Алмалинский р-н, пр. Абая, 50',
    time: '15:00',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80',
    isBest: false
  }
])

function doCalculation() {
  // Recalculates dynamically
}

function showMapAlert() {
  alert('Открытие интерактивной карты обменных пунктов города ' + banksStore.selectedCity)
}
</script>

<style lang="scss" scoped>
.exchangers-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.exchangers-page {
  &__top-links {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;

    .action-link {
      background: none;
      border: none;
      padding: 0;
      font-size: 13.5px;
      color: #ff8a16;
      text-decoration: underline;
      cursor: pointer;

      &.highlight {
        font-weight: 600;
      }
    }

    .sep {
      color: #b8b8b8;
    }
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 24px;
    line-height: 1.25;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__seo {
    margin-top: 32px;
    font-size: 13px;
    line-height: 1.6;
    color: #666666;
    max-width: 1000px;

    .source-note {
      margin-top: 10px;
      color: #828282;
      font-size: 12px;
    }
  }
}

/* Currency Converter Card (Figma Frame 59) */
.converter-box {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);

  &__header {
    margin-bottom: 18px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: #1e1e1e;
  }

  &__form {
    display: flex;
    gap: 16px;
    align-items: flex-end;
    margin-bottom: 24px;
    flex-wrap: wrap;

    .form-item {
      display: flex;
      flex-direction: column;
      gap: 6px;

      label {
        font-size: 12.5px;
        font-weight: 600;
        color: #666666;
      }

      select, input {
        padding: 10px 14px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        font-size: 14px;
        background: #ffffff;
        min-width: 140px;
        outline: none;

        &:focus {
          border-color: #ff8a16;
        }
      }
    }

    .calc-btn {
      background: #ff8a16;
      color: #ffffff;
      border: none;
      padding: 11px 24px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #e67508;
      }
    }
  }

  &__results {
    border-top: 1px solid #f0f0f0;
    padding-top: 20px;

    .results-title {
      font-size: 17px;
      font-weight: 700;
      color: #1e1e1e;
      margin-bottom: 16px;
    }
  }
}

.exchanger-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.exc-card {
  background: rgba(235, 235, 235, 0.35);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 18px 20px;

  &__top {
    margin-bottom: 12px;
  }

  &__name {
    font-size: 15px;
    font-weight: 700;
    color: #1e1e1e;
    margin: 0 0 8px 0;
    line-height: 1.25;
  }

  &__rates {
    display: flex;
    justify-content: space-between;
    font-size: 13px;

    .rate-val strong {
      color: #ff8a16;
    }
    .total-val strong {
      color: #1e1e1e;
    }
  }

  &__divider {
    height: 1px;
    background: #e0e0e0;
    margin: 12px 0;
  }

  &__details {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      font-size: 11.5px;
      color: #4f4f4f;

      .dot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #828282;
        margin-top: 6px;
        flex-shrink: 0;
      }

      a {
        color: #ff8a16;
        text-decoration: none;
      }
    }
  }
}

/* Filter Card */
.exchangers-filter-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 28px;

  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .filter-title {
    font-size: 18px;
    font-weight: 700;
  }

  .city-selector-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #fef2e3;
    border: 1px solid #ff8a16;
    border-radius: 4px;
    padding: 6px 14px;
    color: #ff8a16;
    font-size: 13.5px;
    font-weight: 600;
    cursor: pointer;
  }

  .filter-controls {
    display: flex;
    gap: 16px;
    align-items: flex-end;

    .filter-select-group {
      display: flex;
      flex-direction: column;
      gap: 6px;

      label {
        font-size: 12px;
        font-weight: 600;
        color: #666;
      }

      select {
        padding: 9px 14px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        font-size: 14px;
        min-width: 160px;
      }
    }

    .map-btn {
      background: #ff8a16;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
  }
}

/* Desktop Full Comparison Table (Frame 47) */
.exchangers-table-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);

  .table-head-bar {
    margin-bottom: 20px;

    .table-title {
      font-size: 20px;
      font-weight: 700;
      color: #1e1e1e;
    }
  }
}

.desktop-exc-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    tr.thead-main {
      border-bottom: 1px solid #e0e0e0;

      th {
        padding-bottom: 8px;
        text-align: center;
        font-size: 14px;
        font-weight: 700;

        &.col-name {
          text-align: left;
          width: 280px;
          color: #828282;
        }

        &.usd { color: #ff8a16; }
        &.eur { color: #d92365; }
        &.rub { color: #de251d; }
        &.cny { color: #1e1e1e; }
      }
    }

    tr.thead-sub {
      th {
        padding: 6px 6px 12px 6px;
        font-size: 12.5px;
        font-weight: 500;
        color: #828282;
        text-align: center;
        border-bottom: 1px solid #e0e0e0;
      }
    }
  }

  tbody {
    tr.exc-row {
      td {
        padding: 14px 6px;
        border-bottom: 1px solid #f2f2f2;
        vertical-align: middle;
      }

      &:hover {
        background: #fafafa;
      }

      &.summary-row {
        background: #fdfdfd;
        font-size: 13.5px;

        &.best {
          background: #fef2e3;
          border-bottom: none;
        }
      }
    }
  }

  .exc-info {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .exc-title {
      font-size: 14px;
      font-weight: 600;
      color: #1e1e1e;
    }
    .exc-addr {
      font-size: 11px;
      color: #666666;
    }
    .exc-time {
      font-size: 10px;
      color: #999999;
    }
  }

  .col-rate {
    text-align: center;
  }

  .rate-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 500;
    color: #1e1e1e;
    border-radius: 3px;

    &.best {
      background: #fef2e3;
      font-weight: 700;
    }
  }
}

/* Visibility switches */
.desktop-only {
  display: block;
  @media (max-width: 991px) {
    display: none !important;
  }
}

.mobile-only {
  display: none;
  @media (max-width: 991px) {
    display: block !important;
  }
}

/* Mobile Table */
.mobile-exc-wrap {
  .mobile-curr-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 14px;

    .m-curr-btn {
      padding: 6px 14px;
      border: 1px solid #ff8a16;
      border-radius: 4px;
      background: #ffffff;
      color: #ff8a16;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;

      &.active {
        background: #ff8a16;
        color: #ffffff;
      }
    }
  }

  .m-row {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f2f2f2;
    gap: 8px;

    &.m-head {
      font-size: 13px;
      font-weight: 600;
      color: #828282;
      border-bottom: 1px solid #e0e0e0;
    }

    .m-col {
      &.name {
        flex: 1;
        display: flex;
        flex-direction: column;
        strong { font-size: 13.5px; }
        span { font-size: 11px; color: #828282; }
      }

      &.price {
        width: 75px;
        text-align: right;
        font-size: 14px;
        font-weight: 600;
      }
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