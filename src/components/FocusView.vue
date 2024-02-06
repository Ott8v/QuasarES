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
          <div class="text-subtitle1">
            By user: {{ obj.userId }}
          </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            {{ obj.body }}
          </div>
        </q-card-section>

    </q-card>
    </q-dialog>
</template>

<script setup>
    defineProps({
        obj: Object,
    })
</script>