<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import FormAuth from './components/FormAuth.vue';

export default Vue.extend({
  name: 'App',

  components: {
    FormAuth
  },

  data: () => ({
    //
  }),
});
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
