<template>
	<v-app>
		<v-container fluid style="height: 80px">
			<v-app-bar fixed dark src="https://picsum.photos/1920/1080?random">
				<template v-slot:img="{ props }">
					<v-img
						v-bind="props"
						gradient="to top right, black, rgba(0,0,0,.0)"
					></v-img>
				</template>
				<nav class="main-nav">
					<v-row>
						<v-col>
							<v-img
								src="../../../public/img/icons/ms-icon-310x310.png"
								max-width="50"
								max-height="50"
							>
							</v-img>
						</v-col>
						<v-col>
							<h4 class="mt-3">
								<span class="blue--text">CAU</span
								><span class="red--text">DEX</span>
							</h4>
						</v-col>
					</v-row>
				</nav>
				<v-spacer></v-spacer>
				<v-menu offset-y>
					<template v-slot:activator="{ on }">
						<v-avatar
							color="#546E7A"
							size="35"
							class="ml-auto"
							v-on="on"
							style="cursor: pointer"
						>
							<img
								:src="
									'https://sitohhang.com/caudex_backend/public/images/' +
									currentUser.user_photo
								"
						/></v-avatar>
					</template>
					<v-list>
						<div class="text-center">
							<div class="mt-2">{{ currentUser.user_name }}</div>
							<v-chip class="mt-2" color="orange lighten-4"
								>Customer</v-chip
							>
						</div>
						<hr />
						<v-list-item @click="settingsOpen">
							<v-list-item-icon>
								<v-icon>mdi-cog</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>Settings</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item @click="logoutProcess">
							<v-list-item-icon>
								<v-icon>mdi-logout</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>Logout</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-app-bar>
		</v-container>
		<v-spacer></v-spacer>
		<v-main>
			<router-view></router-view>
		</v-main>
		<v-dialog v-model="settingsDialog" max-width="290" fullscreen>
			<v-card>
				<v-toolbar dark color="primary">
					<v-btn icon dark @click="settingsDialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>Settings</v-toolbar-title>
					<v-spacer></v-spacer>
				</v-toolbar>
				<div class="ma-12">
					<v-form>
						<v-row>
							<v-col>
								<h1 class="mb-6">Account Settings</h1>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" sm="6" md="4">
								<v-file-input
									v-if="this.settingsDialog"
									v-model="formCurrentUser.user_photo"
									style="display: none"
									id="currentUserPhoto"
									accept="image/*"
									@change="setCurrentUserPhotoPreview"
								></v-file-input>
								<div class="text-center">
									<img
										:src="
											'https://sitohhang.com/caudex_backend/public/images/' +
											currentUser.user_photo
										"
										@click="
											document
												.querySelector(
													'#currentUserPhoto'
												)
												.click()
										"
										id="currentUserPhotoPreview"
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
									v-model="formCurrentUser.user_name"
									label="Name"
									prepend-icon="mdi-account"
									disabled
								>
								</v-text-field>
								<v-text-field
									v-model="formCurrentUser.email"
									label="Email"
									prepend-icon="mdi-email"
									disabled
								>
								</v-text-field>
								<v-menu
									v-model="currentUserBirthdatePicker"
									:close-on-content-click="false"
									:nudge-right="40"
									transition="scale-transition"
									offset-y
									min-width="auto"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
											v-model="
												formCurrentUser.user_birthdate
											"
											label="Birthdate"
											prepend-icon="mdi-calendar"
											readonly
											v-bind="attrs"
											v-on="on"
											disabled
										></v-text-field>
									</template>
									<v-date-picker
										v-model="formCurrentUser.user_birthdate"
										@input="
											currentUserBirthdatePicker = false
										"
									></v-date-picker>
								</v-menu>
								<v-btn
									class="ma-2"
									v-if="!currentUserChangePassword"
									@click="currentUserChangePassword = true
									formCurrentUser.password = ''"
									>Change Password</v-btn
								>
								<v-text-field
									v-if="currentUserChangePassword"
									v-model="formCurrentUser.password"
									label="Password"
									prepend-icon="mdi-lock"
									:type="
										currentUserShowPassword
											? 'text'
											: 'password'
									"
									@click:append="
										currentUserShowPassword =
											!currentUserShowPassword
									"
									:append-icon="
										currentUserShowPassword
											? 'mdi-eye'
											: 'mdi-eye-off'
									"
								>
								</v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col>
								<div class="text-right">
									<v-btn
										color="primary"
										@click="changeSettingsProcess"
										>Save</v-btn
									>
									<v-btn
										color="error"
										class="ml-4"
										@click="settingsDialog = false"
										>Cancel</v-btn
									>
								</div>
							</v-col>
						</v-row>
					</v-form>
				</div>
			</v-card>
		</v-dialog>
	</v-app>
</template>

<script>
import axios from "axios";
import router from "@/router";
import toastr from "toastr";
export default {
	data() {
		return {
			window,
			formCurrentUser: {
				id: "",
				user_photo: null,
				user_name: "",
				user_birthdate: "",
				user_email: "",
				user_verification: NaN,
			},
			document,
			settingsDialog: false,
			currentUserDialog: false,
			currentUserChangePassword: false,
			currentUserShowPassword: false,
			currentUserBirthdatePicker: false,
			currentUser: JSON.parse(
				window.atob(router.currentRoute.params.user)
			),
			access_token: router.currentRoute.params.access_token,
		};
	},
	methods: {
		setCurrentUserPhotoPreview() {
			const [file] = document.querySelector("#currentUserPhoto").files;
			if (file) {
				document.querySelector("#currentUserPhotoPreview").src =
					URL.createObjectURL(file);
			}
		},
		settingsOpen() {
			this.formCurrentUser.id = this.currentUser.id;
			this.formCurrentUser.user_photo = null;
			this.formCurrentUser.user_name = this.currentUser.user_name;
			this.formCurrentUser.user_birthdate = this.currentUser.user_birthdate;
			this.formCurrentUser.email = this.currentUser.email;
			this.formCurrentUser.user_verification = this.currentUser.user_verification;
			this.formCurrentUser.password = "undefined"
			this.settingsDialog = true;
		},
		changeSettingsProcess() {
			if (this.formCurrentUser.user_name == "") {
				toastr.error("Please fill in your name!");
			} else if (this.formCurrentUser.user_birthdate == "") {
				toastr.error("Please fill in your birthdate!");
			} else if (this.formCurrentUser.email == "") {
				toastr.error("Please fill in your email!");
			} else if (this.formCurrentUser.password == "") {
				toastr.error("Please fill in your password!");
			} else {
				let formData = new FormData();
				formData.append("id", this.formCurrentUser.id);
				formData.append("user_photo", this.formCurrentUser.user_photo);
				formData.append("user_name", this.formCurrentUser.user_name);
				formData.append(
					"user_birthdate",
					this.formCurrentUser.user_birthdate
				);
				formData.append("email", this.formCurrentUser.email);
				formData.append("password", this.formCurrentUser.password);
				formData.append("user_role", this.formCurrentUser.user_role);
				axios
					.post(
						"https://sitohhang.com/caudex_backend/public/api/users",
						formData,
						{
							headers: {
								Authorization: "Bearer " + this.access_token,
							},
						}
					)
					.then((response) => {
						toastr.success("Account updated!");
						this.currentUser = response.data.data;
						router.push(
							"/Customer/" +
								window.btoa(
									JSON.stringify(response.data.data)
								) +
								"/" +
								this.access_token +
								"/HomePage/"
						)
						this.currentUserChangePassword = false
						this.settingsDialog = false
					})
					.catch(() => {
						toastr.error("Update failed!")
						this.settingsDialog = false
					});
			}
		},
		logoutProcess() {
			axios
				.post(
					"https://sitohhang.com/caudex_backend/public/api/logout",
					this.currentUser,
					{
						headers: {
							Authorization: "Bearer " + this.access_token,
						},
					}
				)
				.then(() => {
					toastr.success("Logout successful!");
					router.push('/');
				})
				.catch(() => {
					toastr.error("Logout failed!");
				});
		},
	},
};
</script>
