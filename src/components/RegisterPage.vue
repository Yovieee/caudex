<template>
	<v-app>
		<v-card>
			<header
				class="header-area header-sticky wow slideInDown"
				data-wow-duration="0.75s"
				data-wow-delay="0s"
			>
				<div class="container">
					<div class="row">
						<div class="col-14">
							<nav class="main-nav">
								<router-link to="../" class="logo">
									<v-row>
										<v-col>
											<v-img
												class="mt-6"
												src="../../public/img/icons/ms-icon-310x310.png"
												max-width="50"
												max-height="50"
											>
											</v-img>
										</v-col>
										<v-col>
											<h4>
												<span class="blue--text"
													>CAU</span
												><span class="red--text"
													>DEX</span
												>
											</h4>
										</v-col>
									</v-row>
								</router-link>
								<ul class="nav">
									<v-btn
										class="main-red-button mr-4"
										rounded
										color="blue"
										dark
										href="#/login"
										>Login</v-btn
									>
									<v-btn
										class="main-red-button"
										rounded
										color="red"
										dark
										href="#/register"
										>Register</v-btn
									>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</v-card>
		<v-spacer></v-spacer>
		<v-spacer></v-spacer>
		<v-main>
			<div>
				<span class="bg"></span>
				<div>
					<v-container fluid fill-height>
						<v-layout align-center justify-center>
							<v-flex xs12 sm8 md4>
								<v-card>
									<v-toolbar dark color="red">
										<v-toolbar-title
											>Register</v-toolbar-title
										>
									</v-toolbar>
									<v-card-text>
										<v-form enctype="multipart/form-data" id="formUserElement">
											<v-layout>
												<v-row>
													<v-col>
														<!--Foto-->
														<v-file-input
															v-model="
																formUser.user_photo
															"
															style="
																display: none;
															"
															id="imageInput"
															accept="image/*"
															@change="
																setPreviewImage
															"
														></v-file-input>
														<v-container
															fill-height
														>
															<img
																src="../assets/account-circle.svg"
																@click="
																	document
																		.querySelector(
																			'#imageInput'
																		)
																		.click()
																"
																id="imagePreview"
																style="
																	border-radius: 50%;
																	cursor: pointer;
																	max-width: 200px;
																	max-height: 200px;
																	min-width: 200px;
																	min-height: 200px;
																	object-fit: cover;
																"
															/>
														</v-container>
													</v-col>
													<v-col>
														<!--Name-->
														<v-text-field
															prepend-icon="mdi-account"
															name="Nama"
															label="Name"
															type="text"
															v-model="
																formUser.user_name
															"
														></v-text-field>

														<!--Tanggal Lahir-->
														<v-menu
															v-model="
																birthdatePicker
															"
															:close-on-content-click="
																false
															"
															:nudge-right="40"
															transition="scale-transition"
															offset-y
															min-width="auto"
														>
															<template
																v-slot:activator="{
																	on,
																	attrs,
																}"
															>
																<v-text-field
																	v-model="
																		formUser.user_birthdate
																	"
																	label="Birthdate"
																	prepend-icon="mdi-calendar"
																	readonly
																	v-bind="
																		attrs
																	"
																	v-on="on"
																></v-text-field>
															</template>
															<v-date-picker
																v-model="
																	formUser.user_birthdate
																"
																@input="
																	birthdatePicker = false
																"
															></v-date-picker>
														</v-menu>

														<!--Email-->
														<v-text-field
															prepend-icon="mdi-account"
															name="email"
															label="Email"
															type="text"
															v-model="
																formUser.email
															"
														></v-text-field>

														<!--Password-->
														<v-text-field
															v-model="
																formUser.password
															"
															id="password"
															prepend-icon="mdi-lock"
															name="password"
															label="Password"
															:append-icon="
																value
																	? 'mdi-eye-off'
																	: 'mdi-eye'
															"
															@click:append="
																() =>
																	(value =
																		!value)
															"
															:type="
																value
																	? 'password'
																	: 'text'
															"
														></v-text-field>

														<!--Validasi Password-->
														<v-text-field
															id="ConfirmPassword"
															prepend-icon="mdi-lock"
															name="ConfirmPassword"
															label="Confirm Password"
															:append-icon="
																value
																	? 'mdi-eye-off'
																	: 'mdi-eye'
															"
															@click:append="
																() =>
																	(value =
																		!value)
															"
															:type="
																value
																	? 'password'
																	: 'text'
															"
														></v-text-field>
													</v-col>
												</v-row>
											</v-layout>
										</v-form>
									</v-card-text>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn dark color="red" @click="registerProcess"
											>Register</v-btn
										>
									</v-card-actions>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</div>
			</div>
		</v-main>
	</v-app>
</template>

<script>
import axios from 'axios'
import router from '@/router'
import toastr from 'toastr'
export default {
	data: () => ({
		value: String,
		document,
		birthdatePicker: false,
		formUser: {
			user_photo: null,
			user_name: "",
			user_birthdate: "",
			email: "",
			password: "",
			user_role: "Customer"
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
		registerProcess(){
			console.log("tes")
			let formData = new FormData()
			formData.append('user_photo', this.formUser.user_photo)
			formData.append('user_name', this.formUser.user_name)
			formData.append('user_birthdate', this.formUser.user_birthdate)
			formData.append('email', this.formUser.email)
			formData.append('password', this.formUser.password)
			formData.append('user_role', this.formUser.user_role)
			axios.post('https://0ff9-20-210-227-237.jp.ngrok.io/api/register',formData)
			.then(()=> {
				toastr.success('Anda Berhasil Register')
			}).catch(error=>{
				toastr.error('Register anda Gagal')
				
			})
		},
		
		
	},
};
</script>

<style>
.bg {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: url("@/assets/bg.jpg") no-repeat center center;
	background-size: cover;
	background-color: red;
	transform: scale(1.1);
}
</style>
