<template>
<header class="header">
    <div class="header__container">
        <Navbar />
        <div class="header__content">
            <div class="header__content-block">
                <h2 class="header__content-title">
                    Самые актуальные курсы валют
                </h2>
                <h2 class="header__content-time">
                    24/7
                </h2>
            </div>
            <div class="header__content-block-shadow"></div>
        </div>
    </div>
</header>
</template>

<script>

import Navbar from "@/components/Navbar.vue"

export default {
    components: {
        Navbar,
    }
}
</script>
