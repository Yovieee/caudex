<template>
	<div class="ma-12">
		<v-form lazy-validation>
			<v-row>
				<v-col>
					<h1 class="mb-6">Update Book</h1>
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
						:src="'https://sitohhang.com/caudex_backend/public/images/' + JSON.parse(window.atob(router.currentRoute.params.book)).book_cover"
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
							>
							</v-autocomplete>
						</v-col>
						<v-col cols="auto">
							<v-icon class="mt-5 ml-3" @click="addCategoryDialog = true"
								>mdi-plus</v-icon
							>
						</v-col>
					</v-row>
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
						<v-btn color="primary" @click="updateBookProcess">Save</v-btn>
						<v-btn color="error" class="ml-4" @click="window.history.back()">Cancel</v-btn>
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
import router from '@/router';
import { ref, onMounted } from 'vue'
import axios from 'axios';
import toastr from 'toastr';
export default {
	name: "AdminBooksUpdateComponent",
	data: () => ({
		addCategoryDialog: false,
		addAuthorDialog: false,
		addPublisherDialog: false,
		changeFile: false,
		document,
		window,
		JSON,
		router,
		birthdatePicker: false,
		formBook: {
			id: JSON.parse(window.atob(router.currentRoute.params.book)).id,
			book_title: JSON.parse(window.atob(router.currentRoute.params.book)).book_title,
			book_year: JSON.parse(window.atob(router.currentRoute.params.book)).book_year,
			book_publisher: JSON.parse(window.atob(router.currentRoute.params.book)).book_publisher,
			book_author: JSON.parse(window.atob(router.currentRoute.params.book)).book_author,
			book_category: JSON.parse(window.atob(router.currentRoute.params.book)).book_category,
			book_cover: null,
			book_file: null
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
		updateBookProcess() {
			let formData = new FormData();
			formData.append("id", this.formBook.id)
			formData.append("book_title", this.formBook.book_title)
			formData.append("book_year", this.formBook.book_year)
			formData.append("book_publisher", this.formBook.book_publisher)
			formData.append("book_author", this.formBook.book_author)
			formData.append("book_category", this.formBook.book_category)
			formData.append("book_file", this.formBook.book_file)
			formData.append("book_cover", this.formBook.book_cover)
			axios.post('https://sitohhang.com/caudex_backend/public/api/books', formData, {
				headers: {
					Authorization:
						"Bearer " + router.currentRoute.params.access_token,
				},
			}).then((response) => {
				toastr.success("Book updated successfully!");
				router.push('/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Books');
			}).catch((error) => {
				toastr.error("Something went wrong");
			})
		}
	},
	setup() {
		let publishers = ref([]);
		let authors = ref([]);
		let categories = ref([]);
		onMounted(() => {
			axios.get('https://sitohhang.com/caudex_backend/public/api/publishers', {
				headers: {
					Authorization:
						"Bearer " + router.currentRoute.params.access_token,
				},
			}).then((response) => {
				publishers.value = response.data.data;
			}).catch((error) => {
				toastr.error("Something went wrong");
			})
			axios.get('https://sitohhang.com/caudex_backend/public/api/authors', {
				headers: {
					Authorization:
						"Bearer " + router.currentRoute.params.access_token,
				},
			}).then((response) => {
				authors.value = response.data.data;
			}).catch((error) => {
				toastr.error("Something went wrong");
			})
			axios.get('https://sitohhang.com/caudex_backend/public/api/categories', {
				headers: {
					Authorization:
						"Bearer " + router.currentRoute.params.access_token,
				},
			}).then((response) => {
				categories.value = response.data.data;
			}).catch((error) => {
				toastr.error("Something went wrong");
			})
		})
		return {
			publishers,
			authors,
			categories,
		};
	}
};
</script>
