<template>
  <v-card elevation="5" shaped>
    <h2>Registro.</h2>
    <FormAuth context="register"></FormAuth>
  </v-card>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import FormAuth from '../../components/FormAuth.vue';

@Component({
  components: {FormAuth}
})
export default class Register extends Vue {}
</script>

<style scoped>
 p {
   margin: 0;
 }
</style>