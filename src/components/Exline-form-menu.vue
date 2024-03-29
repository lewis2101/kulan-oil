<template>
  <div :class="$style.menu">
    <div
        v-for="item in model"
        :key="item.id"
        :class="[$style['menu-item'],
           {[$style.active]: item.active}]"
        @click="select(item.id)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {FormMenu} from "@/types/input-type";

const props = defineProps<{
  modelValue: FormMenu[]
}>()

const emit = defineEmits(['update:modelValue', 'select'])

const select = (id: number) => {
  model.value = model.value.map(i => i.id === id ? { ...i, active: true } : { ...i, active: false})
}

const model = computed({
  get: () => props.modelValue,
  set: e => emit('update:modelValue', e)
})

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.menu {
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  display: flex;

  &-item {
    width: 195px;
    height: 48px;
    background: $color-gray;
    color: $color-black;

    font-family: Mulish;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;

    &:first-child {
      border-radius: 12px 0 0 0;
      box-shadow: -1px -6px 10px -1px rgba(0,0,0,0.1);
    }
    &:nth-child(2) {
      box-shadow: 0 -6px 10px -1px rgba(0,0,0,0.1);
    }
    &:last-child {
      box-shadow: 0 -6px 10px -1px rgba(0,0,0,0.1);
    }
  }
}

.active {
  background: $color-white;
  color: $color-pink;
}
</style>