<template>
<nav class="header__nav">
    <div class="bg" @click="burger = false" :class="{active : burger && width <= 1160}"></div>
    <div class="header__nav-block">
        <div class="header__nav-logo">
            <a href="#!" class="logo"><img src="@/assets/images/logo.png" alt=""></a>
        </div>
        <ul class="header__nav-menu" :class="{active : burger}">
            <li v-for="link in getMenuList" :key="link.id"><a href="#!" class="header__nav-link">{{link.title}}</a></li>
        </ul>
        <button class="header__nav-burger" @click="burger = true" ><img src="@/assets/images/icons/menu-burger.svg" alt=""></button>
    </div>
    <div class="header__nav-signin">
        <a href="#!" class="header__nav-button">Войти</a>
    </div>
</nav>
</template>

<script>

export default {
    data(){
        return {
            burger: false,
            width: 0,
        }
    },
    computed: {
        getMenuList(){
            return this.$store.getters.getMenuList  
        },
    },
    methods: {
      updateWidth() {
         this.width = window.innerWidth;
        },
    },
    created() {
        window.addEventListener('resize', this.updateWidth);
    },
}


</script>
