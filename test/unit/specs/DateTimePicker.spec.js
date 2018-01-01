import Vue from 'vue';
import DateTimePicker from '@/components/DateTimePicker.vue';
import {assert} from 'chai';
describe('DateTimePicker', ()=>{
  const mount = (propsData) => {
    const Constructor = Vue.extend(DateTimePicker);
    return new Constructor({ propsData}).$mount();
  };
  it('renders when passed an ISO string', ()=>{
    const propsData = {value: "2017-12-01T06:59:00.000Z"};
    const comp = mount(propsData);
    assert.equal(comp.value, propsData.value);
    assert.ok(comp.ready, 'component not ready');
    assert.match(comp.time, /^(0|1)\d:[1-5]\d$/)
    assert.deepEqual(comp.computedValue, new Date(propsData.value));
  });
  it('renders when passed a Date', ()=>{
    const propsData = {value: new Date("2017-12-01T06:59:00.000Z")};
    const comp = mount(propsData);
    assert.equal(comp.value, propsData.value);
    assert.ok(comp.ready);
    assert.match(comp.time, /^(0|1)\d:[1-5]\d$/)
    assert.deepEqual(comp.computedValue, new Date(propsData.value));
  });
});
