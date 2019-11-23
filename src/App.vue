<template>
  <div id="app">
    <WeatherMain 
      v-bind:weatherData="currentWeatherData" 
      v-bind:locationData="locationData"
    />
  </div>
</template>

<script>
import WeatherMain from './components/WeatherMain.vue'

export default {
  name: 'app',
  components: {
    WeatherMain
  },
  data() {
    return {  
      err: undefined,
      currentWeatherData: {
      
      },
      locationData: {
        // Currently searched location
        searchLocation: '--',
        
        // Recent locations searched by the user
        searchedLocations: []
      }
      
    }
  },
  methods: {
    fetchWeatherData() {
      console.log("penn station?");
    },
    updatePlace(place) {
      console.log(place)
    }
  },
  mounted() {
    this.fetchWeatherData();
    console.log(`${process.env.VUE_APP_GOOG_KEY}`)
    console.log(`Shout out to DarkSky: ${process.env.VUE_APP_DARKSKY_KEY}`)

  }
}
</script>

<style>
html, body {
	font-family: "Roboto", sans-serif;
	color: #ffffff;
}
input[type=text]::placeholder {
	color: #ffffff;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
