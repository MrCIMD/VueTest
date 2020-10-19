<template>
    <v-form @submit.prevent="send()" v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field v-model="user.email" :rules="[rules.required,rules.email]" label="Email" outlined></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                    <v-text-field v-model="user.password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show ? 'text' : 'password'" label="Password" outlined @click:append="show = !show"></v-text-field>
                </v-col>
                <v-col class="py-0 text-left" v-if="error.err">
                    <span class="red--text">{{ error.msg }}</span>
                </v-col>
                <v-col cols="12" md="12">
                    <p class="text-left"><router-link to="/auth/register" v-if="context == 'login'">¿Aún no tiene cuenta?</router-link></p>
                    <p class="text-left"><router-link to="/" v-if="context == 'login'">¿Olvido su contraseña?</router-link></p>
                    <p class="text-left"><router-link to="/auth/login" v-if="context == 'register'">¿Ya tiene cuenta?</router-link></p>
                </v-col>
            </v-row>
            <v-btn color="primary" type="submit" elevation="2" v-if="context == 'login'">Entrar</v-btn>
            <v-btn color="primary" type="submit" elevation="2" v-if="context == 'register'">Crear</v-btn>
        </v-container>
    </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { User } from '../interfaces/user.interface';
import { mapActions } from 'vuex';
import router from '../router';

@Component({
    methods: { ...mapActions(['login', 'register']) }
})
export default class FormAuth extends Vue {
    @Prop({required: true}) readonly context: string;

    private valid = false;
    private show = false;
    private user: User = { email: '', password: ''};
    private error = { err: false, msg: '' };
    private rules =  {
      required: (v: any) => !!v || 'Required.',
      email: (v: any) => /.+@.+/.test(v) || 'E-mail must be valid.',
      min: (v: any) => v.length >= 8 || 'The password must have more than 8 characters' };

    public async send(){
        if (!this.valid) {
            this.error.err = true;
            this.error.msg = 'Form not valid';
            return;
        }

        switch (this.context) {
            case 'login':
                this.error = await this.login(this.user);
                break;

            case 'register':
                this.error = await this.register(this.user);
                break;
        
            default:
                break;
        }

        if (this.error.err) { return; }
        router.push('/dashboard');
    }
}
</script>

<style scoped>
    .py-0 {
        padding: 0 12px;
    }
</style>
