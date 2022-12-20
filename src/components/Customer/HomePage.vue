<template>
	<v-container>
		<v-main class="ml-auto">
			<div class="text-center">
				<h4>Welcome to CAUDEX</h4>
			</div>
			<v-container>
				<v-row>
					<v-col v-for="item in books" :key="item.id" cols="2">
						<v-card elevation="1">
							<v-img
								height="220"
								:src="
									'https://sitohhang.com/caudex_backend/public/images/' +
									item.book_cover
								"
							></v-img>
							<v-card-title style="font-size: 0.8em">{{
								item.book_title.length > 17
									? item.book_title.substring(0, 17) + "..."
									: item.book_title
							}}</v-card-title>
							<v-card-text>
								<v-rating
									:value="parseFloat(item.book_rating)"
									color="#FB8C00"
									dense
									half-increments
									readonly
									size="20"
								>
								</v-rating>
								<div class="mt-4" style="font-size: 0.8em">
									{{ item.category_name }}
								</div>

								<hr />
							</v-card-text>

							<v-card-actions>
									<v-btn class="ml-2 mb-2" dark color="red" :to="'/Customer/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/DetailProduct/' + item.id" :disabled="JSON.parse(window.atob(router.currentRoute.params.user)).user_membership || item.book_availability == '1'">
										Explore
									</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
			<v-main>
				<router-view></router-view>
			</v-main>
		</v-main>
	</v-container>
</template>
<script>
import axios from "axios";
import router from "@/router";
import { onMounted, ref } from "vue";
export default {
	name: "HomePage",
	setup() {
		let books = ref([])
		onMounted(() => {
			axios
				.get("https://sitohhang.com/caudex_backend/public/api/books", {
					headers: {
						Authorization:
							"Bearer " + router.currentRoute.params.access_token,
					},
				})
				.then((response) => {
					books.value = response.data.data
				});
		});
		return {
			books,
            router,
			window
		};
	},
};
</script>
