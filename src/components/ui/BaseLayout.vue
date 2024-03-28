<template>
  <div :class="$style.layout">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
@use '@/style/mixin/breakpoints' as *;

.layout {
  padding: 0 10rem;
  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
}
</style>