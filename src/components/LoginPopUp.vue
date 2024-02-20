<template>
  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar
          icon="fa-regular fa-user"
          color="primary"
          text-color="white"
        />
        <span class="q-ml-sm">LOGIN</span>
      </q-card-section>

      <q-card-section class="row items-center">
        <div class="col">
          <q-input outlined v-model="firstName" label="First Name" />
          <q-input outlined v-model="lastName" label="Last Name" />
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup="true" />
        <q-btn
          flat
          label="Login"
          color="primary"
          @click="login()"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { userStore } from "src/stores/user.js";
const store = userStore();
let firstName = ref("");
let lastName = ref("");

function login() {
  const user = store.userValue;
  if (firstName.value == user.firstName && lastName.value == user.lastName) {
    store.logIn();
  }
}
</script>
