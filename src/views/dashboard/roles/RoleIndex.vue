<template>
  <v-simple-table fixed-header height="500px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Created At</th>
          <th class="text-left">Updated At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in roles" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.createdAt }}</td>
          <td>{{ item.updatedAt }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormAuth from '../../components/FormAuth.vue';
import { mapActions, mapState } from 'vuex';

@Component({
    methods: { ...mapActions(['getRoles']) },
    computed: {...mapState(['roles'])},
})
export default class RoleIndex extends Vue {
  created() { this.getRoles(); }
}
</script>