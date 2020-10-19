<template>
  <v-card elevation="5" shaped>
    <h2>Inicio de sesión.</h2>
    <v-form @submit.prevent="login()" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field v-model="user.email" :rules="[rules.required,rules.email]" label="Email" outlined></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field v-model="user.password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            label="Password"
            outlined
            @click:append="show = !show"></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <p class="text-left"><router-link to="/auth/register">¿Aún no tiene cuenta?</router-link></p>
            <p class="text-left"><router-link to="/">¿Olvido su contraseña?</router-link></p>
          </v-col>
        </v-row>
        <v-btn color="primary" type="submit" elevation="2">Entrar</v-btn>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import router from '../../router/index';

export default {
  data: () => ({
    valid: false,
    show: false,
    user: {
      email: '',
      password: '',
    },
    rules: {
      required: v => !!v || 'Required.',
      email: v => /.+@.+/.test(v) || 'E-mail must be valid.',
      min: v => v.length >= 8 || 'The password must have more than 8 characters',
    },
  }),
  methods: {
    login(){
      if (this.valid) {
        console.log(this.user);
        router.push('/dashboard');
      }
    }
  }
}
</script>

<style scoped>
 p {
   margin: 0;
 }
</style>