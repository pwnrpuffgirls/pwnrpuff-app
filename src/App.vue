<template>
	<VApp>
		<v-app-bar
			app
			color="primary"
			dark
		>
			<div class="d-flex align-center">
				<v-img
					alt="Heart picture"
					class="shrink mr-2"
					contain
					src="./assets/pictures/small_heart.png"
					transition="scale-transition"
					width="40"
				/>

				<h1>Pwnrpuff</h1>
			</div>

			<v-spacer></v-spacer>

			<!---<v-btn
				href="https://github.com/vuetifyjs/vuetify/releases/latest"
				target="_blank"
				text
			>
				<span class="mr-2">Latest Release</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>--->
		</v-app-bar>

		<VMain>
			<router-view/>
		</VMain>
	</VApp>
</template>

<script>

export default {
	name: 'App',

	data: () => ({
		//
	}),
};
</script>
