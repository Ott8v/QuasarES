<template>
  <q-layout view="hHh lpR fFf">
    <div>
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title> Posts </q-toolbar-title>
        </q-toolbar>
      </q-header>
    </div>

    <div>
      <q-table
        flat
        bordered
        grid
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import "components/PostsCard.vue";
import { api } from "src/boot/axios";
let array = ref("");
async function results() {
  const { data: result } = await api.get("/posts");
  return result;
}
array.value = results();
console.log(array.value);
</script>
