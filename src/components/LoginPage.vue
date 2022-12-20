<template>
	<v-app>
		<header
			class="header-area header-sticky wow slideInDown"
			data-wow-duration="0.75s"
			data-wow-delay="0s"
		>
			<div class="container">
				<div class="row">
					<div class="col-14">
						<nav class="main-nav">
							<router-link to="/" class="logo">
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
										<h4><span class="blue--text">CAU</span><span class="red--text">DEX</span></h4>
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

		<v-spacer></v-spacer>
		<v-spacer></v-spacer>
		<v-main>
			<v-app id="inspire">
				<span class="bg"></span>
				<v-content>
					<v-container fluid fill-height>
						<v-layout align-center justify-center>
							<v-flex xs12 sm8 md4>
								<v-card class="elevation-12">
									<v-toolbar dark color="blue">
                              <v-toolbar-title>Login</v-toolbar-title>
									</v-toolbar>
									<v-card-text>
										<v-form>
											<v-text-field
											v-model="formUser.email"
												prepend-icon="mdi-email"
												name="email"
												label="Email"
												type="text"
											></v-text-field>
											<v-text-field
											v-model="formUser.password"
												id="password"
												prepend-icon="mdi-lock"
												name="password"
												label="Password"
												:append-icon="
													value
														? 'mdi-eye'
														: 'mdi-eye-off'
												"
												@click:append="
													() => (value = !value)
												"
												:type="
													value ? 'password' : 'text'
												"
											></v-text-field>
										</v-form>
									</v-card-text>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn dark color="blue" @click="loginProcess"
											>Login</v-btn
										>
									</v-card-actions>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-content>
			</v-app>
		</v-main>
	</v-app>
</template>

<script>
import axios from 'axios'
import router from '@/router'
import toastr from 'toastr'
export default {
	data() {
		return {
			value: String,
			formUser: {
				email: "",
				password: ""
			}
		};
	},
	methods: {
		loginProcess(){
			axios.post('https://sitohhang.com/caudex_backend/public/api/login', this.formUser)
			.then(response => {
				toastr.success('You have succesfully loged in!')
				if(response.data.user.user_role == 'Administrator'){
					router.push({ path: '/Admin/' + window.btoa(JSON.stringify(response.data.user)) + '/' + response.data.access_token + '/Dashboard/' })
				}else{
					router.push({ path: '/Customer/' + window.btoa(JSON.stringify(response.data.user)) + '/' + response.data.access_token + '/Homepage/' })
				}
			}).catch(()=>{
				toastr.error('Login failed!')
			})
		}

	}
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
