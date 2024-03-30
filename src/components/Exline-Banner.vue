<template>
  <div :class="$style.container">
    <base-carousel>
      <slide v-for="slide in 5" :key="slide">
        <div :class="$style.content">
          <div :class="$style['content-text']">
              <div :class="$style['content-text-title']">Внутригородская доставка</div>
              <div :class="$style['content-text-desc']">Курьерская служба Exline предлагает Вашему вниманию услуги по внутригородской доставке отправлений во всех областных центрах Республики Казахстан</div>
              <base-button variant="primary" max-width="200px">Подробнее</base-button>
          </div>
          <div>
            <img src="@/assets/icons/car.png" alt="" :class="$style.img">
          </div>
        </div>
      </slide>
    </base-carousel>
    <div :class="$style.background"></div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Slide } from 'vue3-carousel'
import BaseCarousel from "@/components/ui/BaseCarousel.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

</script>

<style lang="scss" module>
@use '@/style/colors' as *;
@use '@/style/mixin/breakpoints' as *;

.container {
  background: $color-gray;
  height: 100%;
  width: 100%;
  z-index: 2;
  position: relative;
  @include breakpoint_up(md) {
    padding-bottom: 20px;
  }
  overflow-x: hidden;
}

.img {
  width: 100%;
}

.background {
  background-image: url("@/assets/icons/Ellipse.svg");
  background-repeat: no-repeat;
  object-fit: fill;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: -50%;
}

.content {
  display: flex;
  align-items: center;

  &-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 415px;

    @include breakpoint_up(sm) {
      text-align: center;
      justify-content: center;
      align-items: center;
    }

    &-title {
      font-family: Mulish;
      font-size: 24px;
      font-weight: 800;
      line-height: 28px;
      text-align: left;
    }

    &-desc {
      font-family: Mulish;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
    }
  }

  @include breakpoint_up(lg) {
    padding: 0 80px 0 80px;
  }
  @include breakpoint_up(md) {
    padding: 0 40px 0 40px;
  }

  @include breakpoint_up(sm) {
    flex-direction: column-reverse;
  }
}

.ellipse {
  position: absolute;
  background: $color-purple;
  border-radius: 50%;
  width: 733px;
  height: 733px;
  right: -300px;
  top: -127px;
  z-index: 1;
  @include breakpoint_up(md) {
    display: none;
  }
}
</style>