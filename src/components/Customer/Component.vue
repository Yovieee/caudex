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
						></v-avatar>
					</template>
					<v-list>
						<div class="text-center">
							<div class="mt-2">{{ currentUser.user_name }}</div>
							<v-chip class="mt-2" color="orange lighten-4">{{
								currentUser.user_membership
							}}</v-chip>
						</div>
						<hr />
						<v-list-item @click="settingsDialog = true">
							<v-list-item-icon>
								<v-icon>mdi-cog</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>Settings</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item link>
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
					<v-toolbar-items>
						<v-btn dark text @click="settingsDialog = false">
							Save
						</v-btn>
					</v-toolbar-items>
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
									:v-model="
										typeof formCurrentUser.user_photo ==
										'string'
											? null
											: formCurrentUser.user_photo
									"
									style="display: none"
									id="currentUserPhoto"
									accept="image/*"
									@change="setCurrentUserPhotoPreview"
								></v-file-input>
								<div class="text-center">
									<img
										:src="formCurrentUser.user_photo"
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
								>
								</v-text-field>
								<v-text-field
									v-model="formCurrentUser.user_email"
									label="Email"
									prepend-icon="mdi-email"
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
									<v-btn color="primary">Save</v-btn>
									<v-btn color="error" class="ml-4"
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
export default {
	data() {
		return {
			settingsDialog: false,
			currentUserDialog: false,
			currentUserChangePassword: false,
			currentUserShowPassword: false,
			currentUserBirthdatePicker: false,
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
			currentUser: {
				id: 1,
				user_photo: (new Image().src =
					"https://cdn.vuetifyjs.com/images/lists/1.jpg"),
				user_name: "John Doe",
				user_birthdate: "2022-01-21",
				user_email: "stillman@gmail.com",
				user_role: 0,
				user_verification: 1,
				user_membership: "Premium",
			},
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
	},
};
</script>
