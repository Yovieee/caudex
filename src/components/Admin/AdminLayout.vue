<template>
	<v-app id="inspire">
		<v-app-bar app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-img
				class="ml-auto"
				max-height="48"
				max-width="48"
				src="../../../public/img/icons/ms-icon-310x310.png"
			></v-img>
			<v-toolbar-title
				><h4>
					<span class="blue--text">CAU</span
					><span class="red--text">DEX</span>
				</h4></v-toolbar-title
			>
			<v-menu offset-y>
				<template v-slot:activator="{ on }">
					<v-avatar
						color="grey darken-1 shrink"
						size="32"
						class="ml-auto"
						v-on="on"
						style="cursor: pointer"
					>
						<img :src="'https://sitohhang.com/caudex_backend/public/images/' + currentUser.user_photo" />
					</v-avatar>
				</template>
				<v-list dense>
					<div class="text-center">
						<div class="mt-2">{{ currentUser.user_name }}</div>
						<v-chip class="mt-2" color="orange lighten-4"
							>Administrator</v-chip
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
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item
					v-for="navigationDrawerItem in navigationDrawerItems"
					link
					tag="router-link"
					:to="navigationDrawerItem.to"
				>
					<v-list-item-icon>
						<v-icon>{{ navigationDrawerItem.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{
							navigationDrawerItem.text
						}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
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
								<v-select
									v-model="formCurrentUser.user_role"
									:items="[
										{ text: 'Customer', value: 0 },
										{ text: 'Admin', value: 1 },
									]"
									label="Role"
									prepend-icon="mdi-key"
									disabled
								>
								</v-select>
								<v-btn
									class="ma-2"
									v-if="!currentUserChangePassword"
									@click="currentUserChangePassword = true"
									>Change Password</v-btn
								>
								<v-text-field
									v-if="currentUserChangePassword"
									v-model="formCurrentUser.user_password"
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
									<v-btn color="primary" @click="changeSettingsProcess">Save</v-btn>
									<v-btn color="error" class="ml-4" @click="settingsDialog = false">Cancel</v-btn
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
import router from "@/router";
import axios from "axios";
import toastr from "toastr";
export default {
	name: "AdminLayout",
	data: () => ({
		currentUserShowPassword: false,
		currentUserChangePassword: false,
		document,
		router,
		currentUserBirthdatePicker: false,
		currentUser: JSON.parse(window.atob(router.currentRoute.params.user)),
		formCurrentUser: {
			id: 1,
			user_photo: (new Image().src =
				"https://cdn.vuetifyjs.com/images/lists/1.jpg"),
			user_name: "John Doe",
			user_birthdate: "2022-01-21",
			user_email: "stillman@gmail.com",
			user_role: 0,
			user_verification: 1,
		},
		settingsDialog: false,
		drawer: null,
		navigationDrawerItems: [
			{
				icon: "mdi-home",
				text: "Dashboard",
				to: "/Admin/" + router.currentRoute.params.user + "/" + router.currentRoute.params.access_token + "/Dashboard/",
			},
			{
				icon: "mdi-account",
				text: "Users",
				to: "/Admin/" + router.currentRoute.params.user + "/" + router.currentRoute.params.access_token + "/Users",
			},
			{
				icon: "mdi-book-open-variant",
				text: "Books",
				to: "/Admin/" + router.currentRoute.params.user + "/" + router.currentRoute.params.access_token + "/Books",
			},
			{
				icon: "mdi-cash",
				text: "Subscriptions",
				to: "/Admin/" + router.currentRoute.params.user + "/" + router.currentRoute.params.access_token + "/Subscriptions",
			},
		],
	}),
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
								Authorization: "Bearer " + router.currentRoute.params.access_token,
							},
						}
					)
					.then((response) => {
						toastr.success("Account updated!");
						this.currentUser = response.data.data;
						router.push(
							"/Admin/" +
								window.btoa(
									JSON.stringify(response.data.data)
								) +
								"/" +
								this.access_token +
								"/Dashboard/"
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
							Authorization: "Bearer " + router.currentRoute.params.access_token,
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
