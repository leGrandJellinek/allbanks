<template lang="pug">
.wrapper
  router-view
  Footer 
</template>

<script>

import Footer from "@/components/Footer.vue"

export default {
  components: {
    Footer
  }
}


</script>