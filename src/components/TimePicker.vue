<template>
  <time-or-date type="time" @input="setValue"></time-or-date>
</template>
<script>
  import TimeOrDate from './TimeOrDate.vue';
  let {props, data} = TimeOrDate;
  props = {...props};
  delete props.type;
  export default {
      props, data,
      components: {TimeOrDate},
      methods: {
        setValue(value){
          this.value = value;
          this.$emit('input', value);
        }
      }
  }
</script>
