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
    // console.log(comp.time)
    assert.equal(comp.value, propsData.value);
    assert.ok(comp.ready, 'component not ready');
    console.log(comp.$children[0].processed.value);
    // console.log('comp.time', comp.time, comp.date);
    // assert.equal(comp.$childen[0].processed.value, '06:59')
    // assert.equal(comp.computedValue, new Date(propsData.value));
  });
  it('renders when passed a Date', ()=>{
    const propsData = {value: new Date("2017-12-01T06:59:00.000Z")};
    const comp = mount(propsData);
    // console.log(comp.time)
    assert.equal(comp.value, propsData.value);
    assert(comp.ready);
    console.log('comp.time', comp.time, comp.date);
    assert.equal(comp.time, '01:59')
    assert.deepEqual(comp.computedValue, new Date(propsData.value));
  });
});
