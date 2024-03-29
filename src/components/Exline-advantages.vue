<template>
  <div :class="$style.container" id="advantage">
    <base-title>Наши преимущества</base-title>
    <div :class="$style['list']">
      <div :class="$style['list-item']">
        <img src="@/assets/icons/fast-delivery-1.svg" alt="">
        <div :class="$style['item-text']">Быстрая доставка</div>
      </div>
      <div :class="$style['list-item']">
        <img src="@/assets/icons/fast-delivery-2.svg" alt="">
        <div :class="$style['item-text']">Быстрая доставка</div>
      </div>
      <div :class="$style['list-item']">
        <img src="@/assets/icons/fast-delivery-3.svg" alt="">
        <div :class="$style['item-text']">Быстрая доставка</div>
      </div>
      <div :class="$style['list-item']">
        <img src="@/assets/icons/fast-delivery-4.svg" alt="">
        <div :class="$style['item-text']">Быстрая доставка</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BaseTitle from "@/components/ui/BaseTitle.vue";
</script>

<style lang="scss" module>
@use '@/style/mixin/breakpoints' as *;
@use '@/style/colors' as *;

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 60px;

  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
}

.list {
  display: flex;
  gap: 24px;

  &-item {
    width: 100%;
    max-width: 258px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: $color-gray;
    gap: 10px;
    transition: .1s ease;
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
  }
}

.item-text {
  font-family: Mulish;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
}

</style>