<template lang="html">
  <v-container>
    <v-row>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCards
          title="TOTAL"
          avatar_ic="mdi-cart-outline"
          avatar_bg="#00a65a"
          subtitle="80"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCards
          title="SOLD-OUT"
          avatar_ic="mdi-flask-empty-outline"
          avatar_bg="#f39c12"
          subtitle="12"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCards
          title="RETURN"
          avatar_ic="mdi-keyboard-return"
          avatar_bg="#dd4b39"
          subtitle="2"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCards
          title="DISCOUNT"
          avatar_ic="mdi-gift-outline"
          avatar_bg="#00c0ef"
          subtitle="200"
        />
      </v-col>
    </v-row>

    <br />
    <v-card>

      <v-data-table :search="search" :headers="headers" :items="stockArray">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <!-- ตัวดัน -->
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/stockCreate')"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span>New Product</span>
            </v-btn>
          </v-toolbar>
        </template>


        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
                  <td>
              <v-img
                v-bind:src="item.image | imageUrl"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="50"
                max-height="50"
              ></v-img>
            </td>
            <td>{{ item.price  }}</td>
            <td>{{ item.stock  }}</td>
                  <td>
              <v-icon class="mr-2" @click="editItem(item)">
                edit
              </v-icon>
              <span class="ma-1"></span>
              <v-icon @click="deleteItem(item)">
                delete
              </v-icon>
            </td>

      
          </tr>
        </template>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import StockCards from "../components/cards/Stockcards";
import Axios from "axios";
export default {
  name: "Stock",
  components: {
    StockCards,
  },
  data() {
    return {
      search: "",
       dialog: false,
      stockArray: [],
      editedIndex: -1,
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Image", value: "image" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Action", value: "action" },
      ],
    };
  },
  mounted() {
    // Axios feed data
    console.log("tanz");
    Axios.get("http://localhost:8081/api/v2/product").then((result) => {
      console.log(result);
      this.stockArray = result.data;
    });
  },
};
</script>

<style></style>
