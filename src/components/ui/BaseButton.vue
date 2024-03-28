<template>
  <button
      :class="[$style.btn,
      {[$style.primary]: variant === 'primary',
        [$style.select]: variant === 'select',
        [$style.secondary]: variant === 'secondary',
        [$style.active]: variant === 'select' && active}
  ]">
    <slot/>
  </button>
</template>
<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'select'

const props = withDefaults(defineProps<{
  maxWidth?: string,
  variant?: Variant,
  active?: boolean
}>(), {
  maxWidth: 'fit-content',
  variant: 'primary',
  active: false
})

</script>

<style lang="scss" module>
@use '@/style/colors' as *;

.btn {
  font-family: Mulish;
  font-weight: 700;
  text-align: center;

  border: none;
  padding: 12px 16px 12px 16px;
  border-radius: 12px;

  width: 100%;
  max-width: v-bind('props.maxWidth');
  cursor: pointer;
  transition: .1s ease;
  &:hover {
    opacity: .7;
  }
}

.primary {
  background: $color-pink;
  color: $color-white;
  font-size: 16px;
  line-height: 20px;
}

.secondary {
  background: none;
  color: $color-pink;
  font-size: 16px;
  line-height: 20px;
}

.select {
  background: $color-gray;
  color: $color-black;
  padding: 6px 12px 6px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}

.active {
  background: $color-pink;
  color: $color-white;
}

</style>