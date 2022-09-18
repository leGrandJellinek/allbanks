<template>
<div class="main__categories-item" :style="`background-color: ${item.bgcolor}`">
    <h2 class="main__categories-title">
        {{item.title}}
    </h2>
    <img :src="require(`@/assets/images/main/${item.img}`)" alt="" class="main__categories-img">
</div>
</template>

<script>

export default {
    props: {
        item:Object,
    }
}
</script>