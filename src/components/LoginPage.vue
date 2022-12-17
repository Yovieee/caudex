<template>
   <v-navigation>
      <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
         <div class="container">
            <div class="row">
               <div class="col-14">
                  <nav class="main-nav">
                     <router-link to="../" class="logo">
                        <h4>Cau<span>Dex</span></h4>
                     </router-link>
                     <ul class="nav">
                        <v-btn class="main-red-button" rounded style="margin-right:10px;" color="#2196F3" dark
                           to="../login">Login</v-btn>
                        <v-btn class="main-red-button" rounded color="#F44336" dark mt="6"
                           to="../register">Register</v-btn>
                     </ul>
                     <a class='menu-trigger'>
                        <span>Menu</span>
                     </a>
                  </nav>
               </div>
            </div>
         </div>
      </header>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-main>
         <v-app id="inspire">
            <span class="bg"></span>
            <v-content>
               <v-container fluid fill-height>
                  <v-layout align-center justify-center>
                     <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                           <v-toolbar dark color="blue">
                              <v-toolbar-title>Login</v-toolbar-title>
                           </v-toolbar>
                           <v-card-text>
                              <v-form>
                                 <v-text-field prepend-icon="mdi-account" name="login" label="Login"
                                    type="text"></v-text-field>
                                 <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password"
                                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="() => (value = !value)"
                                    :type="value ? 'password' : 'text'"></v-text-field>
                              </v-form>
                           </v-card-text>
                           <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary" to="/">Login</v-btn>
                           </v-card-actions>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-container>
            </v-content>
         </v-app>
      </v-main>
   </v-navigation>
</template>

<script>
export default {
   data() {
      return {
         value: String,
      };
   },
};
</script>

<style>
.bg {
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background: url( '@/assets/bg.jpg') no-repeat center center;
   background-size: cover;
   background-color: red;
   transform: scale(1.1);
 }
</style>
  