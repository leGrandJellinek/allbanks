<template lang="pug">
div
    Navbar
    main.main
        .main__container
            section.main__banks
                h2.main__banks-title.section-title Банки Казахстана
                Banks
                h2.main__banks-text Все курсы взяты с сайтов банков. Возможно несоответствие курсов в данной таблице реальным курсам в отделениях банков.
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Banks from "@/components/Main/Banks.vue";
export default {
    components:{
        Navbar,
        Banks
    }
}
</script>

<style lang="sass" scoped>

</style>