<template>
  <v-card elevation="5" shaped>
    <h2>Inicio de sesión.</h2>
    <FormAuth context="login"></FormAuth>
  </v-card>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import FormAuth from '../../components/FormAuth.vue';

@Component({
  components: {FormAuth}
})
export default class Login extends Vue {}
</script>

<style scoped>
 p {
   margin: 0;
 }
</style>