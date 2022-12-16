<template>
    <v-navigation>
        <v-main class="ml-auto">
            <div class="text-center">
                <h4>Welcome to CauDex</h4>
            </div>
            <v-container>
                <v-row>
                    <v-col v-for="n in 4" :key="n" cols="4">
                        <v-hover v-slot="{ hover }">
                            <v-card elevation="1" :class="{ 'on-hover': hover }">
                                <template slot="progress">
                                    <v-progress-linear color="deep-purple" height="10"
                                        indeterminate></v-progress-linear>
                                </template>

                                <v-img height="220" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                                <v-card-title>JUDUL</v-card-title>

                                <v-card-text>
                                    <v-row align="center" class="mx-0">
                                        <v-rating 
                                            :value="4.5" color="#FB8C00" dense half-increments readonly size="30">
                                        </v-rating>
                                    </v-row>
                                </v-card-text>

                                <v-divider class="mx-4"></v-divider>
                                <v-card-title>kategori</v-card-title>

                                <v-card-actions>
                                    <router-link to="DetailProduct">
                                    <v-btn color="#00E676">
                                        Lanjut
                                    </v-btn>
                                </router-link>
                                </v-card-actions>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
            <v-main>
                <router-view></router-view>
              </v-main>
        </v-main>
    </v-navigation>
</template>