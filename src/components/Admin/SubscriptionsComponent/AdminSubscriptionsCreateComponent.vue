<template>
	<div class="ma-12">
		<v-form>
			<v-row>
				<v-col>
					<h1 class="mb-6">Create Subscription</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-select
						v-model="formSubscription.subscription_user"
						:items="users"
						label="User"
						prepend-icon="mdi-account"
					>
					</v-select>
					<v-select
						v-model="formSubscription.subscription_plan"
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
export default {
	name: "AdminSubscriptionsCreateComponent",
	data: () => ({
		showPassword: false,
		document,
		birthdatePicker: false,
		users: [
			{ text: "User 1", value: 1 },
			{ text: "User 2", value: 2 },
			{ text: "User 3", value: 3 },
			{ text: "User 4", value: 4 },
		],
		formSubscription: {
			subscription_user: null,
			subscription_plan: null,
		},
	}),
	methods: {
		setPreviewImage() {
			const [file] = document.querySelector("#imageInput").files;
			if (file) {
				document.querySelector("#imagePreview").src =
					URL.createObjectURL(file);
			}
		},
	},
};
</script>
