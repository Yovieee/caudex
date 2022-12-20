<template>
	<div class="ma-12">
		<v-form>
			<v-row>
				<v-col>
					<h1 class="mb-6">Create User</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6" md="4">
					<v-file-input
						v-model="formUser.user_photo"
						style="display: none"
						id="imageInput"
						accept="image/*"
						@change="setPreviewImage"
					></v-file-input>
					<div class="text-center">
						<img
							src="../../../assets/account-circle.svg"
							@click="
								document.querySelector('#imageInput').click()
							"
							id="imagePreview"
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
						v-model="formUser.email"
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
						:items="[ 'Customer','Admin' ]"
						label="Role"
						prepend-icon="mdi-key"
					>
					</v-select>
					<v-text-field
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
						<v-btn color="primary" @click="createUserProcess">Save</v-btn>
						<v-btn color="error" class="ml-4" @click="window.history.back()">Cancel</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-form>
	</div>
</template>
<script>
import axios from 'axios'
import router from '@/router'
import toastr from 'toastr';
export default {
	name: "AdminUsersCreateComponent",
	data: () => ({
		showPassword: false,
		document,
		window,
		birthdatePicker: false,
		formUser: {
			user_photo: null,
			user_name: "",
			user_birthdate: "",
			user_email: "",
			user_role: "",
			user_password: "",
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
		createUserProcess() {
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
				formData.append('user_photo', this.formUser.user_photo)
				formData.append('user_name', this.formUser.user_name)
				formData.append('user_birthdate', this.formUser.user_birthdate)
				formData.append('email', this.formUser.email)
				formData.append('password', this.formUser.password)
				formData.append('user_role', this.formUser.user_role)
				axios.post('https://sitohhang.com/caudex_backend/public/api/register',formData)
				.then(()=> {
					toastr.success('You have successfully registered, please check your inbox for verification!')
					router.push('/Admin/' + router.currentRoute.params.user + '/' + router.currentRoute.params.access_token + '/Users/')
				}).catch(error=>{
					toastr.error('Registration failed!')
					
				})
			}
		}
	},
};
</script>
