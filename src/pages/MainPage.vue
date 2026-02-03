<script setup lang="ts">
import InfoBlock from "@/components/ui/InfoBlock.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import AccountsForm from "@/pages/components/AccountsForm.vue";
</script>

<template>
  <div class="main-page">
    <div class="main-page__header">
      <h1 class="main-page__title">Учетные записи</h1>
      <BaseButton>+</BaseButton>
    </div>

    <InfoBlock class="main-page__info">
      Для указания нескольких меток для одной пары логин/пароль, используйте разделитель ;
    </InfoBlock>

    <div class="main-page__accounts-form">
      <AccountsForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-page {
  padding: $padding-page;

  &__header {
    display: flex;
    gap: $default-gap;
    align-items: center;
  }

  &__info {
    margin-top: $default-margin;
  }

  &__accounts-form {
    margin-top: $default-margin;
  }
}
</style>
