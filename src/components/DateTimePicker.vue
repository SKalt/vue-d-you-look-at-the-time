<template>
  <div>
    <time-picker
      :id="timeId"
      :name="timeName"
      :min="minTime"
      :max="maxTime"
      :required="timeRequired"
      :default-value="defaultTime"
      @input="setTime"
    ></time-picker>
    <date-picker
      :id="dateId"
      :name="dateName"
      :min="minDate"
      :max="maxDate"
      :required="dateRequired"
      :default-value="defaultDate"
      @input="setDate"
    ></date-picker>
  </div>
</template>
<script>
import TimePicker from './TimePicker.vue';
import DatePicker from './DatePicker.vue';
import {isDate, stringOrNumber} from '../utils.js';

export default {
  props:{
    minTime: isDate,
    minDate: isDate,
    maxTime: isDate,
    maxDate: isDate,
    defaultTime: isDate,
    defaultDate: isDate,
    dateRequired: {type: Boolean},
    timeRequired: {type: Boolean},
    timeId: stringOrNumber,
    timeName: stringOrNumber,
    dateId: stringOrNumber,
    dateName: stringOrNumber
  },
  data() {
    return {time: null, date: null};
  },
  computed: {
    ready(){
      return this.time && this.date;
    },
    value(){
      if (this.ready) return new Date(`${this.date} ${this.time}`);
    }
  },
  methods: {
    setTime(value){
      this.time = value;
      if (this.ready) this.$emit('input', this.value);
    },
    setDate(value) {
      this.date = value;
      if (this.ready) this.$emit('input', this.value);
    }
  },
  components: {TimePicker, DatePicker},
}
</script>
