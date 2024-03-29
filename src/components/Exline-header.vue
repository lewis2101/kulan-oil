<template>
  <div :class="$style.sticky">
    <div :class="$style.container">
      <div :class="$style.logo">
        <img src="@/assets/icons/Logo.svg" alt="">
      </div>
      <div :class="$style.menu">
        <a href="#main">Главная</a>
        <a href="#advantage">Наши преимущества</a>
        <a href="#history">История Exline</a>
        <a href="#trusts">Нам доверяют</a>
        <a href="#contacts" :class="$style.line">Контакты</a>
        <a href="#" :class="$style.link">info@exline.kz</a>
        <a href="tel:77777078777" :class="$style.link">+7 (777) 707 87 77</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.sticky {
  position:sticky;
  top: 0;
  z-index: 10;
}

.container {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $color-white;
  z-index: 20;
  position: relative;

  box-shadow: 0 1px 20px 0 rgba(0,0,0,0.1);

  padding: 0 10rem;
  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
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