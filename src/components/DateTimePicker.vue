<template>
  <div class="date-time-picker">
    <time-picker
      class="time-picker"
      :id="timeId"
      :name="timeName"
      :min="minTime"
      :max="maxTime"
      :required="timeRequired"
      :value="value"
      @input="setTime"
    ></time-picker>
    <date-picker
      class="date-picker"
      :id="dateId"
      :name="dateName"
      :min="minDate"
      :max="maxDate"
      :required="dateRequired"
      @input="setDate"
    ></date-picker>
  </div>
</template>
<script>
import {
  testDateValid, stringOrNumber, worksAsDate, worksAsTime, toDateString,
  toTimeString
} from '../utils.js';
import TimePicker from './TimePicker.vue';
import DatePicker from './DatePicker.vue';

export default {
  props:{
    minTime: worksAsTime,
    minDate: worksAsDate,
    maxTime: worksAsTime,
    maxDate: worksAsDate,
    // defaultTime: worksAsTime,
    // defaultDate: worksAsDate,
    value: {validator: testDateValid},
    dateRequired: {type: Boolean},
    timeRequired: {type: Boolean},
    timeId: stringOrNumber,
    timeName: stringOrNumber,
    dateId: stringOrNumber,
    dateName: stringOrNumber
  },
  data() {
    return this.value
      ? {time: this.value || '', date: this.value || ''}
      : {time: null, date: null};
  },
  computed: {
    ready(){
      return this.time && this.date;
    },
    computedValue(){
      if (this.ready) return new Date(`${this.date} ${this.time}`);
    },
    // defaultTime(){
    //   return this.value
    // }
  },
  methods: {
    setTime(value){
      this.time = value;
      this.$emit('input:time', value);
      if (this.ready) this.$emit('input', this.computedValue);
    },
    setDate(value) {
      this.date = value;
      this.$emit('input:date', value);
      if (this.ready) this.$emit('input', this.computedValue);
    }
  },
  components: {TimePicker, DatePicker},
}
</script>
<style scoped>
  .time-picker, .date-picker {
    display: inline-block;
    border: none;
  }
  .date-time-picker {
    border: 1px solid #000;
    display: inline-block;
  }
</style>
