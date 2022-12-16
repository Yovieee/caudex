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
					to="/Admin/Books/Create"
					><v-icon>mdi-plus</v-icon></v-btn
				>
			</v-col>
		</v-row>
		<v-data-table :headers="headers" :items="books" @click:row="(item) => router.push('/Admin/Books/Show/' + window.btoa(JSON.stringify(item)))">
			<template v-slot:item.book_cover="{ item }">
				<v-img
					:src="item.book_cover"
					max-width="50"
					max-height="50"
				></v-img>
			</template>
			<template v-slot:item.book_actions="{ item }">
				<v-icon small class="mr-2" @click.stop="openDeleteDialog(item)"> mdi-delete </v-icon>
				<v-icon small link
					tag="router-link"
					:to="'/Admin/Books/Update/' + window.btoa(JSON.stringify(item))"> mdi-pencil </v-icon>
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
export default {
	name: "AdminBooksReadComponent",
	data() {
		return {
			router,
			window,
			JSON,
            deleteDialog: false,
            deleteTarget: {},
			books: [],
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
			books: [
				{
					id: 1,
					book_cover: "https://picsum.photos/200/300",
					book_title: "Book 1",
					book_year: "2020",
					publisher_name: "Publisher 1",
					author_name: "Author 1",
					category_name: "Category 1",
					book_publisher: 1,
					book_author: [1, 2, 3],
					book_category: [1, 2],
				},
				{
					id: 2,
					book_cover: "https://picsum.photos/200/300",
					book_title: "Book 2",
					book_year: "2020",
					publisher_name: "Publisher 2",
					author_name: "Author 2",
					category_name: "Category 2",
					book_publisher: 1,
					book_author: [1, 2, 3],
					book_category: [1, 2],
				},
				{
					id: 3,
					book_cover: "https://picsum.photos/200/300",
					book_title: "Book 3",
					book_year: "2020",
					publisher_name: "Publisher 3",
					author_name: "Author 3",
					category_name: "Category 3",
					book_publisher: 1,
					book_author: [1, 2, 3],
					book_category: [1, 2],
				},
				{
					id: 4,
					book_cover: "https://picsum.photos/200/300",
					book_title: "Book 4",
					book_year: "2020",
					publisher_name: "Publisher 4",
					author_name: "Author 4",
					category_name: "Category 4",
					book_publisher: 1,
					book_author: [1, 2, 3],
					book_category: [1, 2],
				},
				{
					id: 5,
					book_cover: "https://picsum.photos/200/300",
					book_title: "Book 5",
					book_year: "2020",
					publisher_name: "Publisher 5",
					author_name: "Author 5",
					category_name: "Category 5",
					book_publisher: 1,
					book_author: [1, 2, 3],
					book_category: [1, 2],
				},
				{
					id: 6,
					book_cover: "https://picsum.photos/200/300",
					book_title: "Book 6",
					book_year: "2020",
					publisher_name: "Publisher 6",
					author_name: "Author 6",
					category_name: "Category 6",
					book_publisher: 1,
					book_author: [1, 2, 3],
					book_category: [1, 2],
				},
				{
					id: 7,
					book_cover: "https://picsum.photos/200/300",
					book_title: "Book 7",
					book_year: "2020",
					publisher_name: "Publisher 7",
					author_name: "Author 7",
					category_name: "Category 7",
					book_publisher: 1,
					book_author: [1, 2, 3],
					book_category: [1, 2],
				}
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
            this.closeDeleteDialog()
            //to do delete process
        }
    },
};
</script>
