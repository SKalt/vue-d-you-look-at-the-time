<template>
  <span class="vue-d-you-look-at-the-time">
  <v-select
  data-id="hours"
  v-if="hours"
  :placeholder="String(hours) "
  :options="hourOptions"
  :onChange="val => update('hours', val)"
  ></v-select>
  <v-select
  class="am-pm"
  v-if="amPm"
  data-id="am-pm"
  :placeholder="String(value.amPm || 'AM')"
  :options="amPmOptions"
  :onChange="val => update('amPm', val)"></v-select>
  <span class="v-separator" v-if="minutes || seconds">{{seperator}}</span>
  <v-select
  data-id="minutes"
  v-if="minutes"
  :placeholder="String(minutes)"
  :options="minuteOptions"
  :onChange="val => update('minutes', val)"
  ></v-select>
  <span class="v-separator" v-if="seconds">
    {{seperator}}
  </span>
  <v-select
  class="seconds"
  data-id="seconds"
  v-if="seconds"
  :placeholder="String(seconds) "
  :options="secondsOptions"
  :onChange="val => update('seconds', val)"
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
      'pad':{
        default:true
      }, // whether to pad numbers with zeros
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
      'onChange':{
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
          interval > 1000*60**2 ? 59 :this.end.getMinutes()
        ).map(number =>{
          return {
            value:number,
            label: this.formatterFn(`${number}`.padStart(this.pad ? 2:0, '0'))
          };
        }),
        secondsOptions:range(
          this.start.getSeconds(),
          interval > 1000*60 ? 59 :this.end.getSeconds()
        ).map(number =>{
          return {
            value:number,
            label: this.formatterFn(`${number}`.padStart(this.pad ? 2:0, '0'))
          };
        }),
        amPmOptions: [ 'AM', 'PM'],
        value:{
          hours: {value:this.start.getHours()},
          amPm: {value:this.start.getHours() < 12 ? 'AM' : 'PM'},
          minutes: {value:this.start.getMinutes()},
          seconds: {value:this.start.getSeconds()}
        }
      };
      console.log(rval);
      return rval;
    },
    calculated:{
      _start(){return this.start},
      _end(){return this.end},
      value(){
        return 0;
      }
    },
    methods:{
      update(target, value){
        this.value[target] = value || this[target];
        this.$emit('update', this.value); // unpack from value.unit.value -> {unit:value}? 
        this.onChange(this.value);
      }
    },
    components: {vSelect}
  }
</script>
<style >
  .v-select {
    display:inline-block;
    width:3em;
    vertical-align: middle;
  }
  .vue-d-you-look-at-the-time{
    display: inline-block;
    line-height: 3em;
  }
  i.open-indicator {
    display:none!important;
  }
  span.selected-tag{
    position: absolute;
    padding-top: 0px!important;
    margin-top: 3px;
  }
  span.v-separator {
    display: inline-block;
    position:relative;
    vertical-align: middle;
  }
</style>
