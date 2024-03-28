<template>
  <div :class="$style.footer">
    <div :class="$style.result">
      <div :class="$style.item">
        <img src="@/assets/icons/distance-icon.svg" alt="">
        <span :class="$style['result-header']">Расстояние: <span>1217 км</span></span>
      </div>
      <div :class="$style.item">
        <img src="@/assets/icons/clock-icon.svg" alt="">
        <span :class="$style['result-header']">Время: <span>12 ч 1 мин</span></span>
      </div>
      <div :class="$style.item">
        <img src="@/assets/icons/tenge-icon.svg" alt="">
        <span :class="$style['result-header']">Стоимость: <span>5 790 ₸</span></span>
      </div>
    </div>
    <div>
      <base-button variant="secondary" @click="$emit('clear')">Сбросить</base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";

const emit = defineEmits(['clear'])

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include breakpoint_up(md) {
    margin-top: 1rem;
  }
}

.result {
  display: flex;
  align-items: center;
  gap: 24px;

  .item {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  &-header {
    font-family: Mulish;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    @include breakpoint_up(md) {
      display: flex;
      flex-direction: column;
    }
    span {
      font-family: Mulish;
      font-size: 16px;
      font-weight: 800;
      line-height: 20px;
      text-align: left;
    }
  }
}
</style>