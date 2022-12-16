<template>
   <v-navigation>
      <v-card>
         <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div class="container">
               <div class="row">
                  <div class="col-12">
                     <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <router-link to="../home" class="logo">
                           <h4>Cau<span>Dex</span></h4>
                        </router-link>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                           <v-btn class="main-red-button" rounded style="margin-right:10px;" color="#2196F3" dark
                              to="../login">Login</v-btn>
                           <v-btn class="main-red-button" rounded color="#F44336" dark mt="6"
                              to="../register">Register</v-btn>
                        </ul>
                        <a class='menu-trigger'>
                           <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                     </nav>
                  </div>
               </div>
            </div>
         </header>
         <!-- ***** Header Area End ***** -->
         <v-container style="height: 8vh;"></v-container>
      </v-card>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-main>
         <v-app id="inspire">
            <v-content>
               <v-container fluid fill-height>
                  <v-layout align-center justify-center>
                     <v-flex xs12 sm8 md4>
                        <v-card>
                           <v-toolbar dark color="green">
                              <v-toolbar-title>Register</v-toolbar-title>
                           </v-toolbar>
                           <v-card-text>
                              <v-form>
                                 <!--Foto-->
                                 <v-file-input counter label="Foto" help="Max 500kb" prepend-icon="mdi-camera"
                                    accept="image/png, image/jpeg, image/bmp" show size></v-file-input>

                                 <!--Name-->
                                 <v-text-field prepend-icon="mdi-account" name="Nama" label="Name"
                                    type="text"></v-text-field>

                                 <!--Tanggal Lahir-->
                                 <v-text-field prepend-icon="mdi-calendar" name="date" label="date"
                                    type="date"></v-text-field>

                                 <!--Email-->
                                 <v-text-field prepend-icon="mdi-account" name="email" label="Email"
                                    type="text"></v-text-field>

                                 <!--Password-->
                                 <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password"
                                    :append-icon="value ? 'mdi-eye-off' : 'mdi-eye'"
                                    @click:append="() => (value = !value)"
                                    :type="value ? 'password' : 'text'"></v-text-field>

                                 <!--Validasi Password-->
                                 <v-text-field id="passwordvalidasi" prepend-icon="mdi-lock" name="passwordvalidasi"
                                    label="Confirm Password" :append-icon="value ? 'mdi-eye-off' : 'mdi-eye'"
                                    @click:append="() => (value = !value)"
                                    :type="value ? 'passwordvalidasi' : 'text'"></v-text-field>


                              </v-form>
                           </v-card-text>
                           <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary" to="/">Register</v-btn>
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
