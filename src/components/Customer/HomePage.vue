<template>
	<v-container>
		<v-main class="ml-auto">
			<div class="text-center">
				<h4>Welcome to CAUDEX</h4>
			</div>
			<v-container>
				<v-row>
					<v-col v-for="item in items" :key="item.id" cols="2">
						<v-card elevation="1">
							<v-img
								height="220"
								:src="item.book_cover"
							></v-img>

							<v-card-title style="font-size:.8em">{{ item.book_title.length > 17 ? item.book_title.substring(0, 17)+'...' : item.book_title }}</v-card-title>

							<v-card-text>
								<v-rating
									:value="item.book_rating"
									color="#FB8C00"
									dense
									half-increments
									readonly
									size="20"
								>
								</v-rating>
								<div class="mt-4" style="font-size:.8em">{{ item.category_name }}</div>

								<hr />
							</v-card-text>

							<v-card-actions>
								<router-link to="DetailProduct">
									<v-btn class="ml-2 mb-2" dark color="red">
										Explore
									</v-btn>
								</router-link>
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
export default {
	name: "HomePage",
	data() {
		return {
			items: [
                {
                    id: 1,
                    book_title: "Ini Sebuah Kisah Tentang",
                    book_cover: "https://picsum.photos/200/300",
                    book_rating: 4.5,
                    category_name: "Fiction"
                },
                {
                    id: 2,
                    book_title: "Kuliah",
                    book_cover: "https://picsum.photos/200/300",
                    book_rating: 4.5,
                    category_name: "Fiction"
                },
                {
                    id: 3,
                    book_title: "Informatika",
                    book_cover: "https://picsum.photos/200/300",
                    book_rating: 4.5,
                    category_name: "Fiction"
                },
                {
                    id: 4,
                    book_title: "Sangat Menyenangkan",
                    book_cover: "https://picsum.photos/200/300",
                    book_rating: 4.5,
                    category_name: "Fiction"
                },
                {
                    id: 5,
                    book_title: "Rasanya Seperti Anda Menjadi Orang Yang Paling Bahagia Di Dunia",
                    book_cover: "https://picsum.photos/200/300",
                    book_rating: 4.5,
                    category_name: "Fiction"
                },
                {
                    id: 6,
                    book_title: "Maka Dari Itu",
                    book_cover: "https://picsum.photos/200/300",
                    book_rating: 4.5,
                    category_name: "Fiction"
                },
                {
                    id: 7,
                    book_title: "Ayo Kita Kuliah",
                    book_cover: "https://picsum.photos/200/300",
                    book_rating: 4.5,
                    category_name: "Fiction"
                },
                {
                    id: 8,
                    book_title: "Di Program Studi Informatika",
                    book_cover: "https://picsum.photos/200/300",
                    book_rating: 4.5,
                    category_name: "Fiction"
                },
            ]
		};
	},
};
</script>
