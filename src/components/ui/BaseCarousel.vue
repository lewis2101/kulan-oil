<template>
  <carousel :class="$style.carousel">
    <slot/>
    <template #addons>
      <navigation>
        <template #prev>
          <img src="@/assets/icons/chevron.svg" alt="" :class="$style.prev">
        </template>
        <template #next>
          <img src="@/assets/icons/chevron.svg" alt="" :class="$style.next">
        </template>
      </navigation>
      <pagination :class="$style.pagination"/>

    </template>
  </carousel>
</template>
<script setup lang="ts">
import {Carousel, Navigation, Pagination} from "vue3-carousel";
</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.carousel {
  z-index: 3;
}

.prev {
  margin-left: 100px;
  @include breakpoint_up(lg) {
    margin-left: 50px;
  }
  @include breakpoint_up(md) {
    display: none;
    margin-left: 10px;
  }
}

.next {
  transform: rotate(180deg);
  margin-right: 100px;
  @include breakpoint_up(lg) {
    margin-right: 50px;
  }
  @include breakpoint_up(md) {
    display: none;
    margin-right: 10px;
  }
}

.pagination {
  display: none;
  @include breakpoint_up(md) {
    display: flex;
  }
}

</style>