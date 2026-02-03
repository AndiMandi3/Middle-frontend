<script setup lang="ts">
import AccountItem from "@/pages/components/AccountItem.vue";
import { ref } from "vue";

const accounts = ref([
  {id: 1},
]);

const remove = (id: number) => {
  accounts.value = accounts.value.filter(item => item.id !== id);
}
</script>

<template>
  <div class="accounts-form">
    <div class="accounts-form__header">
      <div class="accounts-form__col">Метка</div>
      <div class="accounts-form__col">Тип записи</div>
      <div class="accounts-form__col">Логин</div>
      <div class="accounts-form__col">Пароль</div>
      <div class="accounts-form__col accounts-form__col--actions"></div>
    </div>

    <div class="accounts-form__body">
      <AccountItem v-for="account in accounts" :key="account.id" @remove="remove(account.id)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.accounts-form {
  &__header {
    display: flex;
    padding-bottom: 8px;
    border-bottom: 1px solid $gray-color;
  }

  &__col {
    flex: 1;
    padding-right: 8px;

    &--actions {
      flex: 0 0 80px;
    }
  }
}
</style>