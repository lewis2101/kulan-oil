<template>
  <base-input v-model="model.value" :class="$style.input" :placeholder="model.label"/>
  <div :class="$style.selects">
    <base-button
        variant="select"
        v-for="(item, idx) in model.cities"
        :key="item.id"
        :active="item.selected"
        @click="selectCity(idx)"
    >
      {{ item.address }}
    </base-button>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import {FormInput} from "@/types/input-type";
import {computed, WritableComputedRef} from "vue";

const props = defineProps<{
  modelValue: FormInput
}>()

const emit = defineEmits(['update:modelValue'])

const selectCity = (idx: number) => {
  model.value.cities = model.value.cities.map(i => ({ ...i, selected: false }))
  model.value.cities[idx].selected = true
}

const model: WritableComputedRef<FormInput> = computed({
  get: () => props.modelValue,
  set: e => emit('update:modelValue', e)
})

</script>

<style lang="scss" module>
.input {
  margin-bottom: 1.3rem;
}
.selects {
  max-width: 350px;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  flex-wrap: wrap;
}
</style>