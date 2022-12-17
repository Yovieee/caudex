<template>
	<div class="ma-12">
		<v-form>
			<v-row>
				<v-col>
					<h1 class="mb-6">Show Book</h1>
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
	</div>
</template>
<script>
import router from '@/router';
export default {
	name: "AdminBooksShowComponent",
	data: () => ({
		document,
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
};
</script>
