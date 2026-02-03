<script setup lang="ts">
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

interface IEmits {
  remove: void;
}

defineEmits<IEmits>();
</script>

<template>
  <div class="account-item">
    <div class="account-item__col">
      <BaseInput type="text"></BaseInput>
    </div>
    <div class="account-item__col">
      <BaseSelect :options="['LDAP', 'Локальная']" />
    </div>
    <div class="account-item__col">
      <BaseInput type="text" />
    </div>
    <div class="account-item__col">
      <BaseInput type="password" />
    </div>
    <div class="account-item__col account-item__col--actions">
      <BaseButton @click="$emit('remove')">X</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.account-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $gray-color;
  padding: 8px 0;

  &__col {
    flex: 1;
    padding-right: 8px;
  }

  &--actions {
    flex: 0 0 80px;
  }
}
</style>