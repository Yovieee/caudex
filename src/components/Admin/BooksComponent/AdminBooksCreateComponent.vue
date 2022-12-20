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
					<v-file-input v-model="formBook.book_cover" style="display: none" id="imageInput" accept="image/*"
						@change="setPreviewImage"></v-file-input>
					<div class="text-center">
						<img src="../../../assets/book.svg" @click="
							document.querySelector('#imageInput').click()
						" id="imagePreview" style="
								cursor: pointer;
								max-width: 300px;
								max-height: 400px;
								min-width: 300px;
								min-height: 400px;
								object-fit: cover;
							" />
					</div>
				</v-col>
				<v-col>
					<v-text-field v-model="formBook.book_title" label="Title" prepend-icon="mdi-format-title">
					</v-text-field>
					<v-text-field v-model="formBook.book_year" label="Year" prepend-icon="mdi-calendar">
					</v-text-field>
					<v-row no-gutters>
						<v-col>
							<v-select v-model="formBook.book_publisher" :items="publishers" label="Publisher"
								prepend-icon="mdi-domain">
							</v-select>
						</v-col>
						<v-col cols="auto">
							<v-icon class="mt-5 ml-3" @click="addPublisherDialog = true">mdi-plus</v-icon>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col>
							<v-autocomplete v-model="formBook.book_author" :items="authors" label="Author"
								prepend-icon="mdi-account-supervisor">
							</v-autocomplete>
						</v-col>
						<v-col cols="auto">
							<v-icon class="mt-5 ml-3" @click="addAuthorDialog = true">mdi-plus</v-icon>
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col>
							<v-autocomplete v-model="formBook.book_category" :items="categories" label="Category"
								prepend-icon="mdi-tag">
							</v-autocomplete>
						</v-col>
						<v-col cols="auto">
							<v-icon class="mt-5 ml-3" @click="addCategoryDialog = true">mdi-plus</v-icon>
						</v-col>
					</v-row>
					<v-file-input v-model="formBook.book_file" label="PDF File" prepend-icon="mdi-file-pdf-box"
						accept="application/pdf"></v-file-input>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<div class="text-right">
						<v-btn color="primary" @click="createBookProcess">Save</v-btn>
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
						<v-text-field v-model="formPublisher.publisher_name" label="Publisher Name">
						</v-text-field>
						<v-text-field v-model="formPublisher.publisher_country" label="Country">
						</v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="green darken-1" text @click="addPublisherDialog = false">
						Cancel
					</v-btn>

					<v-btn color="green darken-1" text @click="createPublisherProcess">
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
						<v-text-field v-model="formAuthor.author_name" label="Author Name">
						</v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="green darken-1" text @click="addAuthorDialog = false">
						Cancel
					</v-btn>

					<v-btn color="green darken-1" text @click="createAuthorProcess">
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
						<v-text-field v-model="formCategory.category_name" label="Category Name">
						</v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="green darken-1" text @click="addCategoryDialog = false">
						Cancel
					</v-btn>

					<v-btn color="green darken-1" text @click="createCategoryProcess">
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>
<script>
import toastr from 'toastr';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import router from '@/router';
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
		createBookProcess() {
			if (this.formBook.book_cover == null || this.formBook.book_title == null || this.formBook.book_year == null || this.formBook.book_publisher == null || this.formBook.book_author == null || this.formBook.book_category == null || this.formBook.book_file == null) {
				toastr.error("Please fill all the fields");
			} else {
				let formData = new FormData()
				formData.append('book_cover', this.formBook.book_cover)
				formData.append('book_title', this.formBook.book_title)
				formData.append('book_year', this.formBook.book_year)
				formData.append('book_publisher', this.formBook.book_publisher)
				formData.append('book_author', this.formBook.book_author)
				formData.append('book_category', this.formBook.book_category)
				formData.append('book_file', this.formBook.book_file)
				axios.post('https://sitohhang.com/caudex_backend/public/api/books', formData, {
					headers: {
						Authorization:
							"Bearer " + router.currentRoute.params.access_token,
					},
				}).then((response) => {
					toastr.success("Book successfully created");
					router.push('/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Books');
				}).catch((error) => {
					toastr.error("Something went wrong");
				})
			}
		},
		createAuthorProcess() {
			if (this.formAuthor.author_name == null) {
				toastr.error("Please fill all the fields");
			} else {
				axios.post('https://sitohhang.com/caudex_backend/public/api/authors', this.formAuthor, {
					headers: {
						Authorization:
							"Bearer " + router.currentRoute.params.access_token,
					},
				}).then((response) => {
					toastr.success("Author successfully created");
					this.addAuthorDialog = false;
					axios.get('https://sitohhang.com/caudex_backend/public/api/authors', {
						headers: {
							Authorization:
								"Bearer " + router.currentRoute.params.access_token,
						},
					}).then((response) => {
						this.authors = response.data.data;
					}).catch((error) => {
						toastr.error("Something went wrong");
					})
				}).catch((error) => {
					toastr.error("Something went wrong");
					this.addAuthorDialog = false;
				})
			}
		},
		createPublisherProcess() {
			if (this.formPublisher.publisher_name == null || this.formPublisher.publisher_country == null) {
				toastr.error("Please fill all the fields");
			} else {
				axios.post('https://sitohhang.com/caudex_backend/public/api/publishers', this.formPublisher, {
					headers: {
						Authorization:
							"Bearer " + router.currentRoute.params.access_token,
					},
				}).then((response) => {
					toastr.success("Publisher successfully created");
					this.addPublisherDialog = false;
					axios.get('https://sitohhang.com/caudex_backend/public/api/publishers', {
						headers: {
							Authorization:
								"Bearer " + router.currentRoute.params.access_token,
						},
					}).then((response) => {
						this.publishers = response.data.data;
					}).catch((error) => {
						toastr.error("Something went wrong");
					})
				}).catch((error) => {
					toastr.error("Something went wrong");
					this.addPublisherDialog = false;
				})
			}
		},
		createCategoryProcess() {
			if (this.formCategory.category_name == null) {
				toastr.error("Please fill all the fields");
			} else {
				axios.post('https://sitohhang.com/caudex_backend/public/api/categories', this.formCategory, {
					headers: {
						Authorization:
							"Bearer " + router.currentRoute.params.access_token,
					},
				}).then((response) => {
					toastr.success("Category successfully created");
					this.addCategoryDialog = false;
					axios.get('https://sitohhang.com/caudex_backend/public/api/categories', {
						headers: {
							Authorization:
								"Bearer " + router.currentRoute.params.access_token,
						},
					}).then((response) => {
						this.categories = response.data.data;
					}).catch((error) => {
						toastr.error("Something went wrong");
					})
				}).catch((error) => {
					toastr.error("Something went wrong");
					this.addCategoryDialog = false;
				})
			}
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
