<template>
  <div :class="$style.padding">
    <exline-form-menu v-model="model"/>
    <exline-form-component
        v-model="inputs"
        :result="result"
        @calculate="calculate"
        @clear="clearData"
    />
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import ExlineFormComponent from "@/components/Exline-form-component.vue";
import {FormInput, FormMenu} from "@/types/input-type";
import {getCities} from "@/api/getCities";
import {calculateDistance} from "@/api/calculateDistance";
import ExlineFormMenu from "@/components/Exline-form-menu.vue";

const model = ref<FormMenu[]>([
  {
    active: true,
    label: 'Рассчитать стоимость',
    id: 1
  },
  {
    active: false,
    label: 'Вызвать курьера',
    id: 2
  },
  {
    active: false,
    label: 'Отследить посылку',
    id: 3
  }
])

const inputs = ref<FormInput[]>([
  {
    id: 1,
    label: 'Откуда',
    value: '',
    cities: null
  },
  {
    id: 2,
    label: 'Куда',
    value: '',
    cities: null
  }
])

const result = reactive<Record<string, number | null>>({
  distance: null,
  time: null,
  price: null
})

const calculate = async () => {
  const from = inputs.value[0].cities.find(i => i.selected)?.id
  const to = inputs.value[1].cities.find(i => i.selected)?.id
  if(!from && !to) return

  if(from !== to) {
    const data = await calculateDistance(from, to)
    return Object.keys(data).forEach(i => {
      result[i] = data[i]
    })
  }
  return clearData()
}

const clearData = async () => {
  Object.keys(result).forEach(i => {
    result[i] = null
  })
  await fetchData()
  inputs.value = inputs.value.map(i => ({ ...i, value: '' }))
}

const fetchData = async () => {
  let data = await getCities()
  inputs.value = inputs.value.map(i => ({ ...i, cities: data }))
}

onMounted(async() => {
  await fetchData()
})

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.padding {
  display: flex;
  flex-direction: column;
  padding: 0 10rem;

  position: relative;
  bottom: 40px;

  z-index: 3;

  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
  @include breakpoint_up(md) {
    position: static;
    margin-bottom: 40px;
  }
}

</style>