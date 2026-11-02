<template>
  <div class="page-home">
    <Header />
    <Main />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

useHead({
  title: 'AllBanks.kz - Финансовый супермаркет Казахстана: курсы валют, кредиты, депозиты',
  meta: [
    {
      name: 'description',
      content:
        'Сравнение курсов валют в банках и обменниках Казахстана, выгодные потребительские кредиты, микрозаймы и депозиты.'
    },
    { property: 'og:title', content: 'AllBanks.kz - Финансовый супермаркет Казахстана' },
    {
      property: 'og:description',
      content:
        'Сравнение курсов валют в банках и обменниках Казахстана, выгодные потребительские кредиты, микрозаймы и депозиты.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://allbanks.kz/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'AllBanks.kz - Финансовый супермаркет Казахстана' },
    {
      name: 'twitter:description',
      content:
        'Сравнение курсов валют в банках и обменниках Казахстана, выгодные потребительские кредиты, микрозаймы и депозиты.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'AllBanks.kz',
        url: 'https://allbanks.kz',
        description:
          'Финансовый супермаркет Казахстана: актуальные курсы валют, кредиты, депозиты и банки.',
        telephone: '+7 707 578 99 99',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'KZ',
          addressLocality: 'Алматы'
        }
      })
    }
  ]
})
</script>
