<template>
  <input
    type="time"
    :min="processed.min"
    :max="processed.max"
    :value="processed.value"
    :required="required"
    :name="name"
    :id="id"
    @input="bubbleValue"
    />
</template>
<script>
  import {worksAsTime, toTimeString, data, methods, props} from '../utils.js';

  export default {
    props: {
      ...props,
      min: worksAsTime,
      max: worksAsTime,
      value: worksAsTime
    },
    data(){
      return {
        processed: {
          value: toTimeString(this.value),
          min: toTimeString(this.min),
          max: toTimeString(this.max)
        }
      }
    },
    methods
  }
</script>
