<template>
  <v-container>
    <v-row align="center" justify="center" class="pt-10">
      <v-card style="width:400px">
        <v-img class="white--text align-end"  src="@/assets/login_bg.jpg" height="200px">
                
        <v-card-title primary-title>
          Login
        </v-card-title>
        
        </v-img>


        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- username -->
            <v-text-field
              name="username"
              label="Username"
              v-model="account.username"
            />
         
            <!-- password -->
              <v-text-field
              name="password"
              label="Password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              v-model="account.password"

            />
            <v-row class="justify-space-between px-3 pt-5">
              <v-btn text @click.prevent="$router.push('/register')"> Register </v-btn>
              <v-btn  type="submit" @click="$store.state.isLogged = !$store.state.isLogged" color="red"> Login </v-btn>

            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isShowPassword:false,
      account:{
        username:"",
        password:""
      }
    }
  },
  methods: {
    submit(){
      // this.$router.push("/stock") //ไปหน้าStock
      // //  this.$router.push("/deadline") 
      this.$store.dispatch({
        type:"doLogin",
        username: this.account.username,
        password:this.account.password
      })
    }
  },

}
</script>

<style>

</style>