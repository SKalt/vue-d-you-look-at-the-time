<template>
  <time-or-date type="time" @input="setValue"></time-or-date>
</template>
<script>
  import TimeOrDate from './TimeOrDate.vue';
  let {props, methods, data} = TimeOrDate;
  props = {...props};
  delete props.type;
  export default {
      props, methods, data
      components: {TimeOrDate}
  }
</script>
