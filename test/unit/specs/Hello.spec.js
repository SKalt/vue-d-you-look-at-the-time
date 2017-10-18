import Vue from 'vue'
import {range, second, minute, hour, day, month, year} from '@/ranges';
import {paddedRange, namedRange} from '@/time';

describe('#ranges', () => {
  it('produces ranges as expected', () => {
    expect(range(0,3,0,10)).to.equal(()=>[0,1,2,3]);
    expect(range(0,3,1,10)).to.equal([1,2,3]);
    expect(range(0,3,1,2 )).to.equal([1,2]);
  });
  it('produces second ranges as expeced', ()=>{
    expect(second(0,60)).to.equal([...Array(60).keys()]);
    expect(second(0,10)).to.equal([...Array(11).keys()]);
    expect(second(-1, 500)).to.equal(second(0,60));
  });
  it('produces minute ranges as expeced', ()=>{
    expect(minute(0,60)).to.equal([...Array(60).keys()]);
    expect(minute(0,10)).to.equal([...Array(11).keys()]);
    expect(minute(-1, 500)).to.equal(minute(0,60));
  });
  it('produces hour ranges as expeced', ()=>{
    expect(hour(0,60)).to.equal([...Array(13).keys()]);
    expect(hour(0,25, 24)).to.equal([...Array(25).keys()]);
    expect(hour(-1, 500)).to.equal(hour(0,12));
    expect(hour(-1, 500, 24)).to.equal(hour(0,24,24));
  });
  it('produces plain numeric day ranges as expected', ()=>{
    expect(day(0,31)).to.equal([...Array(32).keys()]);
    expect(day(0,32)).to.equal([...Array(32).keys()]);
    expect(day(-1,31)).to.equal([...Array(32).keys()]);
    expect(day(1,3)).to.equal([1,2,3]);
  });
  it('produces padded day ranges as expected', ()=>{
    expect(paddedRange('day', 0, 3)).to.equal(['01', '02', '03']);
  });
  it('produces named day ranges as expected', ()=>{});
  it('produces plain numeric month ranges as expected', ()=>{});
  it('produces named month ranges as expected', ()=>{});
  it('produces year ranges as expected', ()=>{});
});
