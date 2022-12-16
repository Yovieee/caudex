<template>
    <v-container class="text-center">
        <h4 class="mb-4">Judul</h4>
        <v-spacer></v-spacer>
        <div class="text-center">
            <img src="@/assets/team/team (3).jpg" style="max-width:800px">
        </div>
        <v-card class="mt-4">
            <v-card-title>
                Judul Buku
            </v-card-title>
            <v-rating :value="4.5" color="#FB8C00" dense half-increments readonly size="30">
            </v-rating>
            <v-card-actions>
                <v-btn color="orange lighten-2" text>
                    Baca
                </v-btn>
                <v-btn color="primary" dark @click="reviewDialog = true">
                    Review
                </v-btn>    
                <v-dialog v-model="reviewDialog" max-width="3000">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Review </span>
                        </v-card-title>
                        <v-form>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field label="Review*" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        Rating
                                        <span class="grey--text text--lighten-2 text-caption mr-2">
                                            ({{ rating }})
                                        </span>
                                        <v-rating v-model="rating" color="yellow darken-3"
                                            background-color="grey darken-1" empty-icon="$ratingFull" half-increments
                                            hover large></v-rating>
                                    </v-col>
                                </v-row>
                                <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="reviewDialog = false">
                                    Close
                                </v-btn>
                                <v-btn type="submit" color="blue darken-1" text @click="reviewDialog = false">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                        Judul
                        <br>Tehun Terbit
                        <br>Kategori
                        <br>Autohor dan Publiser
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        <v-card class="mt-10">
            <v-card-title>
                Rating and Review
            </v-card-title>
            <v-row class="mt-4">
                <v-col v-for="n in 4" :key="n" cols="12">
                    <v-card>
                        <v-row>
                            <v-col cols="1">
                                <v-avatar class="ml-4">
                                    <img src="../../../public/img/icons/ms-icon-310x310.png">
                                </v-avatar>
                            </v-col>
                            <v-col cols="6" class="mt-4" align="left">
                                Blasius Jona Vikarian Skedebebes Mantaps Renyah
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col align="left" class="ml-6 col-sm-3">
                                12 Desember 2020
                            </v-col>
                            <v-col align="left">
                                <v-rating v-model="rating" color="yellow darken-3" background-color="grey darken-1"
                                    readonly size="22" half-increments dense align="left">
                                </v-rating>
                            </v-col>
                        </v-row>
                        <v-card-text>
                            Module Warning (from ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js):
                            (Emitted value instead of an instance of Error) component lists rendered with v-for should
                            have explicit keys. See https://v2.vuejs.org/v2/guide/list.html#key for more info.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        show: false,
        reviewDialog: false,
        rating: 4.3,
    }),
}
</script>


rating
<command>   