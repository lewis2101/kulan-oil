<template>
  <div :class="$style.menu">
    <a href="#">Главная</a>
    <a href="#advantage">Наши преимущества</a>
    <a href="#history">История Exline</a>
    <a href="#trusts">Нам доверяют</a>
    <a href="#contacts" :class="$style.line">Контакты</a>
    <a href="#" :class="$style.link">info@exline.kz</a>
    <a href="tel:77777078777" :class="$style.link">+7 (777) 707 87 77</a>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

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

  @include breakpoint_up(md) {
    display: none;
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