<template>
  <div class="time-date">
    <span class="time">
      {{date}}
      {{time}} 
      - 
      {{dayMap[new Date().getDay()]}}
    </span>
  </div>
</template>

<script>

export default {
  name: 'TimeClock',
  data() {
     return {
       date: '',
       time: '',
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
  },
  methods: {
    updateTime: function() {
      let cd = new Date();
      this.time = `${this.zeroPadding(cd.getHours(), 2)}:${this.zeroPadding(cd.getMinutes(), 2)}:${this.zeroPadding(cd.getSeconds(), 2)}`;
      this.date = `${this.zeroPadding(cd.getFullYear(), 4)}-${cd.getMonth()+1}-${this.zeroPadding(cd.getDate(), 2)}`;
    },
    zeroPadding: function(num, digit) {
      let zero = '';
      for(var i = 0; i < digit; i++) {
        zero += '0';
      }
      
      return (zero + num).slice(-digit);
    }
  },
  mounted() {
    console.log('TimeClock component mounted');

    // Update the current time every second
    setInterval(function() {
      this.updateTime();
    }.bind(this), 1000)
  }
}

</script>
