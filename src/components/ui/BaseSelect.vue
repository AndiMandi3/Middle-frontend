<script setup lang="ts">
interface IProps {
  options: string[],
}

const props = defineProps<IProps>();
</script>

<template>
  <select class="base-select">
    <option v-for="(option, index) of props.options" :key="index" :value="option">{{ option }}</option>
  </select>
</template>

<style scoped lang="scss">
.base-select {
  border: 1px solid $gray-color;
  border-radius: 2px;
  padding: 6px 8px;
  width: 100%;
}
</style>