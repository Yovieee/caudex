<template>
	<div class="ma-12">
		<v-form>
			<v-row>
				<v-col>
					<h1 class="mb-6">Update Subscription</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-select
						v-model="formSubscription.subscription_user"
						:items="users"
						label="User"
						prepend-icon="mdi-account"
						disabled
					>
					</v-select>
					<v-menu
						v-model="startDatePicker"
						:close-on-content-click="false"
						:nudge-right="40"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="formSubscription.subscription_start"
								label="Start Date"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
								disabled
							></v-text-field>
						</template>
						<v-date-picker
							v-model="formSubscription.subscription_start"
							@input="startDatePicker = false"
						></v-date-picker>
					</v-menu>
					<v-menu
						v-model="expiredDatePicker"
						:close-on-content-click="false"
						:nudge-right="40"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="formSubscription.subscription_expired"
								label="Expired Date"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker
							v-model="formSubscription.subscription_expired"
							@input="expiredDatePicker = false"
						></v-date-picker>
					</v-menu>
					<v-text-field
						v-model="formSubscription.subscription_price"
						label="Price"
						prepend-icon="mdi-currency-usd"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<div class="text-right">
						<v-btn color="primary" @click="updateSubscriptionProcess">Save</v-btn>
						<v-btn color="error" class="ml-4" @click="window.history.back()">Cancel</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-form>
	</div>
</template>
<script>
import router from '@/router';
import axios from 'axios';
import toastr from 'toastr';
import { ref, onMounted } from 'vue';
export default {
	name: "AdminSubscriptionsUpdateComponent",
	data: () => ({
		showPassword: false,
		document,
		window,
		startDatePicker: false,
		expiredDatePicker: false,
		formSubscription: JSON.parse(
			window.atob(router.currentRoute.params.subscription)
		),
	}),
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
	},
	methods: {
		updateSubscriptionProcess() {
			axios
				.put(
					"https://sitohhang.com/caudex_backend/public/api/Subscriptions/" + this.formSubscription.id,
					this.formSubscription,
					{
						headers: {
							Authorization: "Bearer " + router.currentRoute.params.access_token,
						},
					}
				)
				.then((response) => {
					toastr.success('Subscription updated successfully!');
					router.push('/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Subscriptions');
				})
				.catch((error) => {
					toastr.error('Something went wrong!');
				});
		}
	}
};
</script>
