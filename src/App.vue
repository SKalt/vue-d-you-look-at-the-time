<template>
  <div id="app">
    <v-select :options="options"></v-select>
    <v-select :options="options"></v-select>
  </div>
</template>

<script>
// import cell from './components/cell'
import {Calendar} from 'calendar';
import vSelect from 'vue-select';
export default {
  name: 'vue-d-you-look-at-the-time',
  props:['units','start', 'end', 'dayFormat', 'monthFormat', 'calendar'],
  created(){
    console.log(this.units);
  },
  data(){
    return {options:[...Array(60).keys()].map(e=>`${e}`)};
    // this.units;
    // debugger;
    // let [startDate, endDate] = [this.start, this.end].map(d=>new Date(d));
    // return{
    //   year:{
    //     min: startDate.getFullYear(),
    //     max: startDate.getFullYear()
    //   },
    //   month: {
    //     // depends on year?
    //     min: startDate.get
    //   },
    //   day: {
    //     // depends on month & year
    //   },
    //   hour:{
    //
    //   };
    // let minute = {};
    // let second = {};
    // // let millisecond = {}
    // return {
    //   units:['day'], start:'2016-01-01', end:'2017-01-01'};
  },
  computed:{
    day(){
      let cal = new Calendar(this.year, this.month);
    }
  },
  components: {
    'v-select':vSelect
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
