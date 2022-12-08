<template>
    <v-navigation>
        <v-card>
            <v-app-bar absolute  dark src="https://picsum.photos/1920/1080?random">
                <template v-slot:img="{ props }">
                    <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
                    ></v-img>
                </template>
            <v-avatar>
                <img src="@/assets/logo.png">
            </v-avatar>
            <v-btn class="pa-0" to="../home" color="#43a047  dark" style="margin-left:10px; background-color: transparent !important;">CAUDEX</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="ma-2" style="margin-right:10px;" color="#43a047" to="../login">Login</v-btn>
            <v-btn class="ma-2" color="grey" mt="6" to="../register">Register</v-btn>
        </v-app-bar>
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
                        <v-card class="elevation-12" >
                           <v-toolbar dark color="green">
                              <v-toolbar-title>Login</v-toolbar-title>
                           </v-toolbar>
                           <v-card-text>
                              <v-form>
                                 <v-text-field
                                    prepend-icon="mdi-account"
                                    name="login"
                                    label="Login"
                                    type="text"
                                 ></v-text-field>
                                 <v-text-field
                                    id="password"
                                    prepend-icon="mdi-lock"
                                    name="password"
                                    label="Password"
                                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="() => (value = !value)"
                                    :type="value ? 'password' : 'text'"
                                 ></v-text-field>

                                 <!-- <FormCheckRadio
                                    name="remember"
                                    label="Remember"
                                    :input-value="true"
                                 /> -->
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
  