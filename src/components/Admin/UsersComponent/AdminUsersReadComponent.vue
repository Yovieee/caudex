<template>
	<div class="ma-12">
		<v-row>
			<v-col>
				<h1 class="mb-6">Users</h1>
			</v-col>
			<v-col align="right">
				<v-btn
					class="ma-2"
					color="primary"
					link
					tag="router-link"
					to="/Admin/Users/Create"
					><v-icon>mdi-plus</v-icon></v-btn
				>
			</v-col>
		</v-row>
		<v-data-table :headers="headers" :items="users" @click:row="(item) => router.push('/Admin/Users/Show/' + window.btoa(JSON.stringify(item)))">
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
				{{ item.user_role == 0 ? "Customer" : "Admin" }}
			</template>
			<template v-slot:item.user_verification="{ item }">
				<v-icon>{{
					item.user_verification == 0 ? "mdi-close" : "mdi-check"
				}}</v-icon>
			</template>
			<template v-slot:item.user_photo="{ item }">
				<v-img
					:src="item.user_photo"
					max-width="50"
					max-height="50"
				></v-img>
			</template>
			<template v-slot:item.user_actions="{ item }">
				<v-icon small class="mr-2" @click.stop="openDeleteDialog(item)">
					mdi-delete
				</v-icon>
				<v-icon
					small
					link
					tag="router-link"
					:to="
						'/Admin/Users/Update/' +
						window.btoa(JSON.stringify(item))
					"
				>
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
							<v-img
								:src="deleteTarget.user_photo"
								max-width="50"
								max-height="50"
								class="ml-4"
							>
							</v-img>
						</v-col>
						<v-col>{{ deleteTarget.user_name }}</v-col>
					</v-row>
				</v-container>
				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn
						color="green darken-1"
						text
						@click="closeDeleteDialog()"
					>
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
	name: "AdminUsersReadComponent",
	data() {
		return {
			router,
			window,
			JSON,
			deleteDialog: false,
			deleteTarget: {},
			users: [],
			headers: [
				{ text: "ID", value: "id" },
				{ text: "Photo", value: "user_photo" },
				{ text: "Name", value: "user_name" },
				{ text: "Birthdate", value: "user_birthdate" },
				{ text: "Email", value: "user_email" },
				{ text: "Role", value: "user_role" },
				{ text: "Verification", value: "user_verification" },
				{ text: "Actions", value: "user_actions" },
			],
			users: [
				{
					id: 1,
					user_photo: (new Image().src =
						"https://cdn.vuetifyjs.com/images/lists/1.jpg"),
					user_name: "John Doe",
					user_birthdate: "2022-01-21",
					user_email: "stillman@gmail.com",
					user_role: 0,
					user_verification: 1,
				},
				{
					id: 2,
					user_photo: (new Image().src =
						"https://cdn.vuetifyjs.com/images/lists/2.jpg"),
					user_name: "Jane Doe",
					user_birthdate: "2022-01-21",
					user_email: "Otniel@outlook.co.id",
					user_role: 0,
					user_verification: 0,
				},
				{
					id: 3,
					user_photo: (new Image().src =
						"https://cdn.vuetifyjs.com/images/lists/3.jpg"),
					user_name: "John Doe",
					user_birthdate: "2022-01-21",
					user_email: "rakai@michat.id",
					user_role: 1,
					user_verification: 1,
				},
				{
					id: 4,
					user_photo: (new Image().src =
						"https://cdn.vuetifyjs.com/images/lists/4.jpg"),
					user_name: "Jane Doe",
					user_birthdate: "2022-01-21",
					user_email: "yonas@google.com",
					user_role: 1,
					user_verification: 0,
				},
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
			this.closeDeleteDialog();
			//to do delete process
		},
	},
};
</script>
