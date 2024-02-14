<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ obj.title }}</div>
      <div class="text-subtitle2">by User: {{ obj.userId }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none"> {{ obj.body }} </q-card-section>
  </q-card>
</template>

<script setup>
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let obj = ref({});
async function find() {
  const id = router.currentRoute.value.params.id;
  const title = router.currentRoute.value.params.title;
  const { data: result } = await api.get("/posts");
  obj.value = result.filter((elm) => id == elm.userId && title == elm.title)[0];
  console.log(obj.value);
}

onMounted(async () => await find());
</script>
