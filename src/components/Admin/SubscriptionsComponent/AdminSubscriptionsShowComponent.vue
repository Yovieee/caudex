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
							'/Admin/Subscriptions/Update/' +
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
					<v-select
						v-model="subscription.subscription_plan"
						:items="[
							{ text: '1 Month', value: 1 },
							{ text: '6 Month', value: 2 },
							{ text: '1 Year', value: 3 },
							{ text: '3 Year', value: 4 },
							{ text: '5 Year', value: 5 },
						]"
						label="Plan"
						prepend-icon="mdi-clipboard-text-clock"
						readonly
					>
					</v-select>
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
export default {
	name: "AdminSubscriptionsShowComponent",
	data: () => ({
		deleteDialog: false,
		document,
		router,
		subscription: JSON.parse(
			window.atob(router.currentRoute.params.subscription)
		),
		users: [
			{ text: "User 1", value: 1 },
			{ text: "User 2", value: 2 },
			{ text: "User 3", value: 3 },
			{ text: "User 4", value: 4 },
		],
	}),
	methods: {
		deleteProcess() {
			this.closeDeleteDialog();
			//to do delete process
		},
	},
};
</script>
