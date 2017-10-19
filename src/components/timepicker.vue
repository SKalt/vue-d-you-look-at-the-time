<template>
  <span>
  <v-select
  class="hours"
  v-if="hours"
  :placeholder="hours"
  :options="hourOptions"
  :value.sync="value.hours"
  :onChange="update"
  ></v-select>
  <v-select
  class="am-pm"
  v-if="amPm"
  :options="amPmOptions"
  :value.sync="value.amPm"
  :onChange="update"></v-select>
  <span v-if="minutes || seconds">{{seperator}}</span>
  <v-select
  class="minutes"
  v-if="minutes"
  :placeholder="minutes"
  :options="minuteOptions"
  :value.sync="value.minutes"
  :onChange="update"
  ></v-select>
  <span v-if="seconds">
    {{seperator}}
  </span>
  <v-select
  class="seconds"
  v-if="seconds"
  :placeholder="seconds"
  :options="secondsOptions"
  :value.sync="value.seconds"
  :onChange="update"
  ></v-select>
  </span>
</template>
<script>
  import {range} from '../ranges.js';
  import vSelect from 'vue-select';
  export default {
    props:{
      'start':{
        type:[String,Date],
        default: ()=>new Date(0,0,0,0,0),
        validator: function(value){
          return !isNaN(new Date(value).getTime());
        }
      },
      'end':{
        default: ()=>new Date(0,0,23,59,59),
        validator: function(value){
          return !isNaN(new Date(value).getTime());
        }
      },
      'pad':null, // whether to pad numbers with zeros
      'formatterFn':{
        type:Function,
        default: x=>x,
        validator: (fn)=>{
          return fn.constructor      == Function
            &&   fn('a').constructor == String
            &&   fn('').constructor  == String;
        }
      },
      'hours': String,
      'hour-interval': {
        validator: (val)=> Number.isInteger(val) && val > 0
      },
      'am-pm': {
        type: String,
        default:'uppercase'
      },
      'minutes':String,
      'minute-interval':{
        validator: (val)=> Number.isInteger(val) && val > 0
      },
      'seconds': String,
      'second-interval': {
        type:Number,
        required:false,
        validator: (val)=> Number.isInteger(val) && val > 0
      },
      'seperator': {
        type: String,
        default: ':'
      },
      onChange:{
        type:Function,
        default:()=>'' // pass
      }
    },
    data(){
      // pass in start, end as Dates or things that parse to Dates.
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
      this.start = new Date(this.start);
      this.end = new Date(this.end);
      let interval = new Date(this.end - this.start);
      if (interval > 1000 * 60 * 60 * 2) this.hours = this.hours || 'HH';
      if (interval > 1000 * 60 * 2) this.minutes = this.minutes || 'mm';
      //TODO: don't repeat yourself below
      const rval = {
        hourOptions: range(
          this.start.getHours(),
          this.end.getHours()
        ).map(number => {
          return {
            value:number,
            label:this.formatterFn(`${number}`.padStart(this.pad ? 2:0, '0'))
          };
        }),
        minuteOptions:range(
          this.start.getMinutes(),
          this.end.getMinutes()
        ).map(number =>{
          return {
            value:number,
            label: this.formatterFn(`${number}`.padStart(this.pad ? 2:0, '0'))
          };
        }),
        secondsOptions:range(
          this.start.getSeconds(),
          this.end.getSeconds()
        ).map(number =>{
          return {
            value:number,
            label: this.formatterFn(`${number}`.padStart(this.pad ? 2:0, '0'))
          };
        }),
        value: {
          hours: this.start.getHours(),
          amPm: (this.start.getHours() > 12 && 12) || 0,
          minutes:this.start.getMinutes(),
          seconds:this.start.getSeconds()
        },
        amPmOptions: [
          {value: 0, label: this.amPm == 'lowercase' ? 'am' : 'AM'},
          {value: 12, label: this.amPm == 'lowercase' ? 'pm' : 'PM'}
        ]
      };
      console.log(rval);
      return rval;
    },
    methods:{
      update(e){
        this.$emit('update', this.value);
        this.onChange(this.value);
      }
    },
    components: {vSelect}
  }
</script>
