<template>
  <div :class="$style.container">
    <div :class="$style.logo">
      <img src="@/assets/icons/Logo.svg" alt="">
    </div>
    <div :class="$style.social">
      <div :class="$style['social-icon']">
        <img src="@/assets/icons/inst.svg" alt="">
      </div>
      <div :class="$style['social-icon']">
        <img src="@/assets/icons/youtube.svg" alt="">
      </div>
      <div :class="$style['social-icon']">
        <img src="@/assets/icons/facebook.svg" alt="">
      </div>
    </div>
    <div :class="$style.copyright">
      © Все права защищены 2023
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.container {
  margin: 0 auto;
  width: 100%;

  background: $color-gray;
  height: 224px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10rem;

  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
}

.social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &-icon {
    cursor: pointer;
  }
}

.copyright {
  font-family: Mulish;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
}
</style>