<template>
	<div class="ma-12">
		<v-row>
			<v-col>
				<h1 class="mb-6">Users</h1>
			</v-col>
			<v-col align="right">
				<v-btn class="ma-2" color="primary" link tag="router-link"
					:to="'/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Users/Create'"><v-icon>mdi-plus</v-icon></v-btn>
			</v-col>
		</v-row>
		<v-data-table :headers="headers" :items="users"
			@click:row="(item) => router.push('/Admin/' + window.btoa(JSON.stringify(router.currentRoute.params.user)) + '/' + router.currentRoute.params.access_token + '/Users/Show/' + window.btoa(JSON.stringify(item)))">
			<template v-slot:item.user_birthdate="{ item }">
				{{
						new Date(item.user_birthdate).toLocaleString("en-US", {
							day: "numeric",
							month: "short",
							year: "numeric",
						})
				}}
			</template>
			<template v-slot:item.user_role="{ item }">
				{{ item.user_role }}
			</template>
			<template v-slot:item.user_verification="{ item }">
				<v-icon>{{
						item.email_verified_at == null ? "mdi-close" : "mdi-check"
				}}</v-icon>
			</template>
			<template v-slot:item.user_photo="{ item }">
				<v-img :src="'https://sitohhang.com/caudex_backend/public/images/' + item.user_photo" max-width="50" max-height="50"></v-img>
			</template>
			<template v-slot:item.user_actions="{ item }">
				<v-icon small class="mr-2" @click.stop="openDeleteDialog(item)">
					mdi-delete
				</v-icon>
				<v-icon small link tag="router-link" :to="
					'/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Users/Update/' +
					window.btoa(JSON.stringify(item))
				">
					mdi-pencil
				</v-icon>
			</template>
		</v-data-table>
		<v-dialog v-model="deleteDialog" max-width="320" persistent>
			<v-card>
				<v-card-title class="text-h5">
					Are you sure you want to delete this user?
				</v-card-title>
				<v-container>
					<v-row align="center">
						<v-col cols="3">
							<v-img :src="deleteTarget.user_photo" max-width="50" max-height="50" class="ml-4">
							</v-img>
						</v-col>
						<v-col>{{ deleteTarget.user_name }}</v-col>
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
import { ref, onMounted } from 'vue';
import axios from 'axios'
import toastr from 'toastr';
export default {
	name: "AdminUsersReadComponent",
	data() {
		return {
			router,
			window,
			JSON,
			deleteDialog: false,
			deleteTarget: {},
			headers: [
				{ text: "ID", value: "id" },
				{ text: "Photo", value: "user_photo" },
				{ text: "Name", value: "user_name" },
				{ text: "Birthdate", value: "user_birthdate" },
				{ text: "Email", value: "email" },
				{ text: "Role", value: "user_role" },
				{ text: "Verification", value: "user_verification" },
				{ text: "Actions", value: "user_actions" }
			],
		};
	},
	methods: {
		openDeleteDialog(item) {
			this.deleteDialog = true;
			this.deleteTarget = item;
		},
		closeDeleteDialog() {
			this.deleteDialog = false;
			this.deleteTarget = {};
		},
		deleteProcess() {
			axios.delete('https://sitohhang.com/caudex_backend/public/api/users/' + this.deleteTarget.id,
				{
					headers: {
						Authorization: "Bearer " + router.currentRoute.params.access_token,
					},
				})
				.then(()=>{
					axios.get('https://sitohhang.com/caudex_backend/public/api/users',
					{
						headers: {
							Authorization: "Bearer " + router.currentRoute.params.access_token,
						},
					})
					.then(response => {
						this.users = response.data.data;
						toastr.success('User deleted successfully');
					})
					.catch(error => {
						toastr.error('User deletion failed');
					});
				})
				.catch(error => {
					toastr.error('User deletion failed');
				});
			this.closeDeleteDialog();
		},
	},
	setup() {
		let users = ref([]);
		onMounted(() => {
			axios.get('https://sitohhang.com/caudex_backend/public/api/users',
				{
					headers: {
						Authorization: "Bearer " + router.currentRoute.params.access_token,
					},
				})
				.then(response => {
					users.value = response.data.data;
				})
				.catch(error => {
					console.log(error);
				});
		});
		return {
			users,
		};
	}
};
</script>
