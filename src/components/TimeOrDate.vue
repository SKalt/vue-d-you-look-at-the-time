<template>
  <input
    :type="type"
    :min="processed.min"
    :max="processed.max"
    v-model="processed.value"
    :required="required"
    :name="name"
    :id="id"
    @input="bubbleValue"
    />
</template>
<script>
import {isDate, stringOrNumber} from '../utils.js';

export default {
  props: {
    process: Function,
    id: stringOrNumber,
    name: stringOrNumber,
    min: {},
    max: {},
    // defaultValue: {},
    value: {},
    required:{ type: Boolean },
    type: {
      type: String,
      required: true,
      validator(value) {
        return /^(time|date)$/i.test(value);
      }
    }
  },
  data(){
    return {
      processed: {
        min: this.process(this.min),
        max: this.process(this.max),
        value: this.process(this.value)
      }
    };
  },
  methods:{
    bubbleValue() {
      // this.value = e.target.value;
      this.$emit('input', this.processed.value);
    }
  }
}
</script>
