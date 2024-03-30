<template>
  <div :class="[$style.footer, { [$style.end]: !hasResult }]">
    <div v-if="hasResult" :class="$style.result">
      <div :class="$style.item">
        <img src="@/assets/icons/distance-icon.svg" alt="">
        <span :class="$style['result-header']">Расстояние: <span>{{ result.distance }} км</span></span>
      </div>
      <div :class="$style.item">
        <img src="@/assets/icons/clock-icon.svg" alt="">
        <span :class="$style['result-header']">Время: <span>{{ formatTime(result.time) }}</span></span>
      </div>
      <div :class="$style.item">
        <img src="@/assets/icons/tenge-icon.svg" alt="">
        <span :class="$style['result-header']">Стоимость: <span>{{ formatSum(result.price.toString()) }} ₸</span></span>
      </div>
    </div>
    <div v-if="hasResult" :class="$style.clear">
      <base-button variant="secondary" @click="$emit('clear')">Сбросить</base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
import {computed, ComputedRef} from "vue";
import {formatSum, formatTime} from "@/helpers/format";

const props = defineProps<{
  result: Record<string, number | null>,
}>()

const hasResult: ComputedRef<number> = computed(() => props.result.distance && props.result.time && props.result.price)

defineEmits(['update:modelValue', 'clear'])

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.end {
  align-self: end;
}

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

  @include breakpoint_up(sm) {
    flex-wrap: wrap;
  }
}

.clear {
  align-self: end;
}
</style>