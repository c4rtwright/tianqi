<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds weather-side">
          <header>
            <p>the.weather</p>
          </header>
          <div class="weather-basic">
            <div class="weather-info">
              <p class="temp">{{weatherData.temp}}&deg;</p>
                <div class="loc-info">
                  <div class="location">
                    <h2 class="title is-2">{{locationData.currentLocation.address}}</h2>
                    <TimeClock />
                  </div>    	
                </div>
                <div class="weather-descrip">
                  <div class="descrip-icon">
                    <i class="fas fa-sun"></i>
                  </div>
                  <p class="descrip"></p>
                </div>
              </div>
            </div>
          </div>
      <div class="column details-side">
      <div class="location-search">
      <div class="field">
      <div class="control">
        <gmap-autocomplete
          class="input loc-value"
          @place_changed="setLocData">
        </gmap-autocomplete>
        <p class="help">Put in a city name (e.g.: Stockton)</p>
      </div>
      </div>
      <div class="search">
      <i class="fas fa-search"></i>
      </div>
      </div>
      <div class="searched-locs">
      <header>
      <p>Recent Locations</p>
      </header>
      <div class="loc">
      <p>
        <i class="fas fa-times"></i>
      </p>
      </div>
      </div>
      <div class="weather-details">
      <header>
      <p>Weather Details</p>    
      </header>
      <div class="detail">
      <span class="det-key">Clouds</span>
      <span class="cloud"></span>
      </div>
      <div class="detail">
      <span class="det-key">Humidity</span>
      <span class="humidity"></span>
      </div>
      <div class="detail">
      <span class="det-key">Wind</span>
      <span class="wind"></span>
      </div>
      <div class="detail">
      <span class="det-key">Percipitation</span>
      <span class="rain">--</span>
      </div>
      </div>
      </div>
      </div>
    </div>
  </section>
</template>
<script>
import TimeClock from './TimeClock.vue'
import axios from 'axios'

export default {
  name: 'WeatherMain',
  components: {
    TimeClock
  },
  data() {
    return {
      locationData: {
        places: [],
        currentLocation: {
          lat: '',
          lon: '',
          address: ''
        }
      },
      weatherData: {
        description: '--',
        wind: '--',
        humidity: '--',
        percip: '--',
        clouds: '--',
        temp: '--'
      }
    }
  },
  methods: {
    setLocData: function(data) {
      console.log('setting loc data')
      if (data) {
        console.log(data.geometry.location.lat());
        console.log(data.geometry.location.lng());

        this.locationData.places.push(data.formatted_address)
        
        this.locationData.currentLocation.address = data.formatted_address;
        this.locationData.currentLocation.lat = data.geometry.location.lat();
        this.locationData.currentLocation.lon = data.geometry.location.lng();

        this.fetchWeatherData(this.locationData.currentLocation)
      }
    },
    fetchWeatherData: function(loc_data) {
      console.log(`fetching weather data for ${loc_data}`);

      axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.locationData.currentLocation.lat},${this.locationData.currentLocation.lon}`, {
        headers: {
          'X-Requested-With': 'xhr',
          'Content-Type': "application/json",
          'Origin': 'https://api.darksky.net'
        }
      }).then(function(res){
        if (res.data) {
          console.log('got weather data!');
          console.log(res.data);
        }
      }).catch(function(err) {
        console.log(err);
      }).finally(function() {
        console.log("it's happenin to me right in front of my face")
      });
    }
  }
}
</script>

<style>
  .weather-side > header > p,
  .details-side .input,
  .weather-info > .temp,
  .time-date,
  .location > .title,
  .details-side {
  color: #ffffff;
  }

  .column.weather-side {
  padding: 4em;
  background: url("./../assets/bg.jpg") no-repeat center center/cover;
  }
  .weather-side > header > p,
  .searched-locs > header > p {
  font-weight: bold;
  }
  .loc-info {
  text-align: center;
  }
  .loc-value.input {
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid white;
  box-shadow: none;
  border-radius: 0;
  background: transparent;
  outline: none;
  }

  .weather-basic {
  margin: 25rem 0 0 0;
  }
  .weather-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  }
  .weather-info > .temp {
  font-size: 8rem;
  }
  .location > .title {
  margin-bottom: .5rem;
  }
  .time-date > span {
  display: block;
  }
  .weather-descrip {
  text-align: center;
  font-size: 1.5em;
  }
  .details-side {
  background-color: #b1bfd8;
  background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);
  }
  .searched-locs, .weather-details {
  padding: 1.5em;
  }
  .loc > p > i {
  cursor: pointer;
  }
  .searched-locs > .loc {
  margin: 1em;
  font-size: 1.15em;
  }
  .location-search {
  padding: 1em 0 0 0;
  display: flex;
  justify-content: space-between;
  }
  .location-search > .field {
  width: 100%;
  }
  .location > .title {
  text-transform: capitalize;
  }
  .weather-details > header {
  font-weight: bold;
  margin: 0 0 1em 0;
  }
  .weather-details > .detail {
  display: flex;
  justify-content: space-between;
  margin: 0 0 1em 0;
  }
  .search {
  position: relative;
  top: -1.7em;
  right: -1.7em;
  }
  .search > i {
  padding: 1em 1.5em 1em 1em;
  color: #000000;
  background-color: rgba(255,255,255, .5);
  font-size: 1.5em;
  cursor: pointer;
  }
</style>