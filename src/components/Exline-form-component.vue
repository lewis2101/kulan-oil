<template>
  <div :class="$style.flex">
    <div v-if="isFind" :class="$style.container">
      <div :class="$style['container-input']">
        <exline-form-input v-model="model[0]"/>
      </div>
      <div
          :class="$style.arrow"
          @click="reverse">
        <img src="@/assets/icons/arrow-left-right.svg" alt="">
      </div>
      <div :class="$style['container-input']">
        <exline-form-input v-model="model[1]"/>
      </div>
      <div :class="$style.submit">
        <base-button variant="primary" max-width="275px" @click="$emit('calculate')">Рассчитать стоимость</base-button>
      </div>
    </div>
    <div v-if="isDelivery" :class="$style.delivery">
      <base-input v-model="codeDelivery" placeholder="Отследить посылку" max-width="100%"/>
      <base-button max-width="350px">Отследить посылку</base-button>
    </div>
    <exline-form-footer :result="result" @clear="$emit('clear')"/>
  </div>
</template>

<script setup lang="ts">
import ExlineFormInput from "@/components/Exline-form-input.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import {FormInput, ResultDistance} from "@/types/input-type";
import {computed, ComputedRef, ref} from "vue";
import ExlineFormFooter from "@/components/Exline-form-footer.vue";
import BaseInput from "@/components/ui/BaseInput.vue";

const props = defineProps<{
  modelValue: FormInput[],
  result: ResultDistance,
  type: number
}>()

const codeDelivery = ref('')

const emit = defineEmits(['update:modelValue', 'calculate', 'clear'])

const reverse = () => {
  model.value = model.value.reverse()
  const label = model.value[0].label
  model.value[0].label = model.value[1].label
  model.value[1].label = label
}

const model = computed({
  get: () => props.modelValue,
  set: e => emit('update:modelValue', e)
})

const isDelivery: ComputedRef<boolean> = computed(() => props.type === 3)
const isFind: ComputedRef<boolean> = computed(() => props.type < 3)

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.flex {
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 10px;

  background: $color-white;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  padding: 20px;
  border-radius: 0 12px 12px 12px;

  margin: 0 auto;

  box-shadow: 0px 4px 9px 4px rgba(0,0,0,0.1);
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  gap: 10px;

  width: 100%;
  height: 100%;

  @include breakpoint_up(sm) {
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }

  &-input {
    width: 100%;
    max-width: 350px;
  }
}

.delivery {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @include breakpoint_up(sm) {
    flex-direction: column;
  }
}

.arrow {
  align-self: start;
  margin-top: 15px;
  height: 100%;
  cursor: pointer;
  transition: .1s ease;

  &:hover {
    opacity: .7;
  }

  @include breakpoint_up(sm) {
    margin-top: 0;
    align-self: center;
  }
}

.submit {
  height: 100%;
  margin-left: 1.3rem;
  @include breakpoint_up(sm) {
    margin-top: 1rem;
    margin-left: 0;
  }

}

</style>