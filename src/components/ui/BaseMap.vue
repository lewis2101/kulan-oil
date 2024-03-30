<template>
    <div :class="$style.container">
      <div :class="$style['popup']">
          <div :class="$style['popup-title']">г. Алматы, ​улица Жетысуская, 43</div>
        <div :class="$style['popup-desc']"><a href="tel:77273900300">+7 (727) 390‒03‒00</a></div>
        <div :class="$style['popup-desc']"><a href="tel:77273900301">+7 (727) 390‒03‒01</a></div>
        <div :class="$style['popup-desc']"><a href="tel:77273900302">+7 (727) 390‒03‒02</a></div>
        <div :class="$style['popup-desc']"><a href="tel:77777555057">+7‒777‒755‒50‒57</a></div>
        <div :class="$style['popup-desc']">info@exline.kz</div>
      </div>
      <div id="map" :class="$style.map"></div>
    </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";

declare global {
  interface Window {
    DG: any
  }
}
const DG = window.DG
let map

const renderMap = () => {
  DG.then(() => {
    map = DG.map('map', {
      center: [43.270070, 76.961387],
      zoom: 16
    })
    DG.marker([43.270070, 76.961387])
        .addTo(map)
        .bindPopup('Exline Жетысуская, 43')
  })
}

onMounted(() => {
  setTimeout(() => {
    renderMap()
  }, 0)
})

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.popup {
  background: $color-white;
  width: 100%;
  height: 100%;
  max-width: 420px;
  max-height: 180px;
  position: absolute;
  border-radius: 12px;

  padding: 20px;
  top: 50px;
  left: 100px;
  z-index: 1;

  &-title {
    font-family: Mulish;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
    margin-bottom: 10px;
  }
  &-desc {
    font-family: Mulish;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: $color-purple;

    &:last-child {
      margin-top: 10px;
    }
  }

  @include breakpoint_up(md) {
    position: static;
    margin-bottom: 20px;
  }

  @include breakpoint_up(sm) {
    //display: none;
  }
}

.container {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
}

.map {
  width: 100%;
  //width: 1100px;
  height: 640px;
  margin: 0 auto;
  @include breakpoint_up(md) {
    height: 440px;
  }
  @include breakpoint_up(sm) {
    height: 340px;
  }
}
</style>