<template>
  <div :class="$style.sticky">
    <div :class="$style.container">
      <div :class="$style.logo">
        <img src="@/assets/icons/Logo.svg" alt="">
      </div>
      <exline-header-menu/>
      <exline-header-burger/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExlineHeaderMenu from "@/components/Exline-header-menu.vue";
import ExlineHeaderBurger from "@/components/Exline-header-burger.vue";

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
  @include breakpoint_up(sm) {
    height: 60px;
  }
}

.logo {
  justify-self: start;
  img {
    @include breakpoint_up(sm) {
      width: 56px;
    }
  }
}

</style>