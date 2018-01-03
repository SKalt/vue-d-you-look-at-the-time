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
  watch : {
    value(value) {
      this.processed.value = toDateString(value);
    },
    min(min) {
      this.processed.min = toDateString(min)
    },
    max(max) {
      this.processed.max = toDateString(max)
    }
  },
  methods
}
</script>
