<template>
<section class="main__categories">
    <div class="main__categories-container">
        <div class="main__categories-block">
            <CategoriesItem 
            v-for="item in getCategoriesList" 
            :key="item.id"
            :item="item"/>
        </div>
    </div>
</section>
</template>

<script>

import {mapGetters} from "vuex";
import CategoriesItem from "@/components/Main/CategoriesItem.vue"

export default {
    computed: {
        ...mapGetters(["getCategoriesList"])
    },
    components: {
        CategoriesItem
    }
}


</script>