<template>
  <div :class="$style.title">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.title {
  font-family: Mulish;
  font-size: 24px;
  font-weight: 800;
  line-height: 28px;
  text-align: left;
  margin-bottom: 30px;
}
</style>