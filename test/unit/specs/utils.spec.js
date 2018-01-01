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
    assert.match(utils.toTimeString(date), /^(0|1)\d:[1-5]\d$/);
  });
});
