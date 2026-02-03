<script setup lang="ts">
interface IProps {
  type: "text" | "password";
}

const props = defineProps<IProps>();
</script>

<template>
  <input class="base-input" :type=props.type />
</template>

<style scoped lang="scss">
.base-input {
  border: 1px solid $gray-color;
  border-radius: 2px;
  padding: 6px 8px;
  width: 100%;
}
</style>