<template lang="pug">
.main__banks-item
    .main__banks-item-up
        img(:src="require(`@/assets/images/main/${item.icon}`)")
        .main__banks-item-info
            p.main__banks-item-name {{item.name}}
            p.main__banks-item-license {{item.license}}
    .main__banks-item-bottom
        ul.main__banks-item-list
            li.main__banks-item-loc {{item.location}}
            li.main__banks-item-text {{item.phoneNumber}}
            li.main__banks-item-text {{item.website}}
        a.main__banks-item-btn(href="#!") Узнать больше
</template>

<script>
export default {
    props:{
        item: Object,
    }
}
</script>