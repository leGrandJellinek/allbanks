<template>
  <div>
    <Navbar />
    <main class="main exchangers-page">
      <div class="container">
        <h1 class="exchangers-page__title section-title">
          Курс доллара, евро, рубля и юаня в обменниках {{ banksStore.selectedCity }} на сегодня
        </h1>
        
        <!-- City Select Filter -->
        <div class="city-selector-bar">
          <div class="city-dropdown-wrap">
            <button class="city-btn" @click="banksStore.toggleCityDropdown">
              <span>{{ banksStore.selectedCity }}</span>
              <span class="arrow">▾</span>
            </button>
            <ul v-if="banksStore.isCityDropdownOpen" class="city-list">
              <li 
                v-for="c in banksStore.cities" 
                :key="c" 
                @click="banksStore.setCity(c)"
                :class="{ active: banksStore.selectedCity === c }"
              >
                {{ c }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Average Rates Card -->
        <div class="avg-rates-card">
          <h2 class="avg-rates-card__title">Средний курс тенге в обменниках</h2>
          <div class="avg-rates-grid">
            <div class="avg-item" v-for="c in banksStore.currencyList" :key="c.id">
              <span class="avg-item__symbol" :style="{ backgroundColor: c.color }">{{ c.symbol }}</span>
              <div class="avg-item__details">
                <strong>{{ c.currencySymbol }} {{ c.currencyName }}</strong>
                <span>Покупка: {{ c.buyPrice }} ₸ / Продажа: {{ c.sellPrice }} ₸</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Search & Filter Box -->
        <div class="exchangers-filter-card">
          <h3 class="filter-title">Фильтр обменников</h3>
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
            <div class="filter-select-group">
              <label>Улица</label>
              <select v-model="selectedStreet">
                <option value="all">Все улицы</option>
                <option value="dostyk">пр. Достык</option>
                <option value="abay">пр. Абая</option>
                <option value="tolebi">ул. Толе би</option>
                <option value="timiryazev">ул. Тимирязева</option>
              </select>
            </div>
            <div class="filter-radios">
              <label class="radio-label">
                <input type="radio" value="best" v-model="rateFilterMode" />
                <span>Только лучшие курсы</span>
              </label>
              <label class="radio-label">
                <input type="radio" value="optimal" v-model="rateFilterMode" />
                <span>Оптимальные курсы</span>
              </label>
            </div>
          </div>
          <div class="filter-actions">
            <button class="map-btn" @click="showMapAlert">Показать на карте</button>
            <button class="reset-btn" @click="resetFilters">Сбросить</button>
          </div>
        </div>

        <!-- Exchangers Table Card -->
        <div class="exchangers-table-card">
          <div class="table-head-bar">
            <h2 class="table-title">Курсы валют в обменных пунктах на сегодня</h2>
            <div class="currency-tabs">
              <button 
                v-for="curr in ['USD', 'EUR', 'RUB', 'CNY']" 
                :key="curr"
                class="curr-tab"
                :class="{ active: activeCurrencyTab === curr }"
                @click="activeCurrencyTab = curr"
              >
                {{ curr }}
              </button>
            </div>
          </div>

          <div class="exchangers-table">
            <div class="table-row header">
              <span class="col name">Обменный пункт</span>
              <span class="col price">Покупка</span>
              <span class="col price">Продажа</span>
            </div>

            <div 
              v-for="item in exchangersList" 
              :key="item.id" 
              class="table-row"
            >
              <div class="col name">
                <strong class="item-title">{{ item.name }}</strong>
                <span class="item-address">📍 {{ item.address }}</span>
              </div>
              <span class="col price buy">{{ item.usdBuy }} ₸</span>
              <span class="col price sell">{{ item.usdSell }} ₸</span>
            </div>

            <!-- Average row -->
            <div class="table-row avg-row">
              <div class="col name">
                <strong>Средний курс валют в обменниках</strong>
              </div>
              <span class="col price buy">430.50 ₸</span>
              <span class="col price sell">437.50 ₸</span>
            </div>

            <!-- Best rate row -->
            <div class="table-row best-row">
              <div class="col name">
                <strong>Лучшие курсы валют на сегодня</strong>
              </div>
              <span class="col price buy highlight">430.50 ₸</span>
              <span class="col price sell highlight">437.50 ₸</span>
            </div>
          </div>

          <!-- Add exchanger CTA link -->
          <div class="add-exchanger-cta">
            <a href="mailto:info@allbanks.kz" class="cta-link">
              + Добавьте Ваш обменный пункт БЕСПЛАТНО!
            </a>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="page-num active">1</button>
            <button class="page-num">2</button>
            <button class="page-num">3</button>
            <span class="page-dots">...</span>
            <button class="page-num">30</button>
          </div>
        </div>

        <div class="exchangers-page__seo">
          <p>
            На этой странице Вы можете сравнить курс валют в обменных пунктах Алматы. В таблице представлены основные валюты, которые могут Вас заинтересовать. Курс доллара и тенге на сегодня, а также курс евро, рубля, юаня и тенге по отношению к валютам. Выделены ячейки с данными, которые являются лучшими предложениями в Алматы на данный момент.
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

const selectedDistrict = ref('all')
const selectedStreet = ref('all')
const rateFilterMode = ref('best')
const activeCurrencyTab = ref('USD')

const exchangersList = ref([
  {
    id: 1,
    name: 'ТОО "Som Exchange"',
    address: 'ул. Богенбай батыра, 114',
    usdBuy: '430.50',
    usdSell: '437.50'
  },
  {
    id: 2,
    name: 'MIRVAN LTD',
    address: 'пр. Достык, 42',
    usdBuy: '430.50',
    usdSell: '437.50'
  },
  {
    id: 3,
    name: 'БАНКА Exchange',
    address: 'ул. Гоголя, 84',
    usdBuy: '430.50',
    usdSell: '437.50'
  },
  {
    id: 4,
    name: 'Som Exchange 2',
    address: 'ул. Тимирязева, 17',
    usdBuy: '430.50',
    usdSell: '437.50'
  },
  {
    id: 5,
    name: 'Som Exchange 1',
    address: 'пр. Абая, 50',
    usdBuy: '430.50',
    usdSell: '437.50'
  }
])

function resetFilters() {
  selectedDistrict.value = 'all'
  selectedStreet.value = 'all'
  rateFilterMode.value = 'best'
}

function showMapAlert() {
  alert('Открытие интерактивной карты обменных пунктов города ' + banksStore.selectedCity)
}
</script>

<style lang="scss" scoped>
.exchangers-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 12px;
  }

  &__seo {
    margin-top: 28px;
    font-size: 13px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.55);
    max-width: 900px;
  }
}

.city-selector-bar {
  margin-bottom: 24px;
}

.city-dropdown-wrap {
  position: relative;
  display: inline-block;

  .city-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: #fef2e3;
    border: 1px solid #ff8a16;
    border-radius: 6px;
    color: #ff8a16;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }

  .city-list {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 160px;
    background: #ffffff;
    border: 1px solid #ff8a16;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(255, 138, 22, 0.15);
    z-index: 50;
    list-style: none;
    padding: 0;
    margin-top: 4px;

    li {
      padding: 10px 16px;
      font-size: 14px;
      cursor: pointer;

      &:hover, &.active {
        background: #fef2e3;
        color: #ff8a16;
      }
    }
  }
}

.avg-rates-card {
  background: #fef2e3;
  border: 1px solid #ff8a16;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 28px;

  &__title {
    font-size: 18px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 16px;
  }
}

.avg-rates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.avg-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 8px;

  &__symbol {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 15px;
  }

  &__details {
    display: flex;
    flex-direction: column;
    font-size: 13px;

    strong {
      color: #000000;
      margin-bottom: 2px;
    }

    span {
      color: #666666;
    }
  }
}

.exchangers-filter-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 28px;

  .filter-title {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .filter-controls {
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
    gap: 16px;
    align-items: flex-end;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .filter-select-group {
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
      font-size: 12px;
      font-weight: 600;
      color: #666666;
    }

    select {
      padding: 9px 12px;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      font-size: 14px;
      background: #ffffff;
    }
  }

  .filter-radios {
    display: flex;
    gap: 16px;
    padding-bottom: 8px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 8px;
    }

    .radio-label {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      cursor: pointer;
    }
  }

  .filter-actions {
    display: flex;
    gap: 12px;
    align-items: center;

    .map-btn {
      background: #ff8a16;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background: #e67508;
      }
    }

    .reset-btn {
      background: none;
      border: none;
      color: #888888;
      font-size: 14px;
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: #ff8a16;
      }
    }
  }
}

.exchangers-table-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  @media (max-width: 576px) {
    padding: 16px 12px;
  }

  .table-head-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 12px;

    .table-title {
      font-size: 18px;
      font-weight: 700;
      color: #1e1e1e;
    }

    .currency-tabs {
      display: flex;
      gap: 8px;

      .curr-tab {
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
  }
}

.exchangers-table {
  width: 100%;

  .table-row {
    display: flex;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #f2f2f2;
    gap: 8px;

    &.header {
      font-size: 13px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.4);
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 12px;

      .col.price {
        font-size: 13px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.4);
      }
    }

    &.avg-row {
      background: #fafafa;
      padding: 14px 12px;
      border-radius: 6px;
      margin-top: 8px;
    }

    &.best-row {
      background: #fef2e3;
      padding: 14px 12px;
      border-radius: 6px;
      margin-top: 8px;
      border-bottom: none;

      .highlight {
        color: #ff8a16;
        font-weight: 800;
      }
    }

    .col {
      &.name {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;

        .item-title {
          font-size: 14px;
          font-weight: 600;
          color: #1e1e1e;
        }

        .item-address {
          font-size: 12px;
          color: #777777;
          margin-top: 2px;
        }
      }

      &.price {
        width: 75px;
        flex-shrink: 0;
        text-align: right;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;

        @media (max-width: 576px) {
          font-size: 13.5px;
          width: 70px;
        }
      }
    }
  }
}

.add-exchanger-cta {
  margin-top: 20px;
  text-align: center;

  .cta-link {
    color: #ff8a16;
    font-size: 14px;
    font-weight: 700;
    text-decoration: underline;

    &:hover {
      color: #d86f07;
    }
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid #f0f0f0;

  .page-num {
    width: 36px;
    height: 36px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    background: #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #333333;
    transition: all 0.2s;

    &.active, &:hover {
      background: #ff8a16;
      border-color: #ff8a16;
      color: #ffffff;
    }
  }

  .page-dots {
    color: #999999;
    padding: 0 4px;
  }
}
</style>
