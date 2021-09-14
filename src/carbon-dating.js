import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  sampleActivity = Number(sampleActivity);
  if (sampleActivity !== sampleActivity || !sampleActivity) return false;

  const dividend = Math.log(MODERN_ACTIVITY / sampleActivity);
  const divider = Math.log(2) / HALF_LIFE_PERIOD;
  const time = Math.ceil(dividend / divider);

  return time >= 0 ? time : false;
}
