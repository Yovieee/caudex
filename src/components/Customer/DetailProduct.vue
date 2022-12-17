<template>
    <v-container>
        <v-spacer></v-spacer>
        <div class="text-center">
            <img src="@/assets/team/team (3).jpg"
                style="max-width:300px; max-height: 400px; min-width: 300px; min-height: 400px; object-fit: cover;">
        </div>
        <v-card class="mt-4">
            <v-card-title>
                Judul Buku
            </v-card-title>
            <v-rating class="ml-2" :value="4.5" color="orange" dense half-increments readonly size="30">
            </v-rating>
            <v-card-actions>
                <v-btn color="red" text class="mr-4">
                    Read
                </v-btn>
                <v-btn color="primary" dark @click="reviewDialog = true">
                    Review
                </v-btn>
                <v-dialog v-model="reviewDialog" max-width="3000">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Review</span>
                        </v-card-title>
                        <v-form>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="formReview.review_comment" label="Review"
                                            required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        Rating
                                        <span class="grey--text text--lighten-2 text-caption mr-2">
                                            ({{ formReview.review_rating }})
                                        </span>
                                        <v-rating v-model="formReview.review_rating" color="yellow darken-3"
                                            background-color="grey darken-1" empty-icon="$ratingFull" half-increments
                                            hover large></v-rating>
                                    </v-col>
                                </v-row>
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
                    <v-row>
                        <v-col><div class="ml-4">Year</div></v-col>
                        <v-col>{{ book.book_year }}</v-col>
                    </v-row>
                    <hr>
                    <v-row>
                        <v-col><div class="ml-4">Author</div></v-col>
                        <v-col>{{ book.author_name }}</v-col>
                    </v-row>
                    <hr>
                    <v-row>
                        <v-col><div class="ml-4">Publisher</div></v-col>
                        <v-col>{{ book.publisher_name }}</v-col>
                    </v-row>
                    <hr>
                    <v-row>
                        <v-col><div class="ml-4">Category</div></v-col>
                        <v-col>{{ book.category_name }}</v-col>
                    </v-row>
                </div>
            </v-expand-transition>
        </v-card>
        <div>
            <br>
            <h4>
                Review
            </h4>
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
                            <v-col>
                                <div class="ml-4">
                                    12 Desember 2020
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <div class="ml-4">
                                    <v-rating v-model="rating" color="yellow darken-3" background-color="grey darken-1"
                                        readonly size="22" half-increments dense align="left">
                                    </v-rating>
                                </div>
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
        </div>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        show: false,
        reviewDialog: false,
        rating: 4.3,
        book: {
            book_title: 'The Lord of the Rings',
            author_name: 'J.R.R. Tolkien',
            publisher_name: 'Allen & Unwin',
            book_year: 1954,
            category_name: 'Fantasy',
        },
        formReview: {
            review_comment: '',
            review_rating: 0,
        },
    }),
}
</script>


rating
<command>   