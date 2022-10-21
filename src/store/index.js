import { createStore } from 'vuex'

export default createStore({
  state: { 
    menuList: [
      {id:1,title:"Банки Казахстана"},
      {id:2,title:"Курсы в банках"},
      {id:3,title:"Обменники"},
      {id:4,title:"НБК"},
      {id:5,title:"Кредиты"},
      {id:6,title:"Микрозаймы"},
      {id:7,title:"Вклады физлиц"},
      {id:8,title:"Новости"}
    ],
    categoriesList: [
      {
        id:1,
        title:"Курсы валют",
        bgcolor: "#FEF1E2",
        img:"rubl.png"
        
      },
      {
        id:2,
        title:"Микрозаймы",
        bgcolor: "#F1FED5",
        img:"bag.png"
        
      },
      {
        id:3,
        title:"Кредиты",
        bgcolor: "rgba(213, 254, 252, 0.7)",
        img:"credit_card.png"
        
      },
      {
        id:4,
        title:"Депозиты",
        bgcolor: "#E2EDFE",
        img:"safe_and_coin.png"
        
      },
      {
        id:5,
        title:"Новости",
        bgcolor: "#FEE2E2",
        img:"megaphone.png"
        
      },
      {
        id:6,
        title:"Банки Рк",
        bgcolor: "rgba(214, 213, 254, 0.7)",
        img:"bank.png"
        
      }
    ],
    currencyList: [
      {
        id:1,
        currencyName: "Доллар",
        currencySymbol: "USD",
        img: "dollar.svg",
        sellPrice: "437.50",
        buyPrice: "430.50",
      },
      {
        id:2,
        currencyName: "Евро",
        currencySymbol: "EUR",
        img: "euro.svg",
        sellPrice: "437.50",
        buyPrice: "430.50",
      },
      {
        id:3,
        currencyName: "Рубль",
        currencySymbol: "RUB",
        img: "ruble.svg",
        sellPrice: "437.50",
        buyPrice: "430.50",
      },
    ],
    banks: [
      {
        id:1,
        name: "Altyn Bank",
        icon: "altyn_bank.png",
        license:"лицензия №1.2.23/194/33",
        location: "Республика Казахстан, A05A1B9, Алматы, пр. Абая 109 «В»",
        phoneNumber: "+7(727)35-65-777",
        website: "altynbank.kz"
      },
      {
        id:2,
        name: "Bank RBK",
        icon: "rbk_bank.png",
        license:"лицензия №1.2.23/194/33",
        location: "Республика Казахстан, A05A1B9, Алматы, пр. Абая 109 «В»",
        phoneNumber: "+7(727)35-65-777",
        website: "altynbank.kz"
      },
      {
        id:3,
        name: "Jýsan Bank",
        icon: "jusan_bank.png",
        license:"лицензия №1.2.23/194/33",
        location: "Республика Казахстан, A05A1B9, Алматы, пр. Абая 109 «В»",
        phoneNumber: "+7(727)35-65-777",
        website: "altynbank.kz"
      },
      {
        id:4,
        name: "Altyn Bank",
        icon: "forte_bank.png",
        license:"лицензия №1.2.23/194/33",
        location: "Республика Казахстан, A05A1B9, Алматы, пр. Абая 109 «В»",
        phoneNumber: "+7(727)35-65-777",
        website: "altynbank.kz"
      },
      {
        id:5,
        name: "Bank RBK",
        icon: "rbk_bank.png",
        license:"лицензия №1.2.23/194/33",
        location: "Республика Казахстан, A05A1B9, Алматы, пр. Абая 109 «В»",
        phoneNumber: "+7(727)35-65-777",
        website: "altynbank.kz"
      },
      {
        id:6,
        name: "Jýsan Bank",
        icon: "jusan_bank.png",
        license:"лицензия №1.2.23/194/33",
        location: "Республика Казахстан, A05A1B9, Алматы, пр. Абая 109 «В»",
        phoneNumber: "+7(727)35-65-777",
        website: "altynbank.kz"
      },
    ]
  },
  getters: {
    getMenuList(state){
      return state.menuList
    },
    getCategoriesList(state){
      return state.categoriesList;
    },
    getBanksList(state){
      return state.banks
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
