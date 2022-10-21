<template lang="pug">
.main__banks-block
    BanksItem(
    v-for="item in getBanksList" 
    :key="item.id"
    :item="item")
</template>

<script>
import {mapGetters} from "vuex"
import BanksItem from "@/components/Main/BanksItem.vue";
export default {
    computed: {
        ...mapGetters(["getBanksList"])
    },
    components: {
        BanksItem
    }
}
</script>
