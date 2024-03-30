<template>
  <div :class="$style.burger" @click="open = !open">
    <img src="@/assets/icons/menu.svg" alt="">
  </div>
  <div :class="[$style.menu, { [$style.open]: open }]">
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

import {ref} from "vue";

const open = ref(false)

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.burger {
  display: none;
  padding: 5px;
  @include breakpoint_up(md) {
    display: block;
  }
}

.menu {
  position: absolute;
  width: 100%;
  background: $color-white;
  color: $color-black;

  font-family: Mulish;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;

  top: -300px;
  left: 0;
  transition: .3s ease;

  z-index: -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  padding: 20px 0;

  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.1);
}

.open {
  top: 75px;
  @include breakpoint_up(sm) {
    top: 60px;
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