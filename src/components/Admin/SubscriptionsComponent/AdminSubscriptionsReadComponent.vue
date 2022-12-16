<template>
	<div class="ma-12">
		<v-row>
			<v-col>
				<h1 class="mb-6">Subscriptions</h1>
			</v-col>
			<v-col align="right">
				<v-btn
					class="ma-2"
					color="primary"
					link
					tag="router-link"
					to="/Admin/Subscriptions/Create"
					><v-icon>mdi-plus</v-icon></v-btn
				>
			</v-col>
		</v-row>
		<v-data-table :headers="headers" :items="subscriptions" @click:row="(item) => router.push('/Admin/Subscriptions/Show/' + window.btoa(JSON.stringify(item)))">
			<template v-slot:item.subscription_start=" { item }">
				{{ new Date(item.subscription_start).toLocaleString("en-US", {
						day: "numeric",
						month: "short",
						year: "numeric",
					}) }}
			</template>
			<template v-slot:item.subscription_expired=" { item }">
				{{ new Date(item.subscription_expired).toLocaleString("en-US", {
						day: "numeric",
						month: "short",
						year: "numeric",
					}) }}
			</template>
			<template v-slot:item.subscription_actions="{ item }">
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
					Are you sure you want to delete this subscription?
				</v-card-title>
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
			headers: [
				{ text: "ID", value: "id" },
				{ text: "User", value: "user_name" },
				{ text: "Start", value: "subscription_start" },
				{ text: "Expired", value: "subscription_expired" },
				{ text: "Actions", value: "subscription_actions" },
			],
			subscriptions: [
				{
					id: 1,
					user_name: "User 1",
					subscription_start: "2020-01-01",
					subscription_expired: "2020-01-31",
				},
				{
					id: 2,
					user_name: "User 2",
					subscription_start: "2020-01-01",
					subscription_expired: "2020-01-31",
				},
				{
					id: 3,
					user_name: "User 3",
					subscription_start: "2020-01-01",
					subscription_expired: "2020-01-31",
				},
				{
					id: 4,
					user_name: "User 4",
					subscription_start: "2020-01-01",
					subscription_expired: "2020-01-31",
				}
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
