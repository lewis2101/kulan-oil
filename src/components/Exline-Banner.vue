<template>
  <div :class="$style.container">
    <base-carousel>
      <slide v-for="slide in 10" :key="slide">
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
<!--    <div :class="$style.ellipse">-->

<!--    </div>-->
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
  height: 480px;
  width: 100%;
  position: relative;
}

.img {
  width: 100%;
  @include breakpoint_up(lg) {
    width: 480px;
  }
  @include breakpoint_up(md) {
    width: 430px;
  }
}

.content {
  display: flex;
  align-items: center;

  &-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 415px;

    @include breakpoint_up(lg) {
      max-width: 350px;
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
}

.ellipse {
  position: absolute;
  background: $color-purple;
  border-radius: 50%;
  width: 733px;
  height: 733px;
  right: -100px;
  top: -127px;
  z-index: 2;
}
</style>