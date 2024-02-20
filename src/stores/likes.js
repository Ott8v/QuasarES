import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const likeStore = defineStore(
  "likes",
  () => {
    let likePosts = ref([]);
    const getLikeposts = computed(() => likePosts);
    const checkLikePost = (id) => {
      if (likePosts.value.includes(id)) {
        return true;
      } else {
        return false;
      }
    };
    const addLikePost = (id) => {
      likePosts.value.push(id);
    };
    const removeLikePost = (id) => {
      likePosts.value = likePosts.value.filter((elm) => elm != id);
    };
    return {
      likePosts,
      getLikeposts,
      addLikePost,
      removeLikePost,
      checkLikePost,
    };
  },
  { persist: true }
);
