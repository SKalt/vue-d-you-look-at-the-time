<template>
  <input
    type="date"
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
import {worksAsTime, toDateString, data, methods, props} from '../utils.js';

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
        value: toDateString(this.value),
        min: toDateString(this.min),
        max: toDateString(this.max)
      }
    }
  },
  methods
}
</script>
