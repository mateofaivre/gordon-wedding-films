<template>
	<v-app>
		<!--    <v-app-bar-->
		<!--        app-->
		<!--        color="primary"-->
		<!--        dark-->
		<!--    >-->
		<!--    </v-app-bar>-->
		<Header/>

		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>
import Header from './components/Header'


export default {
	name:       'App',
	metaInfo:   {
		// if no subcomponents specify a metaInfo.title, this title will be used
		title: '🪄',
		// all titles will be injected into this template
		titleTemplate: '%s | Gordon Wedding Films'
	},
	components: {
		Header
	},
	data:       () => ( {} ),
	mounted() {
	}
};
</script>

<style lang="scss">
html {
	scroll-behavior: smooth;
	scroll-padding-top: 100px;
}

body {
	.v-application {
		&#app {
			font: normal 16px $gt-eesti;
			color: $white;
		}

	}

	.v-main {
		padding: 0;
	}
}

img[lazy=loading] {
	opacity: 0;
	/*your style here*/
}
img[lazy=error] {
	/*your style here*/
}
img[lazy=loaded] {
	opacity: 1;
	/*your style here*/
}

.lazy {
	opacity: 0;
	transition: opacity 1s $easeInOutQuad;
}

.logo {
	font: 700 70px $voyage;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;

	.logo--bottom {
		font-weight: 350;
		font-size: 17px;
		font-family: $gt-eesti;
		letter-spacing: 0.4em;
		text-align: center;
	}
}

.title--2 {
	font: 700 60px/60px $voyage;
}

.title--3 {
	font: 700 48px/48px $voyage;
}

.text {
	font-size: 18px;
	line-height: 30px;

	a.text--link {
		color: $gdn-pink;
		transition: color .3s $transitionEase;

		@media (min-width: $mobileMin) {
			&:hover {
				opacity: .7;
			}
		}

	}
}

@media (max-width: $mobileMax) {
	.title--2 {
		font-size: 40px;
		line-height: 45px;
	}


	.title--3 {
		font-size: 30px;
		line-height: 35px;
	}
}

</style>
