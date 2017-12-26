<template>
  <input
    :type="type"
    :min="min"
    :max="max"
    :value="defaultValue"
    :required="required"
    :name="name"
    :id="id"
    @input="setValue"
    />
</template>
<script>
import {isDate, stringOrNumber} from '../utils.js';

export default {
  props: {
    id: stringOrNumber,
    name: stringOrNumber,
    min: isDate,
    max: isDate,
    defaultValue: isDate,
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
    return {value: ''};
  },
  methods:{
    setValue(e){
      this.value = e.target.value;
      this.$emit('input', this.value);
    }
  }
}
</script>
