<!--
On cell, like any of YYYY:MM:DD:HH:SS...etc
 -->
<template>
  <v-select
  v-model="value"
  :options="values"
  ></v-select>
</template>

<script>
import vSelect from 'vue-select';
import ranges from '../time.js';
export default {
  name: 'cell',
  props:['unit', 'start', 'end', 'format'],
  data (){
    debugger;
    let startDate = new Date(this.start);
    let endDate = new Date(this.end);
    let _unit;
    if(this.unit == 'year'){
      _unit = 'FullYear';
    } else if (this.unit == 'day') {
      _unit = 'Day';
    } else {
      _unit = this.unit[0].toUpperCase() + this.unit.slice(1) + 's';
    }
    console.log(startDate, startDate[`get${_unit}`]);
    let [min, max] = [startDate, endDate].map(d=>d[`get${_unit}`]());
    let values = ranges(this.unit, min, max, this.format);
    return {values, value:min};
  },
  methods: {
    setSelection(){
      // return the selected value to the parent body.
    }
  },
  components:{ 'v-select':vSelect }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
