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
              <span>new stock router</span>
            </v-btn>
            <v-spacer></v-spacer>
            

         <v-btn
              @click="modelCreate()"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span>new stock model</span>
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
      </v-data-table>
    </v-card>


     <v-dialog v-model="confirmDeleteDlg" max-width="290">
        <v-card>
          <v-card-title class="headline">Confirm Delete</v-card-title>

          <v-card-text class="body">
            Are you sure to delete this product? You cannot restore it after clicking confirm.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="confirmDeleteDlg = false">
              Cancel
            </v-btn>

            <v-btn color="error" text @click="confirmDelete">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


         <v-dialog v-model="modelcreate" max-width="700" max-height="100%">
        <v-card >
          <v-card-title class="headline">Creat Stock</v-card-title>
          <v-card-actions>
          <v-container>
    <v-row class="justify-center">
      <v-col cols="8">
        <v-card class="mx-auto  pa-5" outlined>
          <v-form @submit.prevent="submit" ref="form">
            <v-text-field v-model="product.name" :counter="10" label="Name" required></v-text-field>

            <v-text-field suffix="THB" type="number" v-model="product.price" label="Price" required></v-text-field>

            <v-text-field suffix="PCS" v-model="product.stock" label="Stock" required></v-text-field>

            <input type="file" @change="onFileSelected" />
            <br />
            <img v-if="imageURL" :src="imageURL" style="height: 200px;" class="mt-3" />
            <br />
            <br />
            <v-layout row>
              <v-spacer></v-spacer>
              <v-btn class="mr-4" text @click="modelcreate = false">
                Cancel
              </v-btn>

              <v-btn color="success" type="submit">
                Confirm
              </v-btn>
            </v-layout>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
          </v-card-actions>
        </v-card>
      </v-dialog>
      


  </v-container>
</template>

<script>
import StockCards from "../components/cards/Stockcards";
import api from "../services/api";
export default {
  name: "Stock",
  components: {
    StockCards,
  },
  data() {
    return {
      search: "",
      dialog: false,
      modelcreate:false,
      modeledit:false,
      confirmDeleteDlg:false,
      selectedDelete:"",
      stockArray: [],
      editedIndex: -1,
      product: {
      name: "",
      price: "",
      stock: "",
      image: null
    },
    imageURL: null,
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
  async mounted() {
        this.loadProducts()
  },
  methods: {
        editItem(item){
        this.$router.push(`/stockEdit/${item.id}`)
      },
        deleteItem(item){
        this.selectedDelete = item.id
        this.confirmDeleteDlg = true
      },
        async confirmDelete(){
        await api.deleteProduct(this.selectedDelete)
        this.confirmDeleteDlg = false
        this.loadProducts()
      },
      async loadProducts(){
        let result = await api.getProducts()
        this.stockArray = result.data
      },

      modelCreate(){
        console.log("test")
        this.modelcreate = true;
      },

  

      onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = event => {
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.product.image = event.target.files[0];
    },
    async submit() {
      let formData = new FormData();
      const { name, price, stock } = this.product;
      formData.append("name", name);
      formData.append("stock", stock);
      formData.append("price", price);
      formData.append("image", this.product.image);
      await api.addProduct(formData);
      window.location.reload();
    },
    
  },
};
</script>

<style></style>
