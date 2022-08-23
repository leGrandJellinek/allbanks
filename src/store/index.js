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
    ]
  },
  getters: {
    getMenuList(state){
      return state.menuList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
