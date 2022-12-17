<template>
	<div class="ma-12">
		<v-form>
			<v-row>
				<v-col>
					<h1 class="mb-6">Show Book</h1>
				</v-col>
				<v-col align="right">
					<v-btn
						class="ma-2"
						color="primary"
						link
						tag="router-link"
						:to="
							'/Admin/Books/Update/' +
							router.currentRoute.params.book
						"
						><v-icon>mdi-pencil</v-icon></v-btn
					>
					<v-btn
						class="ma-2"
						color="error"
						@click="deleteDialog = true"
						><v-icon>mdi-delete</v-icon></v-btn
					>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<div class="text-center">
						<img
							:src="book.book_cover"
							style="
								max-width: 300px;
								max-height: 400px;
								min-width: 300px;
								min-height: 400px;
								object-fit: cover;
							"
						/>
					</div>
				</v-col>
				<v-col>
                    <v-text-field
						v-model="book.book_title"
						label="Title"
						prepend-icon="mdi-format-title"
						readonly
					>
					</v-text-field>
					<v-text-field
						v-model="book.book_year"
						label="Year"
						prepend-icon="mdi-calendar"
						readonly
					>
					</v-text-field>
					<v-select
						v-model="book.book_publisher"
						:items="publishers"
						label="Publisher"
						prepend-icon="mdi-domain"
						readonly
					>
					</v-select>
					<v-autocomplete
						v-model="book.book_author"
						:items="authors"
						label="Author"
						prepend-icon="mdi-account-supervisor"
						multiple
						readonly
					>
					</v-autocomplete>
					<v-autocomplete
						v-model="book.book_category"
						:items="categories"
						label="Category"
						prepend-icon="mdi-tag"
						multiple
						readonly
					>
					</v-autocomplete>
				</v-col>
			</v-row>
			<v-row>
                <v-data-table :headers="headers" :items="listOfReviews">
                </v-data-table>
            </v-row>
		</v-form>
		<v-dialog v-model="deleteDialog" max-width="320" persistent>
			<v-card>
				<v-card-title class="text-h5">
					Are you sure you want to delete this book?
				</v-card-title>
				<v-container>
					<v-row align="center">
						<v-col cols="3">
							<v-img
								:src="book.book_cover"
								max-width="50"
								max-height="50"
								class="ml-4"
							>
							</v-img>
						</v-col>
						<v-col>{{ book.book_title }}</v-col>
					</v-row>
				</v-container>
				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="green darken-1" text @click="deleteDialog = false">
						Cancel
					</v-btn>

					<v-btn color="green darken-1" text @click="deleteProcess()">
						Yes
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
import router from '@/router';
export default {
	name: "AdminBooksShowComponent",
	data: () => ({
		deleteDialog: false,
		document,
		router,
		birthdatePicker: false,
		book: JSON.parse(window.atob(router.currentRoute.params.book)),
        headers: [
                { text: 'ID', value: 'id' },
                { text: 'User', value: 'user_name' },
                { text: 'Date', value: 'review_date'},
                { text: 'Rating', value: 'review_rating'},
                { text: 'Comment', value: 'review_comment'}
            ],
        listOfReviews: [
            {
                id: 1,
                user_name: 'John Doe',
                review_date: '2020-01-01',
                review_rating: 5,
                review_comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.'
            },
            {
                id: 2,
                user_name: 'Jane Doe',
                review_date: '2020-01-01',
                review_rating: 5,
                review_comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.'
            },
            {
                id: 3,
                user_name: 'John Doe',
                review_date: '2020-01-01',
                review_rating: 5,
                review_comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.'
            },
            {
                id: 4,
                user_name: 'Jane Doe',
                review_date: '2020-01-01',
                review_rating: 5,
                review_comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.'
            },
            {
                id: 5,
                user_name: 'John Doe',
                review_date: '2020-01-01',
                review_rating: 5,
                review_comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl eu nunc.'
            },
        ]
	}),
	methods: {
		deleteProcess() {
			this.closeDeleteDialog();
			//to do delete process
		},
	},
};
</script>
