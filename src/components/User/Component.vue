<template>
    <div>
        <v-container fluid style="height: 300px">
            <v-app-bar absolute dark src="https://picsum.photos/1920/1080?random">
                <template v-slot:img="{ props }">
                    <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"></v-img>
                </template>
                <v-avatar>
                    <img src="@/assets/logo.png">
                </v-avatar>
                CAUDEX
                <v-spacer></v-spacer>
                <v-menu offset-y color="#F44336">
                    <template v-slot:activator="{ on }">
                      <v-avatar color="#546E7A" size="35" class="ml-auto" v-on="on" style="cursor: pointer"></v-avatar>
                    </template>
                    <v-list>
                      <p class="text-center mt-2 mb-4">Nama Pengguna</p>
                      <p class="text-center mb-2">Administrator</p>
                      <v-divider/>
                      <v-list-item link>
                        <v-list-item-icon>
                          <v-icon>mdi-cog</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>Settings</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item link>
                        <v-list-item-icon>
                          <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>

                
            </v-app-bar>
        </v-container>
        <v-container>
            <!-- <v-row justify="justify">
                <v-menu bottom min-width="200px" rounded offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn icon x-large v-on="on">
                            <v-avatar color="brown" size="48">
                                <span class="white--text text-h5">{{ user.initials }}</span>
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-list-item-content class="justify-center">
                            <div class="mx-auto text-center">
                                <v-avatar color="brown">
                                    <span class="white--text text-h5">{{ user.initials }}</span>
                                </v-avatar>
                                <h3>{{ user.fullName }}</h3>
                                <p class="text-caption mt-1">
                                    {{ user.email }}
                                </p>
                                <v-divider class="my-3"></v-divider>
                                <v-btn depressed rounded text>
                                    Edit Account
                                </v-btn>
                                <v-divider class="my-3"></v-divider>
                                <v-btn depressed rounded text>
                                    Exit
                                </v-btn>
                            </div>
                        </v-list-item-content>
                    </v-card>
                </v-menu>
            </v-row> -->
        </v-container>
        
    </div>


</template>

<script>
export default {
    data: () => ({
        user: {
            initials: 'JD',
            fullName: 'John Doe',
            email: 'john.doe@doe.com',
        },
    }),
}
</script>
 