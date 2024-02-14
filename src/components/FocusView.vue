<template>
  <q-dialog>
    <q-card class="my-card">
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ obj.title }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">By user: {{ obj.userId }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-caption text-grey">
          {{ obj.body }}
        </div>
        <q-btn color="primary" label="Details" @click="goToDetails(obj.id)" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({
  obj: Object,
});

function goToDetails(id) {
  router.push({ name: "post", params: { id } });
}
</script>
