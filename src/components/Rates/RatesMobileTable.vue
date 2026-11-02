<template>
  <div class="mobile-table-wrapper mobile-only">
    <div class="mobile-table-header">
      <span class="m-col m-col-bank">Банк</span>
      <span class="m-col m-col-buy">Покупка</span>
      <span class="m-col m-col-sell">Продажа</span>
    </div>

    <div class="mobile-table-body">
      <div v-for="row in banks" :key="row.id" class="mobile-table-row">
        <div class="m-col m-col-bank">
          <span class="m-bank-name">{{ row.name }}</span>
        </div>
        <div class="m-col m-col-buy">
          <span class="m-rate-val" :class="{ 'best-pill': row.isBestBuy }">
            {{ row.buy }}
          </span>
        </div>
        <div class="m-col m-col-sell">
          <span class="m-rate-val" :class="{ 'best-pill': row.isBestSell }">
            {{ row.sell }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface MobileBankRate {
  id: number
  name: string
  buy: string
  sell: string
  isBestBuy?: boolean
  isBestSell?: boolean
}

defineProps<{
  banks: MobileBankRate[]
}>()
</script>

<style lang="scss" scoped>
.mobile-only {
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
}

.mobile-table-wrapper {
  width: 100%;
  margin-top: 14px;
}

.mobile-table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;

  .m-col {
    font-size: 13px;
    font-weight: 500;
    color: #000000;

    &-bank {
      width: 44%;
      text-align: left;
    }

    &-buy {
      width: 28%;
      text-align: center;
    }

    &-sell {
      width: 28%;
      text-align: right;
    }
  }
}

.mobile-table-body {
  .mobile-table-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #ebebeb;

    .m-col {
      &-bank {
        width: 44%;
        text-align: left;

        .m-bank-name {
          font-size: 13px;
          font-weight: 700;
          color: #000000;
          line-height: 1.25;
          display: block;
        }
      }

      &-buy {
        width: 28%;
        text-align: center;
      }

      &-sell {
        width: 28%;
        text-align: right;
      }
    }

    .m-rate-val {
      font-size: 15px;
      font-weight: 500;
      color: #000000;
      display: inline-block;

      &.best-pill {
        background: #fef2e3;
        border-radius: 3px;
        padding: 3px 8px;
      }
    }
  }
}
</style>
