<template>
<!--  <div :class="$style.wrapper" id="main">-->
    <exline-header/>
    <exline-banner/>
    <exline-form/>
    <exline-advantages/>
    <exline-history/>
    <exline-trusts/>
<!--    <exline-map/>-->
    <exline-footer/>
<!--  </div>-->
</template>

<script setup lang="ts">

import ExlineHeader from "@/components/Exline-header.vue";
import ExlineBanner from "@/components/Exline-Banner.vue";
import ExlineForm from "@/components/Exline-form.vue";
import ExlineAdvantages from "@/components/Exline-advantages.vue";
import ExlineHistory from "@/components/Exline-history.vue";
import ExlineTrusts from "@/components/Exline-trusts.vue";
import ExlineMap from "@/components/Exline-map.vue";
import ExlineFooter from "@/components/Exline-footer.vue";
</script>

<style lang="scss" module>
.wrapper {
  width: 1360px;
  margin: 0 auto;
}
</style>
