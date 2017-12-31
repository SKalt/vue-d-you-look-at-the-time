<template>
  <time-or-date
    type="date"
    :value="value"
    @input="emit"
    :process="toDateString"
    />
</template>
<script>
  import {worksAsDate, toDateString, data, emit} from '../utils.js';
  import TimeOrDate from './TimeOrDate.vue';
  let {props} = TimeOrDate;
  props = {
    ...props,
    min: worksAsDate,
    max: worksAsDate,
    value: worksAsDate
  };
  delete props.type;
  delete props.process;
  export default {
      props, data,
      components: {TimeOrDate},
      methods: {
        toDateString,
        emit
    }
  }
</script>
