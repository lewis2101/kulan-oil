<template>
  <div :class="$style.padding">
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
    <exline-form-component v-model="inputs" :result="result" @calculate="calculate" @clear="clearData"/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import ExlineFormComponent from "@/components/Exline-form-component.vue";
import {FormInput} from "@/types/input-type";
import {getCities} from "@/api/getCities";
import {calculateDistance} from "@/api/calculateDistance";

const model = ref([
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

const select = (id: number) => {
  model.value = model.value.map(i => i.id === id ? { ...i, active: true } : { ...i, active: false})
}

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
  bottom: 75px;

  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
}

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