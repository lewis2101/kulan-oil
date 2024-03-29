<template>
  <div :class="$style.container" id="trusts">
    <base-title>Нам доверяют</base-title>
    <div :class="$style.companies">
        <div :class="$style['companies-item']">
          <img src="@/assets/icons/trust1.png" alt="">
        </div>
      <div :class="$style['companies-item']">
        <img src="@/assets/icons/trust2.png" alt="">
      </div>
      <div :class="$style['companies-item']">
        <img src="@/assets/icons/trust3.png" alt="">
      </div>
      <div :class="$style['companies-item']">
        <img src="@/assets/icons/trust8.png" alt="">
      </div>
      <div :class="$style['companies-item']">
        <img src="@/assets/icons/trust7.png" alt="">
      </div>
      <div :class="$style['companies-item']">
        <img src="@/assets/icons/trust4.png" alt="">
      </div>
      <div :class="$style['companies-item']">
        <img src="@/assets/icons/trust5.png" alt="">
      </div>
      <div :class="$style['companies-item']">
        <img src="@/assets/icons/trust6.png" alt="">
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

.companies {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 250px;
  }
}
</style>