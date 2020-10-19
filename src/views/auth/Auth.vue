<template>
    <v-main class="auth">
        <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="5">
              <router-view></router-view>
            </v-col>
          </v-row>
        </v-container>
    </v-main>
</template>


<style scoped>
.auth {
  height: 100%;
  width: 100%;
  background: url('https://cdn.vuetifyjs.com/images/parallax/material.jpg') center;
  background-size: cover;
}
</style>