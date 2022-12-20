<template>
	<div class="ma-12">
		<v-form>
			<v-row>
				<v-col>
					<h1 class="mb-6">Show Subscription</h1>
				</v-col>
				<v-col align="right">
					<v-btn
						class="ma-2"
						color="primary"
						link
						tag="router-link"
						:to="
							'/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Subscriptions/Update/' +
							router.currentRoute.params.subscription
						"
						><v-icon>mdi-pencil</v-icon></v-btn
					>
					<v-btn
						class="ma-2"
						color="error"
						@click="deleteDialog = true"
						><v-icon>mdi-delete</v-icon></v-btn
					>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-select
						v-model="subscription.subscription_user"
						:items="users"
						label="User"
						prepend-icon="mdi-account"
						readonly
					>
					</v-select>
					<v-text-field
						v-model="subscription.subscription_start"
						label="Start Date"
						prepend-icon="mdi-calendar"
						readonly
					></v-text-field>
					<v-text-field
						v-model="subscription.subscription_expired"
						label="Start Date"
						prepend-icon="mdi-calendar"
						readonly
					></v-text-field>
					<v-text-field
						v-model="subscription.subscription_price"
						label="Price"
						prepend-icon="mdi-currency-usd"
						readonly
					></v-text-field>
				</v-col>
			</v-row>
		</v-form>
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
						@click="deleteDialog = false"
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
import router from "@/router";
import axios from "axios";
import toastr from "toastr";
import { ref, onMounted } from "vue";
export default {
	name: "AdminSubscriptionsShowComponent",
	data: () => ({
		deleteDialog: false,
		document,
		router,
		subscription: JSON.parse(
			window.atob(router.currentRoute.params.subscription)
		),
	}),
	methods: {
		deleteProcess() {
			axios.delete('https://sitohhang.com/caudex_backend/public/api/Subscriptions/' + this.subscription.id,
				{
					headers: {
						Authorization: "Bearer " + router.currentRoute.params.access_token,
					},
				})
				.then(response => {
					toastr.success('Subscription deleted')
					axios.get('https://sitohhang.com/caudex_backend/public/api/Subscriptions',
					{
						headers: {
							Authorization: "Bearer " + router.currentRoute.params.access_token,
						},
					})
					.then(response => {
						router.push('/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Subscriptions')
					})
					.catch(error => {
						toastr.error('Something went wrong')
					})
				})
				.catch(error => {
					toastr.error('Something went wrong')
				})
			this.deleteDialog = false;
		},
	},
	setup() {
		let users = ref([]);
		onMounted(() => {
			axios
				.get("https://sitohhang.com/caudex_backend/public/api/user",
				{
					headers: {
						Authorization: "Bearer " + router.currentRoute.params.access_token,
					},
				})
				.then((response) => {
					users.value = response.data.data;
				})
				.catch((error) => {
					toastr.error('Something went wrong!');
				});
		});
		return {
			users
		}
	}
};
</script>
