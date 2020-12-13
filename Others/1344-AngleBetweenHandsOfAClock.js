/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
const angleClock = (hour, minutes) => {
  const minutesAngle = minutes * 6;
  const hourBaseAngle = hour * 30;
  const hourOffsetAngle = 6 * 30 * minutes / 360;
  const hourFinalAngle = hourBaseAngle + hourOffsetAngle;
  const angle = Math.floor(Math.abs(minutesAngle - hourFinalAngle) * 10) / 10;

  return angle > 180 ? 360 - angle : angle;

};

console.log(angleClock(12, 30)); // 165
console.log(angleClock(3, 30)); // 75
console.log(angleClock(3, 15)); // 7.5
console.log(angleClock(4, 50)); // 155
console.log(angleClock(12, 0)); // 0
console.log(angleClock(6, 5)); // 152.5
