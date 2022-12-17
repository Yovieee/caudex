<template>
	<div class="ma-12">
		<v-form>
			<v-row>
				<v-col>
					<h1 class="mb-6">Update User</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<v-file-input
						:v-model="typeof(formUser.user_photo) == 'string' ? null : formUser.user_photo"
						style="display: none"
						id="photoInput"
						accept="image/*"
						@change="setPreviewImage"
					></v-file-input>
					<div class="text-center">
						<img
							:src="formUser.user_photo"
							@click="
								document.querySelector('#photoInput').click()
							"
							id="photoPreview"
							style="
								border-radius: 50%;
								cursor: pointer;
								max-width: 256px;
								max-height: 256px;
								min-width: 256px;
								min-height: 256px;
								object-fit: cover;
							"
						/>
					</div>
				</v-col>
				<v-col>
					<v-text-field
						v-model="formUser.user_name"
						label="Name"
						prepend-icon="mdi-account"
					>
					</v-text-field>
					<v-text-field
						v-model="formUser.user_email"
						label="Email"
						prepend-icon="mdi-email"
					>
					</v-text-field>
					<v-menu
						v-model="birthdatePicker"
						:close-on-content-click="false"
						:nudge-right="40"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="formUser.user_birthdate"
								label="Birthdate"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker
							v-model="formUser.user_birthdate"
							@input="birthdatePicker = false"
						></v-date-picker>
					</v-menu>
					<v-select
						v-model="formUser.user_role"
						:items="[
							{ text: 'Customer', value: 0 },
							{ text: 'Admin', value: 1 },
						]"
						label="Role"
						prepend-icon="mdi-key"
					>
					</v-select>
					<v-btn class="ma-2" v-if="!changePassword" @click="changePassword=true">Change Password</v-btn>
					<v-text-field
						v-if="changePassword"
						v-model="formUser.user_password"
						label="Password"
						prepend-icon="mdi-lock"
						:type="showPassword ? 'text' : 'password'"
						@click:append="showPassword = !showPassword"
						:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					>
					</v-text-field>
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
	name: "AdminUsersUpdateComponent",
	data: () => ({
		showPassword: false,
		changePassword: false,
		document,
		birthdatePicker: false,
		formUser: JSON.parse(window.atob(router.currentRoute.params.user)),
	}),
	methods: {
		setPreviewImage() {
			const [file] = document.querySelector("#photoInput").files;
			if (file) {
				document.querySelector("#photoPreview").src =
					URL.createObjectURL(file);
			}
		},
	},
};
</script>
