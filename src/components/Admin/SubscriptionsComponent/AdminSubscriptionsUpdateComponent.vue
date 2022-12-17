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
						v-model="subscription.subscription_user"
						:items="users"
						label="User"
						prepend-icon="mdi-account"
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
								v-model="subscription.subscription_start"
								label="Start Date"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker
							v-model="subscription.subscription_start"
							@input="startDatePicker = false"
						></v-date-picker>
					</v-menu>
					<v-select
						v-model="subscription.subscription_plan"
						:items="[{ text: '1 Month', value: 1 }, { text: '6 Month', value: 2 }, { text: '1 Year', value: 3 }, { text: '3 Year', value: 4 }, { text: '5 Year', value: 5 } ]"
						label="Plan"
						prepend-icon="mdi-clipboard-text-clock"
					>
					</v-select>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<div class="text-right">
						<v-btn color="primary">Save</v-btn>
						<v-btn color="error" class="ml-4">Cancel</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-form>
	</div>
</template>
<script>
import router from '@/router';
export default {
	name: "AdminSubscriptionsUpdateComponent",
	data: () => ({
		showPassword: false,
		document,
		startDatePicker: false,
		users: [
			{ text: "User 1", value: 1 },
			{ text: "User 2", value: 2 },
			{ text: "User 3", value: 3 },
			{ text: "User 4", value: 4 },
		],
		subscription: JSON.parse(
			window.atob(router.currentRoute.params.subscription)
		),
	}),
};
</script>
