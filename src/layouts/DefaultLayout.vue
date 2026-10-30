<template>
  <div class="default-layout">
    <Navbar />
    <div class="default-layout__content">
      <slot />
    </div>
    <Footer />
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ToastContainer from '@/components/Common/ToastContainer.vue'
</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
