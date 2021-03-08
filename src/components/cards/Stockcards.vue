<template>
  <v-card id="stock_cards">
     <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline md-1">{{title}}</v-list-item-title>
        <v-list-item-subtitle class="title">{{subtitle}}</v-list-item-subtitle>
      </v-list-item-content>

         <v-list-item-icon title size="80" :color="avatar_bg">
            <v-icon>{{avatar_ic}}</v-icon>
          </v-list-item-icon>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
name:"StockCards",
props: ["title", "subtitle", "avatar_bg", "avatar_ic"],

data() {
    return {
        
    }
},
}
</script>

<style>

</style>