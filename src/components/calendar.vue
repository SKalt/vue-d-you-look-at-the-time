<template>
  <table>
    <thead>
      <th @click="decrementMonth">
        «
      </th>
      <th colspan=5>
        {{month.name}}
      </th>
      <th @click="incrementMonth">
        »
      </th>
    </thead>
    <thead v-if="includeHeader">
      <th v-for="weekday in weekdays">
        {{weekday.name}}
      </th>
    </thead>
    <tbody>
      <tr v-for="week in weeks">
        <td v-for="day in week"
          :class="{selected:selected == new Date(this.year, this.month, day)}"
          @click="selectDay"
          v-if="day > 0"
          >
          {{day}}
        </td>
        <td v-else></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import {Calendar} from 'calendar';
import dayNames from '../json/day-names.json';
import monthNames from '../json/month-names.json'
export default {
  //@keypress.39="incrementDay"
  // @keypress.37="decrementDay"
  props:[
    'includeHeader', 'monthFormat', 'dayFormat', 'firstDay','start', 'end'
  ],
  data(){
    // firstDay must be an integer > 0, where 0<-Sunday
    let cal = new Calendar(this.firstDay);
    let _start= new Date(this.start);
    let _end = new Date(this.end);
    return {
      weekdays: dayNames[this.dayFormat],
      month: {
        value: _start.getMonth(),
        name: monthNames[this.monthFormat][_start.getMonth];
      },
      year: _start.getFullYear(),
      selected: undefined,
      day: 1
    };
  },
  calculated:{
    weeks(){
      let cal = new Calendar(this.firstDay);
      return cal.getMonthDays(this.year, this.month);
    }
  },
  methods:{
    incrementDay(){
      this.selected = new Date(
        this.year,
        this.month.value,
        this.selection.getDay() + 1
      );
    },
    incrementMonth(){
      if (this.month.value == 12){
        this.month = {
          value: 1,
          name: monthNames[this.monthFormat[1]]
        };
        this.year++;
      } else {
        this.month = {
          value: this.month.value + 1,
          name: monthNames[this.monthFormat][this.month.value + 1]
        }
      }
    },
    decrementDay(){
      this.selected = new Date(
        this.year,
        this.month.value,
        this.selection.getDay() + 1
      );
    },
    decrementMonth(){
      
    },
    selectDay(event){
      this.selected = event.target.innerText
    }
  }
}
</script>
