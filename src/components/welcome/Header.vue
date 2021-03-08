<template>
    <v-app-bar
    app
      color="dark"
      dense
      dark
    >
    <v-toolbar-title>CMStock Workshop V{{ version }}</v-toolbar-title>
      <v-spacer></v-spacer>
    <span> สวีดัก  {{ $store.getters["username"] |  capitalize }}</span>
    <v-btn icon @click="onClickLogOff">
      <v-icon>mdi-export</v-icon>
    </v-btn>


    </v-app-bar>
</template>

<script>
export default {
  name:"Header",
      computed: {
      version(){
        return "4.5.11"
      },
     
    },
    methods: {
      onClickLogOff(){
        this.$store.dispatch('doLogout')
      }
    }

}
</script>

<style>

</style>