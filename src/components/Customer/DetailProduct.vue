<template>
    <v-container>
        <v-spacer></v-spacer>
        <div class="text-center">
            <img :src="'https://sitohhang.com/caudex_backend/public/images/' + book.book_cover" style="max-width:300px; max-height: 400px; min-width: 300px; min-height: 400px; object-fit: cover;">
        </div>
        <v-card class="mt-4">
            <v-card-title>
                {{ book.book_title }}
            </v-card-title>
            <v-rating class="ml-2" :value="book.book_rating" color="orange" dense half-increments readonly size="30">
            </v-rating>
            <v-card-actions>
                <v-btn color="red" text class="mr-4"
                    :href="'https://sitohhang.com/caudex_backend/public/api/pdf/' + book.book_file + '/' + JSON.parse(window.atob(router.currentRoute.params.user)).id + '/' + book.id">
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
                                        <v-text-field v-model="formReview.reviews_comment" label="Review"
                                            required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        Rating
                                        <span class="grey--text text--lighten-2 text-caption mr-2">
                                            ({{ formReview.reviews_rating }})
                                        </span>
                                        <v-rating v-model="formReview.reviews_rating" color="yellow darken-3"
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
                                <v-btn color="blue darken-1" text @click="addReviewProcess">
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
                        <v-col>
                            <div class="ml-4">Year</div>
                        </v-col>
                        <v-col>{{ book.book_year }}</v-col>
                    </v-row>
                    <hr>
                    <v-row>
                        <v-col>
                            <div class="ml-4">Author</div>
                        </v-col>
                        <v-col>{{ book.author_name }}</v-col>
                    </v-row>
                    <hr>
                    <v-row>
                        <v-col>
                            <div class="ml-4">Publisher</div>
                        </v-col>
                        <v-col>{{ book.publisher_name }}</v-col>
                    </v-row>
                    <hr>
                    <v-row>
                        <v-col>
                            <div class="ml-4">Category</div>
                        </v-col>
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
                <v-col v-for="review in reviews" :key="n" cols="12">
                    <v-card>
                        <v-row>
                            <v-col cols="1">
                                <v-avatar class="ml-4">
                                    <img :src="'https://sitohhang.com/caudex_backend/public/images/' + review.user_photo">
                                </v-avatar>
                            </v-col>
                            <v-col cols="6" class="mt-3" align="left">
                                {{ review.user_name }}
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <div class="ml-4">
                                    {{ review.reviews_date }}
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <div class="ml-4">
                                    <v-rating v-model="review.reviews_rating" color="yellow darken-3"
                                        background-color="grey darken-1" readonly size="22" half-increments dense
                                        align="left">
                                    </v-rating>
                                </div>
                            </v-col>
                        </v-row>
                        <v-card-text>
                            {{ review.reviews_comment }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios';
import router from '@/router';
import { onMounted, ref } from "vue";
import toastr from 'toastr';
export default {
    data: () => ({
        router,
        window,
        show: false,
        reviewDialog: false,
        formReview: {
            reviews_comment: '',
            reviews_rating: 0,
        },
    }),
    setup() {
        let book = ref([])
        let reviews = ref([])
        onMounted(() => {
            axios.get('https://sitohhang.com/caudex_backend/public/api/books/' + router.currentRoute.params.book, {
                headers: {
                    Authorization: "Bearer " + router.currentRoute.params.access_token,
                },
            })
                .then((response) => {
                    book.value = response.data.data
                    axios.get('https://sitohhang.com/caudex_backend/public/api/Reviews/' + response.data.data.id, {
                        headers: {
                            Authorization: "Bearer " + router.currentRoute.params.access_token,
                        },
                    })
                        .then((responseReviews) => {
                            reviews.value = responseReviews.data.data
                        })
                })
        })
        return {
            book,
            reviews
        }
    },
    methods: {
        addReviewProcess() {
            this.formReview.reviews_book = this.book.id
            this.formReview.reviews_user = JSON.parse(window.atob(router.currentRoute.params.user)).id
            axios
                .post(
                    "https://sitohhang.com/caudex_backend/public/api/Reviews",
                    this.formReview,
                    {
                        headers: {
                            Authorization: "Bearer " + router.currentRoute.params.access_token,
                        },
                    }
                )
                .then(() => {
                    axios.get('https://sitohhang.com/caudex_backend/public/api/Reviews/' + this.book.id, {
                        headers: {
                            Authorization: "Bearer " + router.currentRoute.params.access_token,
                        },
                    })
                        .then((responseReviews) => {
                            this.reviews = responseReviews.data.data
                        })
                    toastr.success('Review Added!')
                    this.reviewDialog = false
                    window.location.reload()
                });
        }
    }
}
</script> 