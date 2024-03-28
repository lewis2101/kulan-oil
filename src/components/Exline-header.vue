<template>
  <div :class="$style.container">
    <div :class="$style.logo">
      <img src="@/assets/icons/Logo.svg" alt="">
    </div>
    <div :class="$style.menu">
      <a href="#">Главная</a>
      <a href="#">Наши преимущества</a>
      <a href="#">История Exline</a>
      <a href="#">Нам доверяют</a>
      <a href="#" :class="$style.line">Контакты</a>
      <a href="#" :class="$style.link">info@exline.kz</a>
      <a href="#" :class="$style.link">+7 (777) 707 87 77</a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.container {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $color-white;
  z-index: 20;
  position: relative;

  padding: 0 10rem;
  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
}

.logo {

}

.menu {
  font-family: Mulish;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  display: flex;
  align-items: center;
  gap: 20px;

  transition: .1s ease;

  a:hover {
    opacity: .7;
  }

}

.line {
  padding-right: 20px;
  border-right: 1px $color-gray solid;
}

.link {
  color: $color-purple;
}
</style>