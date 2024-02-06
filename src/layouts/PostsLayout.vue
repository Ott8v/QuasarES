<template>
  <q-page padding>
    <q-input
      borderless
      dense
      debounce="300"
      v-model="filter"
      placeholder="Search"
      label="search"
    />
    <q-table
      flat
      bordered
      grid
      title="Treats"
      :rows="array"
      :columns="columns"
      row-key="name"
      :filter="filter"
    />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "components/PostsCard.vue";
import { api } from "src/boot/axios";
let array = ref([]);
let filter = ref("");

async function results() {
  const { data: result } = await api.get("/posts");
  array.value = result;
}

onMounted(async () => {
  await results();
  console.log(array.value);
});
</script>
