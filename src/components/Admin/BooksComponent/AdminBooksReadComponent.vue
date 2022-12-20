<template>
	<div class="ma-12">
		<v-row>
			<v-col>
				<h1 class="mb-6">Books</h1>
			</v-col>
			<v-col align="right">
				<v-btn
					class="ma-2"
					color="primary"
					link
					tag="router-link"
					:to="'/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Books/Create'"
					><v-icon>mdi-plus</v-icon></v-btn
				>
			</v-col>
		</v-row>
		<v-data-table :headers="headers" :items="books" @click:row="(item) => router.push('/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Books/Show/' + window.btoa(JSON.stringify(item)))">
			<template v-slot:item.book_cover="{ item }">
				<v-img
					:src="'https://sitohhang.com/caudex_backend/public/images/' + item.book_cover"
					max-width="50"
					max-height="50"
				></v-img>
			</template>
			<template v-slot:item.book_actions="{ item }">
				<v-icon small class="mr-2" @click.stop="openDeleteDialog(item)"> mdi-delete </v-icon>
				<v-icon small link
					tag="router-link"
					:to="'/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Users/Update/' + window.btoa(JSON.stringify(item))"> mdi-pencil </v-icon>
			</template>
		</v-data-table>
		<v-dialog v-model="deleteDialog" max-width="320" persistent>
			<v-card>
				<v-card-title class="text-h5">
					Are you sure you want to delete this book?
				</v-card-title>
				<v-container>
					<v-row align="center">
						<v-col cols="3">
							<v-img
								:src="deleteTarget.book_cover"
								max-width="50"
								max-height="50"
								class="ml-4"
							>
							</v-img>
						</v-col>
						<v-col>{{ deleteTarget.book_title }}</v-col>
					</v-row>
				</v-container>
				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="green darken-1" text @click="closeDeleteDialog()">
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
import axios from 'axios';
import toastr from 'toastr';
import { ref, onMounted } from 'vue'
export default {
	name: "AdminBooksReadComponent",
	data() {
		return {
			router,
			window,
			JSON,
            deleteDialog: false,
            deleteTarget: {},
			headers: [
				{ text: "ID", value: "id" },
				{ text: "Cover", value: "book_cover" },
				{ text: "Title", value: "book_title" },
				{ text: "Year", value: "book_year" },
				{ text: "Publisher", value: "publisher_name" },
				{ text: "Author", value: "author_name" },
				{ text: "Category", value: "category_name" },
				{ text: "Actions", value: "book_actions" },
			],
		}
	},
    methods: {
        openDeleteDialog(item) {
            this.deleteDialog = true
            this.deleteTarget = item
        },
        closeDeleteDialog() {
            this.deleteDialog = false
            this.deleteTarget = {}
        },
        deleteProcess() {
            axios
				.delete("https://sitohhang.com/caudex_backend/public/api/books/" + this.deleteTarget.id, {
					headers: {
						Authorization:
							"Bearer " + router.currentRoute.params.access_token,
					},
				})
				.then((response) => {
					this.closeDeleteDialog()
					axios
						.get("https://sitohhang.com/caudex_backend/public/api/books", {
							headers: {
								Authorization:
									"Bearer " + router.currentRoute.params.access_token,
							},
						})
						.then((response) => {
							this.books = response.data.data
							toastr.success("Book deleted successfully");
						}).catch((error) => {
							toastr.error("Something went wrong");
						});
				});

        }
    },
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
			books
		};
	},
};
</script>
