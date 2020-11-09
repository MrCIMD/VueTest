<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormAuth from '../../components/FormAuth.vue';

@Component({})
export default class Home extends Vue {
    public model = 0;
    public colors =  [ 'primary', 'secondary', 'yellow darken-2', 'red', 'orange'];
}
</script>