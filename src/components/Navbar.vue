<template>
<nav class="header__nav">
    <div class="header__nav-block">
        <div class="header__nav-logo">
            <a href="#!" class="logo"><img src="@/assets/images/logo.png" alt=""></a>
        </div>
        <ul class="header__nav-menu">
            <li v-for="link in getMenuList" :key="link.id"><a href="#!" class="header__nav-link">{{link.title}}</a></li>
        </ul>
    </div>
    <div class="header__nav-signin">
        <a href="#!" class="header__nav-button">Войти</a>
    </div>
</nav>
</template>

<script>

export default {
    computed: {
        getMenuList(){
            return this.$store.getters.getMenuList  
        }
    }
}


</script>
