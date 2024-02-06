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
      title="Posts"
      :rows="array"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <PostsCard :post="props.row"></PostsCard>
        </div>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PostsCard from "components/PostsCard.vue";
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
