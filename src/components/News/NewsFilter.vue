<template>
  <div class="news-filter">
    <!-- Toggle Button: "Все категории" (collapsed) / "Свернуть категории" (expanded) -->
    <button
      class="news-filter__btn news-filter__btn--toggle"
      :class="{ 'news-filter__btn--active': isExpanded && selected === '' }"
      @click="toggleExpand"
    >
      <span>{{ isExpanded ? 'Свернуть категории' : 'Все категории' }}</span>
      <svg
        class="news-filter__chevron"
        :class="{ 'news-filter__chevron--expanded': isExpanded }"
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
      >
        <path
          d="M1.5 1L6.5 6L1.5 11"
          stroke="#FF8A16"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Category Pills (shown when expanded per Figma Frame 55 & 353:957) -->
    <template v-if="isExpanded">
      <button
        v-for="cat in categories"
        :key="cat"
        class="news-filter__btn news-filter__btn--pill"
        :class="{ 'news-filter__btn--active': selected === cat }"
        @click="selectCategory(cat)"
      >
        {{ cat }}
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  categories: readonly string[]
  selected: string
}>()

const emit = defineEmits<{
  (e: 'select', category: string): void
}>()

const isExpanded = ref(false)

function toggleExpand() {
  isExpanded.value = !isExpanded.value
  if (!isExpanded.value && props.selected !== '') {
    // If collapsing and had filter active, reset or keep
    emit('select', '')
  }
}

function selectCategory(cat: string) {
  if (props.selected === cat) {
    emit('select', '')
  } else {
    emit('select', cat)
  }
}
</script>

<style lang="scss" scoped>
.news-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px 20px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    gap: 12px 10px;
    margin-bottom: 25px;
  }

  &__btn {
    height: 38px;
    padding: 0 16px;
    background: #fef1e2;
    border: none;
    border-radius: 4px;
    font-family: 'GP', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      background: rgba(255, 138, 22, 0.2);
    }

    &--active {
      background: rgba(255, 138, 22, 0.3);
    }

    @media (max-width: 767px) {
      height: 31px;
      padding: 0 14px;
      font-size: 12px;
      gap: 8px;
    }
  }

  &__chevron {
    flex-shrink: 0;
    transition: transform 0.2s ease;

    &--expanded {
      transform: rotate(90deg);
    }
  }
}
</style>
