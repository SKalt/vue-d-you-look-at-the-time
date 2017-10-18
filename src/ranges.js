export function range(min, max, minPossible=0, maxPossible=3000){
  max = Math.min(maxPossible, max); //
  min = Math.max(minPossible, min);
  console.log(min, max)
  return [...Array(max+1 - min ).keys()].map(i=> i + min);
}
export function month(min, max){
  return range(min, max, 0, 12);
}
export function year(min, max){
  return range(min, max, 0, 3000); // new Date().getFullYear() for minPossible?
}
export function day(min, max){
  return range(min, max, 1, 31);
}
export function hour(min, max, hourTime=12){
  return range(min, max, 0, hourTime);
}
function base60(min,max){
  return range(min, max, 0, 59);
}
export {base60 as minute, base60 as second};

export function point(min, max, zeros=1){
  return range(min, max, 0, 10**zeros)
}
