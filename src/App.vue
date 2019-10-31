<template>
  <div id="app">
    <GMapAutocomplete />
    <WeatherMain 
      v-bind:weatherData="currentWeatherData" 
      v-bind:locationData="locationData"
    />
  </div>
</template>

<script>
import WeatherMain from './components/WeatherMain.vue'
import GMapAutocomplete from './components/GMapAutocomplete.vue'

export default {
  name: 'app',
  components: {
    WeatherMain,
    GMapAutocomplete
  },
  data() {
    return {  
      err: undefined,
      currentWeatherData: {
          description: '--',
          wind: '--',
          humidity: '--',
          percip: '--',
          clouds: '--',
          temp: '--'
      },
      locationData: {
        searchedLocations: [],
        searchLocation: '--',
        // Used to map 'getUTCDate' to text representation
        dayMap: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ]
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
