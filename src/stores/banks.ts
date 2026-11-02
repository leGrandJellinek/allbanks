import { defineStore } from 'pinia'

export interface BankItem {
  id: number
  name: string
  icon: string
  license: string
  location: string
  phoneNumber: string
  website: string
  usdBuy?: string
  usdSell?: string
  eurBuy?: string
  eurSell?: string
  rubBuy?: string
  rubSell?: string
}

export const useBanksStore = defineStore('banks', {
  state: () => ({
    banks: [
      {
        id: 1,
        name: 'Altyn Bank',
        icon: 'altyn_logo.png',
        license: 'лицензия №1.2.23/194/33',
        location: 'Республика Казахстан, A05A1B9, Алматы, пр. Абая 109 «В»',
        phoneNumber: '+7(727)35-65-777',
        website: 'altynbank.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '485.00',
        eurSell: '492.00',
        rubBuy: '5.40',
        rubSell: '5.80'
      },
      {
        id: 2,
        name: 'Bank RBK',
        icon: 'rbk_logo.png',
        license: 'лицензия №1.2.23/194/33',
        location:
          'Республика Казахстан, г. Алматы, Бостандыкский район, Площадь Республики, дом № 15, 050013 (A15X3C7)',
        phoneNumber: '8 (727) 330-90-30',
        website: 'bankrbk.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '485.00',
        eurSell: '492.00',
        rubBuy: '5.40',
        rubSell: '5.80'
      },
      {
        id: 3,
        name: 'Jýsan Bank',
        icon: 'jusan_logo.png',
        license: 'лицензия №1.2.23/194/33',
        location: 'Алматы, просп. Аль-Фараби, 15, блок 4В',
        phoneNumber: '+7(727)2587711 с городского, 7711 с мобильного',
        website: 'jysanbank.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '484.50',
        eurSell: '491.50',
        rubBuy: '5.35',
        rubSell: '5.75'
      },
      {
        id: 4,
        name: 'ForteBank',
        icon: 'forte_bank.png',
        license: 'лицензия №1.2.29/197/36',
        location: 'Нур-Султан (Астана), ул. Достык, 8/1',
        phoneNumber: '8 8000 800 819, 7575 звонок бесплатный',
        website: 'forte.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '484.00',
        eurSell: '491.00',
        rubBuy: '5.30',
        rubSell: '5.70'
      },
      {
        id: 5,
        name: 'Halyk Bank',
        icon: 'halyk_logo.svg',
        license: 'лицензия №1.2.47/230/38',
        location: 'Алматы, пр. Аль-Фараби, 40',
        phoneNumber: '7111 с мобильного',
        website: 'halykbank.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '484.50',
        eurSell: '491.50',
        rubBuy: '5.35',
        rubSell: '5.75'
      },
      {
        id: 6,
        name: 'Сбербанк Россия',
        icon: 'sber_logo.png',
        license: 'лицензия №1.2.199/93/31',
        location: 'Алматы, ул. Розыбакиева, 263',
        phoneNumber: '+7 (727) 250-30-20',
        website: 'sberbank.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '485.00',
        eurSell: '492.00',
        rubBuy: '5.40',
        rubSell: '5.80'
      },
      {
        id: 7,
        name: 'Home Credit Bank',
        icon: 'homecredit_logo.png',
        license: 'лицензия №1.2.245/61',
        location: 'Алматы, ул. Фурманова 240',
        phoneNumber: '7979 с мобильного',
        website: 'homecredit.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '485.00',
        eurSell: '492.00',
        rubBuy: '5.40',
        rubSell: '5.80'
      },
      {
        id: 8,
        name: 'Банк ЦентрКредит',
        icon: 'centercredit_logo.svg',
        license: 'лицензия №1.2.25/195/34',
        location: 'Алматы, пр. Аль-Фараби 38',
        phoneNumber: '505 с мобильного',
        website: 'bcc.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '484.50',
        eurSell: '491.50',
        rubBuy: '5.35',
        rubSell: '5.75'
      },
      {
        id: 9,
        name: 'Kaspi Bank',
        icon: 'kaspi_logo.png',
        license: 'лицензия №1.2.245/61',
        location: 'Алматы, ул. Наурызбай батыра 154А',
        phoneNumber: '9999 с мобильного',
        website: 'kaspi.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '485.00',
        eurSell: '492.00',
        rubBuy: '5.40',
        rubSell: '5.80'
      }
    ] as BankItem[]
  }),

  getters: {
    getBanksList: (state) => state.banks,
    getBankById: (state) => (id: number | string) => {
      const numId = typeof id === 'string' ? parseInt(id, 10) : id
      return state.banks.find((bank) => bank.id === numId)
    }
  }
})
