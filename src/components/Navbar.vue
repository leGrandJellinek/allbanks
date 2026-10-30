<template>
  <div class="container">
    <nav class="header__nav">
      <!-- Backdrop overlay -->
      <div class="bg" :class="{ active: isMenuOpen }" @click="closeMenu"></div>

      <div class="header__nav-block">
        <!-- Burger Toggle Button -->
        <button class="header__nav-burger" aria-label="Открыть меню" @click="openMenu">
          <img src="@/assets/images/icons/menu-burger.svg" alt="Меню" />
        </button>

        <div class="header__nav-logo">
          <router-link to="/" class="logo">
            <img src="@/assets/images/logo.png" alt="AllBanks.kz" />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <ul class="header__nav-menu desktop-menu">
          <li v-for="link in banksStore.menuList" :key="link.id">
            <router-link :to="link.path" class="header__nav-link">
              {{ link.title }}
            </router-link>
          </li>
        </ul>

        <div class="header__nav-signin">
          <button class="header__nav-button" @click="openLoginModal">Войти</button>
        </div>
      </div>

      <!-- Mobile Slide-over Drawer (1:1 from Figma) -->
      <div class="mobile-drawer" :class="{ open: isMenuOpen }">
        <div class="mobile-drawer__header">
          <button class="mobile-drawer__close" aria-label="Закрыть" @click="closeMenu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <div class="mobile-drawer__logo">
            <router-link to="/" @click="closeMenu">
              <img src="@/assets/images/logo.png" alt="AllBanks" />
            </router-link>
          </div>
          <button class="mobile-drawer__signin-btn" @click="openLoginModal">Войти</button>
        </div>

        <ul class="mobile-drawer__list">
          <li v-for="link in banksStore.menuList" :key="link.id" class="mobile-drawer__item">
            <!-- If item has sub-options in figma (Обменники or Кредиты) -->
            <button
              v-if="link.id === 3"
              class="mobile-drawer__btn"
              @click="toggleSubmenu('exchangers')"
            >
              <span class="mobile-drawer__icon">🏪</span>
              <span class="mobile-drawer__title">{{ link.title }}</span>
              <span class="mobile-drawer__arrow">›</span>
            </button>
            <button
              v-else-if="link.id === 5"
              class="mobile-drawer__btn"
              @click="toggleSubmenu('credits')"
            >
              <span class="mobile-drawer__icon">💳</span>
              <span class="mobile-drawer__title">{{ link.title }}</span>
              <span class="mobile-drawer__arrow">›</span>
            </button>
            <router-link v-else :to="link.path" class="mobile-drawer__link" @click="closeMenu">
              <span v-if="link.id === 1" class="mobile-drawer__icon">🏦</span>
              <span v-else-if="link.id === 2" class="mobile-drawer__icon">📊</span>
              <span v-else-if="link.id === 4" class="mobile-drawer__icon">🏛️</span>
              <span v-else-if="link.id === 6" class="mobile-drawer__icon">💰</span>
              <span v-else-if="link.id === 7" class="mobile-drawer__icon">🪙</span>
              <span v-else-if="link.id === 8" class="mobile-drawer__icon">📰</span>
              <span class="mobile-drawer__title">{{ link.title }}</span>
              <span class="mobile-drawer__arrow">›</span>
            </router-link>
          </li>
        </ul>

        <!-- Mobile Drawer Footer -->
        <div class="mobile-drawer__footer">
          <a href="tel:77075789999" class="mobile-drawer__tel">+7 707 578 99 99</a>
          <div class="mobile-drawer__socials">
            <a href="https://facebook.com" target="_blank" rel="noopener">
              <img src="@/assets/images/icons/facebook.svg" alt="FB" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener">
              <img src="@/assets/images/icons/twitter.svg" alt="TW" />
            </a>
          </div>
        </div>
      </div>

      <!-- Teleport Bottom Sheets to body to prevent bloating mobile-drawer scrollHeight -->
      <Teleport to="body">
        <!-- Submenu Sheet: Выберите город (Обменники) -->
        <div class="bottom-sheet" :class="{ active: activeSubmenu === 'exchangers' }">
          <div class="bottom-sheet__overlay" @click="activeSubmenu = null"></div>
          <div class="bottom-sheet__content">
            <div class="bottom-sheet__header">
              <h3>Выберите город</h3>
              <button class="bottom-sheet__close" @click="activeSubmenu = null">✕</button>
            </div>
            <ul class="bottom-sheet__list">
              <li
                v-for="city in ['Алматы', 'Нур-Султана', 'Шымкент', 'Караганды', 'Риддера']"
                :key="city"
              >
                <router-link
                  :to="`/exchangers?city=${city}`"
                  class="bottom-sheet__link"
                  @click="selectCityMenu(city)"
                >
                  Обменники {{ city }}
                  <span class="bottom-sheet__arrow">›</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- Submenu Sheet: Выберите кредит -->
        <div class="bottom-sheet" :class="{ active: activeSubmenu === 'credits' }">
          <div class="bottom-sheet__overlay" @click="activeSubmenu = null"></div>
          <div class="bottom-sheet__content">
            <div class="bottom-sheet__header">
              <h3>Выберите кредит</h3>
              <button class="bottom-sheet__close" @click="activeSubmenu = null">✕</button>
            </div>
            <ul class="bottom-sheet__list">
              <li>
                <router-link to="/credits" class="bottom-sheet__link" @click="closeMenu">
                  Кредиты в Казахстане
                  <span class="bottom-sheet__arrow">›</span>
                </router-link>
              </li>
              <li>
                <router-link to="/credits/mortgage" class="bottom-sheet__link" @click="closeMenu">
                  Кредиты под залог недвижимости
                  <span class="bottom-sheet__arrow">›</span>
                </router-link>
              </li>
              <li>
                <router-link to="/credits/cash" class="bottom-sheet__link" @click="closeMenu">
                  Кредит наличными
                  <span class="bottom-sheet__arrow">›</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </Teleport>

      <!-- Login Modal Dialog -->
      <Teleport to="body">
        <div v-if="isLoginModalOpen" class="login-modal-overlay" @click.self="closeLoginModal">
          <div class="login-modal">
            <button class="login-modal__close" aria-label="Закрыть" @click="closeLoginModal">
              ✕
            </button>
            <div class="login-modal__header">
              <h3 class="login-modal__title">Вход в AllBanks</h3>
              <p class="login-modal__desc">Введите номер телефона для входа в личный кабинет</p>
            </div>
            <form class="login-modal__form" @submit.prevent="submitLogin">
              <div class="form-group">
                <label>Номер телефона</label>
                <input v-model="loginPhone" type="tel" placeholder="+7 (7XX) XXX-XX-XX" required />
              </div>
              <button type="submit" class="login-modal__btn">Получить код по SMS</button>
            </form>
            <div class="login-modal__footer">
              <p>Нет аккаунта? <a href="#" @click.prevent="registerAlert">Зарегистрироваться</a></p>
            </div>
          </div>
        </div>
      </Teleport>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import { useBanksStore } from '@/stores/banks'
import { useToastStore } from '@/stores/toast'

const banksStore = useBanksStore()
const toast = useToastStore()
const isMenuOpen = ref(false)
const activeSubmenu = ref<'exchangers' | 'credits' | null>(null)
const isLoginModalOpen = ref(false)
const loginPhone = ref('')

watch(isMenuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    document.body.style.touchAction = ''
  }
})

function openMenu() {
  isMenuOpen.value = true
}

function closeMenu() {
  isMenuOpen.value = false
  activeSubmenu.value = null
}

function toggleSubmenu(type: 'exchangers' | 'credits') {
  if (activeSubmenu.value === type) {
    activeSubmenu.value = null
  } else {
    activeSubmenu.value = type
  }
}

function selectCityMenu(city: string) {
  banksStore.setCity(city)
  closeMenu()
}

function openLoginModal() {
  closeMenu()
  isLoginModalOpen.value = true
}

function closeLoginModal() {
  isLoginModalOpen.value = false
  loginPhone.value = ''
}

function submitLogin() {
  toast.success(`Код подтверждения отправлен на номер ${loginPhone.value || '+7 (707) 578 99 99'}`)
  closeLoginModal()
}

function registerAlert() {
  toast.info('Регистрация доступна для клиентов банков-партнеров')
}
</script>

<style lang="scss" scoped>
.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background: #ffffff;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  &.open {
    transform: translateX(0);
  }

  &__header {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #f0f0f0;
  }

  &__close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__logo {
    img {
      height: 28px;
    }
  }

  &__signin-btn {
    background: #ff8a16;
    color: #ffffff;
    border: none;
    padding: 6px 14px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }

  &__list {
    flex: 1 0 auto;
    padding: 12px 20px;
    margin: 0;
    list-style: none;
  }

  &__item {
    border-bottom: 1px solid #f6f6f6;
  }

  &__link,
  &__btn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 14px 0;
    background: none;
    border: none;
    text-decoration: none;
    color: #1e1e1e;
    font-size: 15px;
    cursor: pointer;
    text-align: left;
  }

  &__icon {
    font-size: 16px;
    margin-right: 12px;
    width: 20px;
    text-align: center;
  }

  &__title {
    flex: 1;
    font-size: 15px;
  }

  &__arrow {
    font-size: 18px;
    color: #a0a0a0;
  }

  &__footer {
    flex-shrink: 0;
    margin-top: auto;
    padding: 24px 20px;
    border-top: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__tel {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    text-decoration: none;
  }

  &__socials {
    display: flex;
    gap: 16px;

    img {
      width: 22px;
      height: 22px;
    }
  }
}

.bottom-sheet {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1000002;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;

  &.active {
    pointer-events: auto;
    opacity: 1;
    visibility: visible;

    .bottom-sheet__content {
      transform: translateY(0);
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  &__content {
    position: relative;
    background: #ffffff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 24px 20px 32px 20px;
    max-height: 80vh;
    overflow-y: auto;
    transform: translateY(100%);
    transition: transform 0.3s ease-out;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h3 {
      font-size: 18px;
      font-weight: 700;
      color: #000000;
    }
  }

  &__close {
    background: none;
    border: none;
    font-size: 20px;
    color: #888888;
    cursor: pointer;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #f2f2f2;
    color: #1e1e1e;
    text-decoration: none;
    font-size: 15px;
  }

  &__arrow {
    color: #a0a0a0;
    font-size: 18px;
  }
}

.login-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.login-modal {
  position: relative;
  background: #ffffff;
  border-radius: 16px;
  width: 100%;
  max-width: 380px;
  padding: 32px 24px 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  &__close {
    position: absolute;
    top: 14px;
    right: 16px;
    background: none;
    border: none;
    font-size: 18px;
    color: #999999;
    cursor: pointer;
    padding: 6px;

    &:hover {
      color: #1e1e1e;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 6px;
  }

  &__desc {
    font-size: 13px;
    color: #777777;
    margin-bottom: 20px;
    line-height: 1.4;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;

      label {
        font-size: 12px;
        font-weight: 600;
        color: #555555;
      }

      input {
        padding: 12px 14px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-size: 15px;
        outline: none;
        transition: border-color 0.2s;

        &:focus {
          border-color: #ff8a16;
        }
      }
    }
  }

  &__btn {
    background: #ff8a16;
    color: #ffffff;
    border: none;
    padding: 13px 0;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #e67508;
    }
  }

  &__footer {
    margin-top: 18px;
    text-align: center;
    font-size: 13px;
    color: #777777;

    a {
      color: #ff8a16;
      font-weight: 600;
      text-decoration: underline;
    }
  }
}
</style>
