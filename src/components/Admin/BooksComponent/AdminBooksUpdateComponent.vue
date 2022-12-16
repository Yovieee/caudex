<template>
	<div class="ma-12">
		<v-form lazy-validation>
			<v-row>
				<v-col>
					<h1 class="mb-6">Update Books</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<v-file-input
						:v-model="typeof(formBook.book_cover) == 'string' ? null : formBook.book_cover"
						style="display: none"
						id="imageInput"
						accept="image/*"
						@change="setPreviewImage"
					></v-file-input>
					<div class="text-center">
						<img
							:src="formBook.book_cover"
							@click="
								document.querySelector('#imageInput').click()
							"
							id="imagePreview"
							style="
								cursor: pointer;
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
						v-model="formBook.book_title"
						label="Title"
						prepend-icon="mdi-format-title"
					>
					</v-text-field>
					<v-text-field
						v-model="formBook.book_year"
						label="Year"
						prepend-icon="mdi-calendar"
					>
					</v-text-field>
					<v-select
						v-model="formBook.book_publisher"
						:items="publishers"
						label="Publisher"
						prepend-icon="mdi-domain"
					>
					</v-select>
					<v-autocomplete
						v-model="formBook.book_author"
						:items="authors"
						label="Author"
						prepend-icon="mdi-account-supervisor"
						multiple
					>
					</v-autocomplete>
					<v-autocomplete
						v-model="formBook.book_category"
						:items="categories"
						label="Category"
						prepend-icon="mdi-tag"
						multiple
					>
					</v-autocomplete>
					<v-btn class="ma-2" v-if="!changeFile" @click="changeFile=true">Change File</v-btn>
					<v-file-input
						v-if="changeFile"
						v-model="formBook.book_file"
						label="PDF File"
						prepend-icon="mdi-file-pdf-box"
						accept="application/pdf"
					></v-file-input>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<div class="text-right">
						<v-btn color="primary" type="submit">Save</v-btn>
						<v-btn color="error" class="ml-4">Cancel</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-form>
	</div>
</template>
<script>
import router from '@/router';

export default {
	name: "AdminBooksUpdateComponent",
	data: () => ({
		changeFile: false,
		document,
		birthdatePicker: false,
		publishers: [{text: "Publisher 1", value: 1}, {text: "Publisher 2", value: 2}, {text: "Publisher 3", value: 3}],
		authors: [{text: "Author 1", value: 1}, {text: "Author 2", value: 2}, {text: "Author 3", value: 3}],
		categories: [{text: "Category 1", value: 1}, {text: "Category 2", value: 2}, {text: "Category 3", value: 3}],
		formBook: JSON.parse(window.atob(router.currentRoute.params.book)),
	}),
	methods: {
		setPreviewImage() {
			const [file] = document.querySelector("#imageInput").files;
			if (file) {
				document.querySelector("#imagePreview").src =
					URL.createObjectURL(file);
			}
		},
	},
};
</script>
