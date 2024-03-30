<template>
  <base-input v-model="model.value" :class="$style.input" :placeholder="model.label"/>
  <div :class="$style.selects">
    <base-button
        variant="select"
        v-for="item in getSortedItems"
        :key="item.id + model.id"
        :active="item.selected"
        @click="selectCity(item.id)"
    >
      {{ item.address }}
    </base-button>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import {FormInput, TypeCities} from "@/types/input-type";
import {computed, ComputedRef, WritableComputedRef} from "vue";

const props = defineProps<{
  modelValue: FormInput
}>()

const emit = defineEmits(['update:modelValue'])

const selectCity = (id: number) => {
  model.value.cities = model.value.cities.map(i => ({ ...i, selected: i.id === id }))
}

const getSortedItems: ComputedRef<TypeCities[]> = computed(() => model.value?.value ? model.value.cities.filter(i => isContains(i.address, model.value.value)) : [])

const isContains = (text1: string, text2: string) => text1.toLowerCase().includes(text2.toLowerCase())

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