<template>
  <v-select :options="values"></v-select>
</template>
<script>
import vSelect from 'vue-select';

export default {
  props:['capitalized']
  data(){
    return this.capitalized ? {values:['AM', 'PM']} : {values:['am', 'pm']};
  }
  components :{
    'v-select': vSelect
  }
}

</script>
