import debug from 'debug';
debug.enable('utils:*');
export function  testDateValid(date){
  // debug('utils:testDateValid')(date);
  return (date instanceof Date) &&  !Number.isNaN(date.getDate());
}
function  testTimeString(str){
  // debug('utils:testTimeString')(str);
  return /^(0|1)\d:[0-5]\d$/.test(str)
}
function testDateString(str) {
  // debug('utils:testDateString')(str);
  return /^\d{4}-\d{2}-\d{2}$/.test(str);
}

function toLocaleTimeString(d){
  return d.toLocaleTimeString('en-US', {hour12: false}).slice(0, 5);
}
function coerce(obj, strTest, toString) {
  // debug('utils:coerce')(obj);
  if (obj){
    // debug('utils:coerce')('obj @ coerce', obj);
    if (obj.constructor === String){
      if(strTest(obj)){
        // debug('utils:coerce')('pass');
        return obj
      };
      // debug('utils:coerce')('str test not passed')
    }
    const date = new Date(obj);
    if (testDateValid(date)) {
      return toString(date);
    }
    // debug('utils:coerce')(obj, 'not valid')
  }
}
export function toTimeString(obj){
  // debug('utils:toTimeString')( obj)
  return coerce(obj, testTimeString, toLocaleTimeString);
}
export function toDateString(obj){
  return coerce(obj, testDateString, (d)=>d.toISOString().split('T')[0]);
}


export const isDate = {
  validator: testDateValid
}

export const worksAsDate = {
  validator: (value) => testDateString(toDateString(value))
}

export const worksAsTime = {
  validator: (value) => testTimeString(toTimeString(value))
}

export const stringOrNumber = {
  type: [String, Number]
}

export function emit(value){
  // debug('comp:emit')(value);
  this.computedValue = value;
  this.$emit('input', this.computedValue);
}

export const methods = {
  bubbleValue(e) {
    this.processed.value = e.target.value;
    this.$emit('input', this.processed.value);
  }
};

export const props = {
  id: stringOrNumber,
  name: stringOrNumber,
  required:{ type: Boolean },
}
