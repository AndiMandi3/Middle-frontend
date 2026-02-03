<script setup lang="ts">
import InfoIcon from "@/assets/icons/info-icon.svg?component";
</script>

<template>
  <div class="info-block">
    <div class="info-block__icon">
      <InfoIcon />
    </div>
    <div class="info-block__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-block {
  display: flex;
  border-radius: 10px;
  border: 2px solid $info-color;
  gap: $default-gap;
  padding: 20px;
  background-color: $info-background-color;
  align-items: center;

  &__content {
    display: flex;
    width: 100%;
  }
}
</style>