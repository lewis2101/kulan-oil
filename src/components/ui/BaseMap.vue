<template>
    <div :class="$style.container">
      <div :class="$style['popup']">
          <div :class="$style['popup-title']">г. Алматы, ​улица Жетысуская, 43</div>
        <div :class="$style['popup-desc']">+7 (727) 390‒03‒00</div>
        <div :class="$style['popup-desc']">+7 (727) 390‒03‒01</div>
        <div :class="$style['popup-desc']">+7 (727) 390‒03‒02</div>
        <div :class="$style['popup-desc']">+7‒777‒755‒50‒57</div>
        <div :class="$style['popup-desc']">info@exline.kz</div>
      </div>
      <div id="map" :class="$style.map"></div>
    </div>
</template>

<script setup lang="ts">

declare global {
  interface Window {
    DG: any
  }
}

const DG = window.DG

let map

DG.then(function () {
  map = DG.map('map', {
    center: [43.270070, 76.961387],
    zoom: 16
  })
  DG.marker([43.270070, 76.961387]).addTo(map).bindPopup('Exline Жетысуская, 43');
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
}

.container {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.map {
  //width: 70vw;
  width: 1100px;
  height: 640px;
  margin: 0 auto;
}
</style>