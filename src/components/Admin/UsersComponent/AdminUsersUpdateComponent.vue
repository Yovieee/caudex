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
						v-model="formUser.user_photo"
						style="display: none"
						id="photoInput"
						accept="image/*"
						@change="setPreviewImage"
					></v-file-input>
					<div class="text-center">
						<img
						:src="'https://sitohhang.com/caudex_backend/public/images/' + JSON.parse(window.atob(router.currentRoute.params.selectedUser)).user_photo"
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
						disabled
					>
					</v-text-field>
					<v-text-field
						v-model="formUser.email"
						label="Email"
						prepend-icon="mdi-email"
						disabled
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
								disabled
							></v-text-field>
						</template>
						<v-date-picker
							v-model="formUser.user_birthdate"
							@input="birthdatePicker = false"
						></v-date-picker>
					</v-menu>
					<v-text-field
						v-model="formUser.user_role"
						:items="[ 'Customer','Admin' ]"
						label="Role"
						prepend-icon="mdi-key"
						disabled
					>
					</v-text-field>
					<v-btn class="ma-2" v-if="!changePassword" @click="changePassword=true
																		this.formUser.password = ''">Change Password</v-btn>
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
						<v-btn color="primary" @click="updateProcess">Save</v-btn>
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
export default {
	name: "AdminUsersUpdateComponent",
	data: () => ({
		router,
		showPassword: false,
		changePassword: false,
		document,
		window,
		birthdatePicker: false,
		formUser: {
			id: JSON.parse(window.atob(router.currentRoute.params.selectedUser)).id,
			user_name: JSON.parse(window.atob(router.currentRoute.params.selectedUser)).user_name,
			user_birthdate: JSON.parse(window.atob(router.currentRoute.params.selectedUser)).user_birthdate,
			user_role: JSON.parse(window.atob(router.currentRoute.params.selectedUser)).user_role,
			email: JSON.parse(window.atob(router.currentRoute.params.selectedUser)).email,
			password: "undefined",
			user_photo: null
		}
	}),
	methods: {
		setPreviewImage() {
			const [file] = document.querySelector("#photoInput").files;
			if (file) {
				document.querySelector("#photoPreview").src =
					URL.createObjectURL(file);
			}
		},
		updateProcess() {
			if(this.formUser.user_name == ""){
				toastr.error('Please fill in the name!')
			}else if(this.formUser.user_birthdate == ""){
				toastr.error('Please fill in the birthdate!')
			}else if(this.formUser.email == ""){
				toastr.error('Please fill in the email!')
			}else if(this.formUser.password == ""){
				toastr.error('Please fill in the password!')
			}else if(this.formUser.user_photo == null){
				toastr.error('Please fill in the photo!')
			}else if(this.formUser.user_role == ""){
				toastr.error('Please fill in the role!')
			}else {
				let formData = new FormData()
				formData.append('id', this.formUser.id)
				formData.append('user_photo', this.formUser.user_photo)
				formData.append('user_name', this.formUser.user_name)
				formData.append('user_birthdate', this.formUser.user_birthdate)
				formData.append('email', this.formUser.email)
				formData.append('password', this.formUser.password)
				formData.append('user_role', this.formUser.user_role)
				axios.post('https://sitohhang.com/caudex_backend/public/api/users',formData,
				{
					headers: {
						'Authorization': 'Bearer ' + router.currentRoute.params.access_token
					}
				})
				.then(()=> {
					toastr.success('Successfully updated!')
					router.push('/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Users/')
				}).catch(error=>{
					toastr.error('Update failed!')
					
				})
			}
		}
	},
};
</script>
