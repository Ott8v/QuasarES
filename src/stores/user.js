import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const userStore = defineStore(
  "user",
  () => {
    const user = ref({ firstName: "pippo", lastName: "pippo" });
    let loginValue = ref(false);
    const userValue = computed(() => user.value);
    const loginStatus = computed(() => loginValue.value);
    function logIn() {
      loginValue.value = true;
    }
    function logOut() {
      loginValue.value = false;
    }

    return { loginStatus, logIn, logOut, userValue };
  },
  { persist: true }
);
