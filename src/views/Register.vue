<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width:400px">
        <v-img class="white--text align-end"  src="@/assets/maxresdefault.jpg" height="200px">
                
        <v-card-title primary-title>
          Register
        </v-card-title>
        
        </v-img>


        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- username -->
            <v-text-field
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
              :rules="usernameRules"
            />
         
            <!-- password -->
              <v-text-field
              name="password"
              label="Password"
              id="password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              v-model="account.password"
              :rules="passwordRules"
            />

            <span>{{account}}</span>

            <v-row class="justify-space-between px-3 pt-5">
              <v-btn text @click.prevent="$router.back()"> Canel </v-btn>
              <v-btn color="red" type="submit"> Register </v-btn>

            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import api from '@/services/api'

export default {

 data() {
    return {
      isShowPassword:false,
      account:{
        username:"",
        password:""
      },
      // vM1 noData
      //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
      usernameRules:[vM1=>!!vM1 || "Username is required"],
      passwordRules:[vM1=>!!vM1 || "Password is required",vM2=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(vM2) || "Minimum eigth character"]

    }
  },
  methods: {
    async submit(){
      // alert(JSON.stringify(this.account))
      await api.register(this.account)
    }
  },

}
</script>

<style>

</style>