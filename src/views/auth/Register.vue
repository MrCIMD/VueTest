<template>
  <v-card elevation="5" shaped>
    <h2>Registro.</h2>
    <v-form @submit.prevent="register()" v-model="valid">
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
            <p class="text-left"><router-link to="/auth/login">¿Ya tiene cuenta?</router-link></p>
          </v-col>
        </v-row>
        <v-btn color="primary" elevation="2" type="submit">Crear</v-btn>
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
      register(){
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