<template>
  <q-card class="my-card" @click="() => setStatus()">
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div class="text-subtitle2">by User: {{ post.userId }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none"> {{ post.body }} </q-card-section>
  </q-card>
  <Focus :obj="post" v-model="stat"></Focus>
</template>

<script setup>
import { ref } from "vue";
import Focus from "components/FocusView.vue";
let stat = ref(false);
function setStatus() {
  stat.value = true;
}
defineProps({
  post: Object,
});
</script>
