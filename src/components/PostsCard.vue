<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">by User: {{ userID }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none"> {{ body }} </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  userID: String,
  title: String,
  body: String,
});
</script>
