<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ obj.title }}</div>
      <div class="text-subtitle2">by User: {{ obj.userId }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ obj.body }}
    </q-card-section>
    <q-card-section>
      <q-icon
        v-show="!like"
        size="30px"
        name="fa-regular fa-thumbs-up"
        @click="likePost()"
      />
      <q-icon
        v-show="like"
        size="30px"
        name="fa-solid fa-thumbs-up"
        @click="likePost()"
      />
    </q-card-section>
  </q-card>
  <Login v-model="stat"></Login>
</template>

<script setup>
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { userStore } from "src/stores/user.js";
import Login from "src/components/LoginPopUp.vue";
const router = useRouter();
const store = userStore();
let stat = ref(false);
let obj = ref({});
let like = ref(false);
function likePost() {
  if (store.loginStatus == false) {
    stat.value = true;
    return;
  }

  if (like.value == false) {
    like.value = true;
  } else {
    like.value = false;
  }
}
async function find() {
  const id = router.currentRoute.value.params.id;
  const { data: result } = await api.get("/posts");
  obj.value = result.filter((elm) => id == elm.id)[0];
}

onMounted(async () => await find());
</script>
