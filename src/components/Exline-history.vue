<template>
  <div :class="$style.container" id="history">
    <base-title>История Exline</base-title>
    <div :class="$style.content">
      <div :class="$style.card">
        <div :class="$style['card-title']">Курьерская компания Exline основана 31 июля 2003 года</div>
        <div :class="$style['card-desc']">За время работы компания Exline заняла достойную нишу на рынке почтовых услуг,
          зарекомендовав себя как надежного партнера, которому доверяют свои отправления многие компании казахстанского
          и международного бизнеса
        </div>
      </div>
      <div :class="$style['image-1']">
        <img src="@/assets/icons/card-img1.png" alt="">
      </div>
      <div :class="$style['image-2']">
        <img src="@/assets/icons/card-img2.png" alt="">
      </div>
      <div :class="$style.card">
        <div :class="$style['card-title']">Курьерская компания Exline основана 31 июля 2003 года</div>
        <div :class="$style['card-desc']">За время работы компания Exline заняла достойную нишу на рынке почтовых услуг,
          зарекомендовав себя как надежного партнера, которому доверяют свои отправления многие компании казахстанского
          и международного бизнеса
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BaseTitle from "@/components/ui/BaseTitle.vue";
</script>

<style lang="scss" module>
@use '@/style/mixin/breakpoints' as *;
@use '@/style/colors' as *;

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 60px;

  @include breakpoint_up(lg) {
    padding: 0 3rem;
  }
}

.content {
  width: 100%;
  display: grid;
  gap: 24px;
  grid-template-areas:
    'card-1 card-1 img-1 img-1'
    'img-2 img-2 img-1 img-1'
    'img-2 img-2 card-2 card-2'
    'img-2 img-2 card-2 card-2';
}

.card {
  width: 100%;
  height: 100%;
  background: $color-gray;
  border-radius: 12px;
  padding: 30px;

  &:first-child {
    grid-area: card-1;
    max-width: 446px;
  }
  &:last-child {
    grid-area: card-2;
    max-width: 634px;
  }


  &-title {
    font-family: Mulish;
    font-size: 24px;
    font-weight: 800;
    line-height: 28px;
    text-align: left;
    margin-bottom: 1rem;
  }

  &-desc {
    font-family: Mulish;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    opacity: 75%;
  }
}

.image {
  &-1 {
    grid-area: img-1;
    img {
      width: 100%;
      max-width: 634px;
      object-fit: cover;
    }
  }
  &-2 {
    grid-area: img-2;
    img {
      width: 100%;
      max-width: 446px;
      object-fit: cover;
    }
  }
}
</style>