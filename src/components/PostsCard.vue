<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div class="text-subtitle2">by User: {{ post.userId }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none"> {{ post.body }} </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>
