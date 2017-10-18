<template>
  <div id="app">
    <!-- year, month, day MVP; later: parts -> part -->
    <datepicker v-if="dates" v-bind="dates"></datepicker>
    <!-- <cell v-bind="year"></cell>
    <cell v-bind="month"></cell>
    <cell v-bind="day"></cell> -->
    <timepicker v-if="times" v-bind="times"></timepicker>
    <!-- <cell v-bind="hour"></cell>
    <cell v-bind="minute"></cell>
    <cell v-bind="second">  </cell> -->
    <!-- <cell
      v-for="unit in units"
      :key="unit"
      :unit="unit"
      :start="start"
      :end="end"
      :format="unit =='month' && monthFormat || unit =='day' && dayFormat"
      >
    </cell> -->
  </div>
</template>

<script>
import cell from './components/cell'
import {Calendar} from 'calendar';
export default {
  name: 'vue-d-you-look-at-the-time',
  props:['units','start', 'end', 'dayFormat', 'monthFormat', 'calendar'],
  created(){
    console.log(this.units);
  },
  data(){
    // this.units;
    debugger;
    let [startDate, endDate] = [this.start, this.end].map(d=>new Date(d));
    return{
      year:{
        min: startDate.getFullYear(),
        max: startDate.getFullYear()
      },
      month: {
        // depends on year?
        min: startDate.get
      },
      day: {
        // depends on month & year
      },
      hour:{

      };
    let minute = {};
    let second = {};
    // let millisecond = {}
    return {
      units:['day'], start:'2016-01-01', end:'2017-01-01'};
  },
  computed:{
    day(){
      let cal = new Calendar(this.year, this.month);
    }
  },
  components: {
    cell
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
