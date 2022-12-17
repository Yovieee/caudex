<template>
	<div class="ma-12">
		<v-form lazy-validation>
			<v-row>
				<v-col>
					<h1 class="mb-6">Create Book</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<v-file-input
						v-model="formBook.book_cover"
						style="display: none"
						id="imageInput"
						accept="image/*"
						@change="setPreviewImage"
					></v-file-input>
					<div class="text-center">
						<img
							src="../../../assets/book.svg"
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
					<v-row no-gutters>
						<v-col>
							<v-select
								v-model="formBook.book_publisher"
								:items="publishers"
								label="Publisher"
								prepend-icon="mdi-domain"
							>
							</v-select>
						</v-col>
						<v-col cols="auto">
							<v-icon
								class="mt-5 ml-3"
								@click="addPublisherDialog = true"
								>mdi-plus</v-icon
							>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col>
							<v-autocomplete
								v-model="formBook.book_author"
								:items="authors"
								label="Author"
								prepend-icon="mdi-account-supervisor"
								multiple
							>
							</v-autocomplete>
						</v-col>
						<v-col cols="auto">
							<v-icon class="mt-5 ml-3" @click="addAuthorDialog = true"
								>mdi-plus</v-icon
							>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col>
							<v-autocomplete
								v-model="formBook.book_category"
								:items="categories"
								label="Category"
								prepend-icon="mdi-tag"
								multiple
							>
							</v-autocomplete>
						</v-col>
						<v-col cols="auto">
							<v-icon class="mt-5 ml-3" @click="addCategoryDialog = true"
								>mdi-plus</v-icon
							>
						</v-col>
					</v-row>
					<v-file-input
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
						<v-btn
							color="error"
							class="ml-4"
							@click="window.history.back()"
							>Cancel</v-btn
						>
					</div>
				</v-col>
			</v-row>
		</v-form>
		<v-dialog v-model="addPublisherDialog" max-width="290">
			<v-card>
				<v-card-title class="text-h5">
					Create New Publisher
				</v-card-title>

				<v-card-text>
					<v-form>
						<v-text-field
							v-model="formPublisher.publisher_name"
							label="Publisher Name"
						>
						</v-text-field>
						<v-text-field
							v-model="formPublisher.publisher_country"
							label="Country"
						>
						</v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn
						color="green darken-1"
						text
						@click="addPublisherDialog = false"
					>
						Cancel
					</v-btn>

					<v-btn
						color="green darken-1"
						text
						@click="addPublisherDialog = false"
					>
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-dialog v-model="addAuthorDialog" max-width="290">
			<v-card>
				<v-card-title class="text-h5"> Create New Author </v-card-title>

				<v-card-text>
					<v-form>
						<v-text-field
							v-model="formAuthor.author_name"
							label="Author Name"
						>
						</v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn
						color="green darken-1"
						text
						@click="addAuthorDialog = false"
					>
						Cancel
					</v-btn>

					<v-btn
						color="green darken-1"
						text
						@click="addAuthorDialog = false"
					>
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-dialog v-model="addCategoryDialog" max-width="290">
			<v-card>
				<v-card-title class="text-h5"> Create New Category </v-card-title>

				<v-card-text>
					<v-form>
						<v-text-field
							v-model="formCategory.category_name"
							label="Category Name"
						>
						</v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn
						color="green darken-1"
						text
						@click="addCategoryDialog = false"
					>
						Cancel
					</v-btn>

					<v-btn
						color="green darken-1"
						text
						@click="addCategoryDialog = false"
					>
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
export default {
	name: "AdminBooksCreateComponent",
	data: () => ({
		addCategoryDialog: false,
		addAuthorDialog: false,
		addPublisherDialog: false,
		showPassword: false,
		document,
		window,
		birthdatePicker: false,
		publishers: [
			{ text: "Publisher 1", value: 1 },
			{ text: "Publisher 2", value: 2 },
			{ text: "Publisher 3", value: 3 },
		],
		authors: [
			{ text: "Author 1", value: 1 },
			{ text: "Author 2", value: 2 },
			{ text: "Author 3", value: 3 },
		],
		categories: [
			{ text: "Category 1", value: 1 },
			{ text: "Category 2", value: 2 },
			{ text: "Category 3", value: 3 },
		],
		formBook: {
			book_cover: null,
			book_title: null,
			book_year: null,
			book_publisher: null,
			book_author: null,
			book_category: null,
			book_file: null,
		},
		formPublisher: {
			publisher_name: null,
			publisher_country: null,
		},
		formAuthor: {
			author_name: null,
		},
		formCategory: {
			category_name: null,
		},
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
