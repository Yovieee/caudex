<template>
	<v-container>
		<v-row>
			<v-col>
				<canvas id="newUsersChart"></canvas>
			</v-col>
			<v-col>
				<canvas id="readsChart"></canvas>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<canvas id="newSubscriptionsChart"></canvas>
			</v-col>
			<v-col>
				<canvas id="loginChart"></canvas>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import Chart from "chart.js/auto";
import axios from "axios";
import router from "@/router";
import { ref, onMounted } from "vue";
export default {
	name: "AdminAnalyticsComponent",
	setup() {
		//get data;
		let users = ref([]);
		onMounted(() => {
			axios.get('https://sitohhang.com/caudex_backend/public/api/users',
				{
					headers: {
						Authorization: "Bearer " + router.currentRoute.params.access_token,
					},
				})
				.then(response => {
					users.value = response.data.data;
				})
				.catch(error => {
					console.log(error);
				});
			let df = new dfd.DataFrame(users.value);
			df.print()
			//newUsersChart
			const charts = document.getElementById("newUsersChart");
			var newUsersDate = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]; //x axes
			var numberOfUsers = [150, 90, 95, 130, 85, 180, 85]; //y axes
			new Chart(charts, {
				type: "line",
				data: {
					labels: newUsersDate, //x-axes data
					datasets: [
						{
							label: "Number of new users day by day",
							data: numberOfUsers, //y-axes data
							borderColor: "blue",
							fill: false,
						},
					],
				},
			});
			//readsChart
			const charts2 = document.getElementById("readsChart");
			var readsDate = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]; //x axes
			var numberOfReads = [150, 90, 95, 130, 85, 100, 85]; //y axes
			new Chart(charts2, {
				type: "line",
				data: {
					labels: readsDate, //x-axes data
					datasets: [
						{
							label: "Number of reads day by day",
							data: numberOfReads, //y-axes data
							borderColor: "yellow",
							fill: false,
						},
					],
				},
			});
			//newSubscriptionsChart
			const charts3 = document.getElementById("newSubscriptionsChart");
			var newSubscriptionsDate = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]; //x axes
			var numberOfNewSubscriptions = [150, 90, 95, 130, 85, 100, 85]; //y axes
			new Chart(charts3, {
				type: "line",
				data: {
					labels: newSubscriptionsDate, //x-axes data
					datasets: [
						{
							label: "Number of new subscriptions day by day",
							data: numberOfNewSubscriptions, //y-axes data
							borderColor: "green",
							fill: false,
						},
					],
				},
			});
			//loginChart
			const charts4 = document.getElementById("loginChart");
			var loginDate = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]; //x axes
			var numberOfLogins = [150, 90, 95, 130, 85, 100, 85]; //y axes
			new Chart(charts4, {
				type: "line",
				data: {
					labels: loginDate, //x-axes data
					datasets: [
						{
							label: "Number of logins day by day",
							data: numberOfLogins, //y-axes data
							borderColor: "red",
							fill: false,
						},
					],
				},
			});
		})
		return {
			users,
		};
	},
};
</script>
