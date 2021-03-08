<template>
  <v-app>
    <Header v-if="$store.state.isLogged"/>
    <Menu v-if="$store.state.isLogged"/>
    <Content/>

  </v-app>
</template>

<script>
import Header from "./components/welcome/Header";
import Menu from "./components/welcome/Menu";
import Content from "./components/welcome/Content";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content
  },
    mounted() {
    this.$store.dispatch({ type: "restoreLogin" });
  },
};
</script>

<style></style>
