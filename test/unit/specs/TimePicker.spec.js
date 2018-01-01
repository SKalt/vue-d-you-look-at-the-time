import Vue from 'vue';
import TimePicker from '@/components/TimePicker.vue';
import {assert} from 'chai';
describe('TimePicker', ()=>{
  const mount = (propsData) => {
    const Constructor = Vue.extend(TimePicker);
    return new Constructor({propsData}).$mount();
  };
  it('renders with an ISO string', ()=>{
    const propsData = {value: "2017-12-01T06:59:00.000Z"};
    const comp = mount(propsData);
    assert.equal(comp.value, propsData.value);
    assert.ok(comp.processed.value);
    assert.match(comp.processed.value, /^(0|1)\d:[1-5]\d$/);
  });
});
