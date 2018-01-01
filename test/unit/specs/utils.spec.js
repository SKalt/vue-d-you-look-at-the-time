import * as utils from '@/utils.js';
import {assert} from 'chai';
describe('worksAsTime', ()=>{
  it('accepts ISO strings', ()=>{
    assert.equal(utils.worksAsDate.validator('2017-12-01T06:59:00.000Z'), true);
  });
  it('accetps Dates', ()=>{
    const date = new Date('2017-12-01T06:59:00.000Z');
    assert.equal(utils.worksAsDate.validator(date), true);
  });
  it('accepts datestrings', ()=>{
    assert.equal(utils.worksAsDate.validator('2017-12-01'), true);
  });
});

describe('toDateString', ()=>{
  it('correctly turns Dates into datestrings', ()=>{
    const date = new Date('2017-12-01T06:59:00.000Z');
    assert.equal(utils.toDateString(date), '2017-12-01');
  });
})
describe('toTimeString', ()=>{
  it('correctly turns Dates into timestrings', ()=>{
    const date = new Date('2017-12-01T06:59:00.000Z');
    assert.equal(utils.toTimeString(date), '01:59');
  })
  it('isn\'t fucked', ()=>{
    console.log(new Date().toLocaleTimeString());
    console.log(new Date().toLocaleTimeString('en-US'));
    console.log(new Date().toLocaleTimeString('en-US', {hour12: false}));

  })
});
