<template>
  <v-layout row class="view">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <!-- tool-bar -->
        <v-toolbar fixed color="cyan" dark class="">
          <v-toolbar-side-icon @click="show=!show"></v-toolbar-side-icon>

          <v-toolbar-title>Inbox</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-app>
        <v-content>
          <div v-if="show" class="setting_cont">
            <settings />
          </div>
          
          <router-view/>
        </v-content>
        </v-app>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import settings from '@/components/settings'

export default {
  components: { settings },
  name: 'App',

  data () {
    return {
      show: false
    }
  }
}
</script>
<style lang="scss" scoped>
.v-toolbar__content, .v-toolbar__extension{
  position: fixed!important;
}
.view{
  height: 100vh;
}

</style>

