import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const userStore = defineStore(
  "likes",
  () => {
    return {};
  },
  { persist: true }
);
