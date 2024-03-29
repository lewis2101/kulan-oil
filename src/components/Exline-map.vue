<template>
  <div :class="$style.margin" id="contacts">
    <div :class="$style.container">
      <base-title>Контакты</base-title>
    </div>
    <base-map/>
  </div>
</template>

<script setup lang="ts">
import BaseTitle from "@/components/ui/BaseTitle.vue";
import BaseMap from "@/components/ui/BaseMap.vue";



</script>

<style lang="scss" module>
@use '@/style/mixin/breakpoints' as *;
@use '@/style/colors' as *;

.margin {
  margin-bottom: 60px;
}

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;

  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
}
</style>