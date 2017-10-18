// import {Calendar} from 'calendar';
import monthNames from '@/json/month-names.json';
import dayNames from '@/json/day-names.json';
import timeUnits from '@/json/time-units.json';
import * as ranges from './ranges.js';
console.log(Object.keys(ranges), 'ranges keys');
const units = new Set(timeUnits);

export function paddedRange(unit, min=0, max=3000, log=2){
  if (!Object.keys(ranges).some(name=>name == unit)){
    throw new Error('invalid padded range type: ' + type);
  }
  return ranges[unit](min, max).map(value => String(value).padStart(log, '0'));
}

const nameable = {
  day: new Set(['full', 'short', 'min']),
  month: new Set(['full', 'short'])
};

function weekdayRange(min=0, max=6, format){
  // 0-indexed days, so if max = 7, correct the error.
  if (max == 7) max-- && min--;
  if (!['full', 'short', 'min'].some(name=>format == name)){
    throw new Error('Expected to see format in full, short, or min');
  }
  return ranges.day(min, max).map(index => dayNames[format][index]);
}

function namedMonthRange(min, max, format){
  if (max == 7) max-- && min--;
  if (!['full', 'short'].some(name=>format == name)){
    throw new Error('Expected to see format to be either `full` or `short`');
  }
  return ranges.month(min, max).map(index => dayNames[format][index]);
}

function namedRange(unit, min=0, max=12, format){
  if (unit != 'day' || unit != 'month'){
    throw new Error('there are no names for units other than day & month');
  }
  return names[type].slice(min, max);
}

export default function range(unit, min, max, format){
  if (Object.keys(ranges).some(name=>name == unit)){
    if (nameable[unit] && nameable[unit].has(format)){
      return (unit == 'day' ? weekdayRange : monthRange)(min, max, format);
    }
  } else {
    throw new Error(
      'invalid options:' +
      JSON.stringify(unit, min, max, naming, padding)
    );
  }
}
