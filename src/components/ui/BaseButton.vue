<script setup lang="ts">

</script>

<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  font-size: 20px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid $gray-color;
  cursor: pointer;
  background-color: transparent;
}
</style>