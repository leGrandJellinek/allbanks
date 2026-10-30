<template>
  <div class="credit-seo">
    <p class="credit-seo__paragraph">
      Повседневные потребности, непредвиденные расходы не всегда позволяют быстро собрать нужную
      сумму, чтобы купить недвижимость, необходимые прямо сейчас товары или оплатить услуги.
    </p>
    <p class="credit-seo__paragraph">
      Универсальный способ решить любые финансовые проблемы – взять кредит в банке.
    </p>
    <p class="credit-seo__paragraph">
      Разнообразие предложений и программ дает возможность практически каждому жителю страны
      получить нужную сумму кредита на любые цели.
    </p>
    <a href="#" class="credit-seo__link" @click.prevent>Читать далее</a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.credit-seo {
  margin-top: 20px;
  margin-bottom: 60px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }

  &__paragraph {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #000000;
    margin: 0 0 14px 0;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 12px;
    }
  }

  &__link {
    display: inline-block;
    color: #ff8a16;
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
    margin-top: 4px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
}
</style>
