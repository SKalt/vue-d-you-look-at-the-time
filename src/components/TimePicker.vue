<template>
  <time-or-date
    type="time"
    :value="computedValue"
    @input="emit"
    :process="toTimeString"
  />
</template>
<script>
  import {worksAsTime, toTimeString, data, emit} from '../utils.js';
  import TimeOrDate from './TimeOrDate.vue';
  let {props} = TimeOrDate;
  props = {
    ...props,
    min: worksAsTime,
    max: worksAsTime,
    value: worksAsTime
  };
  delete props.type;
  delete props.process;
  export default {
    props,
    components: {TimeOrDate},
    data,
    methods: {
      toTimeString,
      emit
    }
  }
</script>
