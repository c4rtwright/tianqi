<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          class="input loc-value"
          @place_changed="setPlace">
        </gmap-autocomplete>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  name: "GMapAutocomplete",
  data() {
    return {};
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      console.log('calling setPlace()');

      if (typeof place !== "undefined") {
        this.places.push(place.formatted_address)
        this.currentPlace = place;
        this.$emit('place_changed_too', place.formatted_address);
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
