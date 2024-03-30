<template>
  <div :class="$style.container">
    <img src="@/assets/icons/search.svg" alt="" :class="$style.icon">
    <input v-model="model" type="text" :class="$style.input" :placeholder="placeholder">
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  placeholder: string,
  modelValue: string,
  maxWidth?: string
}>(), {
  maxWidth: '350px'
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: e => emit('update:modelValue', e)
})

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.container {
  width: 100%;
  max-width: v-bind('props.maxWidth');

  height: 48px;
  border: 1px $color-gray-2 solid;
  display: flex;
  align-items: center;
  border-radius: 12px;
  position: relative;
}

.icon {
  position: absolute;
  left: 19px;
}

.input {
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;

  font-family: Mulish;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  margin-left: 52px;
  border-radius: 12px;

  &::placeholder {
    color: $color-black;
  }
}
</style>