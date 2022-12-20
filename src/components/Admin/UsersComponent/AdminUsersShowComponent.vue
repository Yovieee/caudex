<template>
	<div class="ma-12">
		<v-form>
			<v-row>
				<v-col>
					<h1 class="mb-6">Show User</h1>
				</v-col>
				<v-col align="right">
					<v-btn class="ma-2" color="primary" link tag="router-link"
						:to="
						'/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Users/Update/' + router.currentRoute.params.selectedUser"><v-icon>mdi-pencil</v-icon></v-btn>
					<v-btn class="ma-2" color="error" @click="deleteDialog = true"><v-icon>mdi-delete</v-icon></v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<div class="text-center">
						<img :src="'https://sitohhang.com/caudex_backend/public/images/' + user.user_photo" style="border-radius: 50%;
								max-width: 256px;
								max-height: 256px;
								min-width: 256px;
								min-height: 256px;
								object-fit: cover;
							" />
					</div>
				</v-col>
				<v-col>
					<v-text-field v-model="user.user_name" label="Name" prepend-icon="mdi-account" readonly>
					</v-text-field>
					<v-text-field v-model="user.email" label="Email" prepend-icon="mdi-email" readonly>
					</v-text-field>
					<v-text-field v-model="user.user_birthdate" label="Birthdate" prepend-icon="mdi-calendar"
						readonly></v-text-field>
					<v-text-field v-model="user.user_role" label="Role" prepend-icon="mdi-key" readonly></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-data-table :headers="headers" :items="listReadedBook">
					<template v-slot:item.book_cover="{ item }">
						<v-img :src="'https://sitohhang.com/caudex_backend/public/images/' + item.book_cover" max-width="100" max-height="100" contain></v-img>
					</template>
				</v-data-table>
			</v-row>
		</v-form>
		<v-dialog v-model="deleteDialog" max-width="320" persistent>
			<v-card>
				<v-card-title class="text-h5">
					Are you sure you want to delete this user?
				</v-card-title>
				<v-container>
					<v-row align="center">
						<v-col cols="3">
							<v-img :src="'https://sitohhang.com/caudex_backend/public/images/' + user.user_photo"
								max-width="50" max-height="50" class="ml-4">
							</v-img>
						</v-col>
						<v-col>{{ user.user_name }}</v-col>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import toastr from 'toastr';
export default {
	name: "AdminUsersShowComponent",
	data: () => ({
		deleteDialog: false,
		document,
		router,
		window,
		birthdatePicker: false,
		user: JSON.parse(window.atob(router.currentRoute.params.selectedUser)),
		headers: [
			{ text: 'ID', value: 'id' },
			{ text: 'Cover', value: 'book_cover' },
			{ text: 'Title', value: 'book_title' },
			{ text: 'Year', value: 'book_year' },
			{ text: 'Publisher', value: 'book_publisher' },
			{ text: 'Author', value: 'book_author' },
			{ text: 'Category', value: 'book_category' },
			{ text: 'Readed at', value: 'read_date' },
		],
	}),
	methods: {
		deleteProcess() {
			axios.delete('https://sitohhang.com/caudex_backend/public/api/users/' + this.user.id,
				{
					headers: {
						Authorization: "Bearer " + router.currentRoute.params.access_token,
					},
				})
				.then(()=>{
					toastr.success('User deleted successfully');
					router.push('/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token +'/Users');
				})
				.catch(error => {
					toastr.error('User deletion failed');
				});
			this.deleteDialog = false;
		},
	},
	setup() {
		let listReadedBook = ref([]);
		axios.get('https://sitohhang.com/caudex_backend/public/api/reads/' + JSON.parse(window.atob(router.currentRoute.params.selectedUser)).id,
			{
				headers: {
					Authorization: "Bearer " + router.currentRoute.params.access_token,
				},
			})
			.then((response) => {
				listReadedBook.value = response.data.data;
				console.log(listReadedBook.value);
			})
		return {
			listReadedBook
		};
	},
};
</script>
