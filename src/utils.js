
export function  testDateValid(date){
  return (date instanceof Date) &&  !Number.isNaN(date.getDate());
}
function  testTimeString(str){
  return /^(0|1)\d:[0-5]\d$/.test(str)
}
function testDateString(str) {
  return /^\d{4}-\d{2}-\d{2}$/.test(str);
}

export function emit(value){
  this.computedValue = value;
  this.$emit('input', this.computedValue);
}

export function data(){
  return {computedValue: this.value};
}

function toLocaleTimeString(d){
  return d.toLocaleTimeString('en-US', {hour12: false});
}
function coerce(obj, strTest, toString) {
  // debugger;
  if (obj){
    if (obj.constructor === String && strTest(obj)) return obj;
    const date = new Date(obj);
    if (testDateValid(date)) {
      return toString(date);
    }
  }
}
export function toTimeString(obj){
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
