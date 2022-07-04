<template>
  <div class="text">
    <AppList :width="400" :height="400" />
  </div>
</template>

<script>
import AppList from "./index.vue";
export default {
  components: {
    AppList,
  },
};
</script>

<style>
.text {
  width: 500px;
  height: 500px;
  padding: 10px;
  background-color: aquamarine;
}
</style>