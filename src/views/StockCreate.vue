<template lang="html">
  <v-container>
    <v-card class="mx-auto  pa-5" outlined>
      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="product.name"
          :counter="10"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          suffix="THB"
          type="number"
          v-model="product.price"
          label="Price"
          required
        ></v-text-field>

        <v-text-field
          suffix="PCS"
          v-model="product.stock"
          label="Stock"
          required
        ></v-text-field>

        <input @change="onFileSelected" type="file" name="" id="" />
        <br />
        <v-img v-if="imageURL" :src="imageURL" heigth="200px" width="200px"></v-img>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn class="mr-4" @click="cancel">
            Cancel
          </v-btn>
          <v-btn color="success" type="submit">
            Confirm
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "stock-create",
  data: () => ({
    product: {
      name: "",
      price: "",
      stock: "",
      image: null,
    },
    imageURL: null,
  }),

  methods: {
    onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      //update
      this.product.image = event.target.files[0];
    },
    submit() {
      alert(JSON.stringify(this.product));
    },
        cancel() {
      this.$router.back();
    }
  },
};
</script>

<style></style>
