import { defineStore } from 'pinia'

export interface CurrencyItem {
  id: number
  currencyName: string
  currencySymbol: string
  img: string
  symbol: string
  color: string
  sellPrice: string
  buyPrice: string
}

export interface ExchangerItem {
  id: number
  name: string
  address: string
  usdBuy: string
  usdSell: string
  eurBuy: string
  eurSell: string
  rubBuy: string
  rubSell: string
}

export const useCurrenciesStore = defineStore('currencies', {
  state: () => ({
    activeCurrencyTab: 'banks' as 'exchangers' | 'banks',
    currencyList: [
      {
        id: 1,
        currencyName: 'Доллар',
        currencySymbol: 'USD',
        img: 'dollar.svg',
        symbol: '$',
        color: '#FF8A16',
        buyPrice: '430.50',
        sellPrice: '437.50'
      },
      {
        id: 2,
        currencyName: 'Евро',
        currencySymbol: 'EUR',
        img: 'euro.svg',
        symbol: '€',
        color: '#D92365',
        buyPrice: '430.50',
        sellPrice: '437.50'
      },
      {
        id: 3,
        currencyName: 'Рубль',
        currencySymbol: 'RUR',
        img: 'ruble.svg',
        symbol: '₽',
        color: '#DE251D',
        buyPrice: '430.50',
        sellPrice: '437.50'
      }
    ] as CurrencyItem[],

    exchangers: [
      {
        id: 1,
        name: 'TOO "Som Exchange"',
        address: 'ул. Абая 50, угол Байтурсынова',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 2,
        name: 'MIRVAN LTD',
        address: 'пр. Достык 42',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 3,
        name: 'БАНКА Exchange',
        address: 'ул. Гоголя 84',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 4,
        name: 'Som Exchange 2',
        address: 'ул. Тимирязева 17',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      }
    ] as ExchangerItem[]
  }),

  getters: {
    getCurrencyList: (state) => state.currencyList,
    getExchangersList: (state) => state.exchangers,
    getCurrencyByCode: (state) => (code: string) => {
      return state.currencyList.find(
        (c) => c.currencySymbol.toLowerCase() === code.toLowerCase()
      )
    }
  },

  actions: {
    setCurrencyTab(tab: 'exchangers' | 'banks') {
      this.activeCurrencyTab = tab
    }
  }
})
