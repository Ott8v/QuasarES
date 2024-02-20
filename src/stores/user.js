import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const userStore = defineStore(
  "user",
  () => {
    const user = ref({ firstName: "pippo", lastName: "pippo" });
    const loginValue = ref(false);
    const userValue = computed(() => user.value);
    const loginStatus = computed(() => loginValue.value);
    const logIn = () => {
      console.log("login");
      loginValue.value = true;
    };
    const logOut = () => {
      loginValue.value = false;
    };

    return { loginValue, loginStatus, logIn, logOut, userValue };
  },
  { persist: true }
);
