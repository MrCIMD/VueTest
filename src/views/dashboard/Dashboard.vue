<template>
    <v-card class="layout">
      
      <v-app-bar color="blue" dark dense>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-title>Perfil</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout()">
              <v-list-item-title>Cerrar sesión</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="blue--text text--accent-4" 
            v-for="(option, i) in sideMenu"
            :key="i">

            <router-link :to="option.rute">
              <v-list-item>
                <v-list-item-icon>
                    <v-icon>{{option.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{option.name}}</v-list-item-title>
              </v-list-item>
            </router-link>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      
      <div class="content">
        <router-view></router-view>
      </div>
    </v-card>
</template>

<script lang="ts">
import router from '@/router';
import { Component, Vue } from 'vue-property-decorator';
import { mapMutations } from 'vuex';

@Component({
  methods: {
    ...mapMutations(['destroyToken'])
  }
})
export default class Dashboard extends Vue {
  public sideMenu: any[] = [
    { name: 'Inicio', rute: '/dashboard/home', icon: 'mdi-home' },
    { name: 'Usuarios', rute: '/dashboard/users', icon: 'mdi-account' },
    { name: 'Roles', rute: '/dashboard/roles', icon: 'mdi-account-cash' }
  ];
  public drawer: boolean = false;
  public group = null;

  public logout() {
    this.destroyToken();
    router.push('/')
  }
}
</script>

<style scoped>
  .layout {
    height: 100%;
  }
  .content {
    padding: 1rem;
  }
</style>