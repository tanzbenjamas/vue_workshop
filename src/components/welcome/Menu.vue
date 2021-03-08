<template>
  <v-navigation-drawer
    app
    permanent
    absolute
    dark
    src="@/assets/background_menu.jpg"
  >
    <router-link to="/report" exact>
      <img src="@/assets/555.png" alt="" width="100%" />
    </router-link>

<!-- shaped กลม-->
    <v-list shaped>
      <v-subheader>MENUS</v-subheader>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <!-- {object} -->
        <v-list-item
          class="tile"
          v-for="([icon, text, route], i) in menus"
          :key="i"
          link
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>

          
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu:0,
        menus: [
        ['mdi-apps-box', 'Stock', '/stock'],
      ],
    };
  },
};
</script>

<style></style>
