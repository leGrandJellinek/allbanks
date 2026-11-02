<template>
  <div class="desktop-table-container desktop-only">
    <table class="desktop-table">
      <thead>
        <tr class="thead-row">
          <th class="th-bank">Банк</th>

          <!-- USD Buy / Sell (Highlighted with Rectangle 2 rounded background) -->
          <th class="th-curr th-usd th-usd-left">
            <div class="curr-header-cell">
              <div class="curr-badge usd">$</div>
              <div class="curr-titles">
                <span class="action-text">Покупка</span>
                <span class="sub-text">USD Доллар</span>
              </div>
            </div>
          </th>
          <th class="th-curr th-usd th-usd-right">
            <div class="curr-header-cell">
              <div class="curr-badge usd">$</div>
              <div class="curr-titles">
                <span class="action-text">Продажа</span>
                <span class="sub-text">USD Доллар</span>
              </div>
            </div>
          </th>

          <!-- EUR Buy / Sell -->
          <th class="th-curr th-eur">
            <div class="curr-header-cell">
              <div class="curr-badge eur">€</div>
              <div class="curr-titles">
                <span class="action-text">Покупка</span>
                <span class="sub-text">EUR Евро</span>
              </div>
            </div>
          </th>
          <th class="th-curr th-eur">
            <div class="curr-header-cell">
              <div class="curr-badge eur">€</div>
              <div class="curr-titles">
                <span class="action-text">Продажа</span>
                <span class="sub-text">EUR Евро</span>
              </div>
            </div>
          </th>

          <!-- RUB Buy / Sell -->
          <th class="th-curr th-rub">
            <div class="curr-header-cell">
              <div class="curr-badge rub">₽</div>
              <div class="curr-titles">
                <span class="action-text">Покупка</span>
                <span class="sub-text">RUB Рубль</span>
              </div>
            </div>
          </th>
          <th class="th-curr th-rub">
            <div class="curr-header-cell">
              <div class="curr-badge rub">₽</div>
              <div class="curr-titles">
                <span class="action-text">Продажа</span>
                <span class="sub-text">RUB Рубль</span>
              </div>
            </div>
          </th>

          <th class="th-time">Время</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, idx) in banks"
          :key="row.id"
          class="desktop-row"
          :class="{ 'is-last': idx === banks.length - 1 }"
        >
          <!-- Bank Title -->
          <td class="td-bank">
            <span class="bank-name">{{ row.name }}</span>
          </td>

          <!-- USD Buy / Sell -->
          <td
            class="td-rate td-usd td-usd-left"
            :class="{ 'is-last-row': idx === banks.length - 1 }"
          >
            <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestUsdBuy }">
              {{ row.usdBuy }}
            </div>
          </td>
          <td
            class="td-rate td-usd td-usd-right"
            :class="{ 'is-last-row': idx === banks.length - 1 }"
          >
            <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestUsdSell }">
              {{ row.usdSell }}
            </div>
          </td>

          <!-- EUR Buy / Sell -->
          <td class="td-rate">
            <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestEurBuy }">
              {{ row.eurBuy }}
            </div>
          </td>
          <td class="td-rate">
            <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestEurSell }">
              {{ row.eurSell }}
            </div>
          </td>

          <!-- RUB Buy / Sell -->
          <td class="td-rate">
            <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestRubBuy }">
              {{ row.rubBuy }}
            </div>
          </td>
          <td class="td-rate">
            <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestRubSell }">
              {{ row.rubSell }}
            </div>
          </td>

          <!-- Time -->
          <td class="td-time">
            {{ row.time }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
export interface DesktopBankRate {
  id: number
  name: string
  usdBuy: string
  usdSell: string
  eurBuy: string
  eurSell: string
  rubBuy: string
  rubSell: string
  time: string
  bestUsdBuy?: boolean
  bestUsdSell?: boolean
  bestEurBuy?: boolean
  bestEurSell?: boolean
  bestRubBuy?: boolean
  bestRubSell?: boolean
}

defineProps<{
  banks: DesktopBankRate[]
}>()
</script>

<style lang="scss" scoped>
.desktop-only {
  display: block;
  @media (max-width: 991px) {
    display: none !important;
  }
}

.desktop-table-container {
  width: 100%;
  margin-top: 10px;
}

.desktop-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    tr.thead-row {
      th {
        padding: 8px 10px 14px 10px;
        vertical-align: middle;

        &.th-bank {
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          color: #000000;
          width: 170px;
          padding-left: 2px;
        }

        &.th-curr {
          text-align: center;
          width: 135px;
        }

        &.th-time {
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #000000;
          width: 140px;
        }

        /* USD Column Highlight Top (Figma Rectangle 2: x=2290, w=270, cornerRadius=18) */
        &.th-usd {
          background: rgba(235, 235, 235, 0.4);

          &.th-usd-left {
            border-top-left-radius: 18px;
            padding-left: 18px;
          }

          &.th-usd-right {
            border-top-right-radius: 18px;
            padding-right: 18px;
          }
        }
      }
    }
  }

  .curr-header-cell {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-align: left;

    .curr-badge {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;

      &.usd {
        background: #ff8a16;
      }
      &.eur {
        background: #d92365;
      }
      &.rub {
        background: #e41f18;
      }
    }

    .curr-titles {
      display: flex;
      flex-direction: column;
      line-height: 1.15;

      .action-text {
        font-size: 14px;
        font-weight: 700;
        color: #000000;
      }

      .sub-text {
        font-size: 10px;
        color: #000000;
        margin-top: 1px;
      }
    }
  }

  tbody {
    tr.desktop-row {
      td {
        padding: 13px 10px;
        vertical-align: middle;
        border-bottom: 1px solid #ebebeb;

        &.td-bank {
          padding-left: 2px;
          .bank-name {
            font-size: 15px;
            font-weight: 700;
            color: #000000;
            line-height: 1.25;
            display: block;
            max-width: 140px;
          }
        }

        &.td-rate {
          text-align: center;
          font-size: 18px;
          font-weight: 400;
          color: #000000;
        }

        &.td-time {
          text-align: center;
          font-size: 14px;
          color: #000000;
        }

        /* USD Column Highlight Body (Figma Rectangle 2) */
        &.td-usd {
          background: rgba(235, 235, 235, 0.4);

          &.td-usd-left {
            padding-left: 18px;
          }

          &.td-usd-right {
            padding-right: 18px;
          }

          &.is-last-row {
            &.td-usd-left {
              border-bottom-left-radius: 18px;
            }
            &.td-usd-right {
              border-bottom-right-radius: 18px;
            }
          }
        }
      }
    }
  }

  .rate-val-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 64px;
    height: 27px;
    font-size: 18px;
    font-weight: 400;
    color: #000000;

    &.best-rate-pill {
      width: 84px;
      background: #fef2e3;
      border-radius: 3px;
    }
  }
}
</style>
