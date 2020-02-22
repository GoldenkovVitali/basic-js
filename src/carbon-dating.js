const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k= 0.693/HALF_LIFE_PERIOD;
module.exports = function dateSample(sampleActivity) {
console.log (sampleActivity);
sampleActivity = typeof sampleActivity === "string" && parseFloat(sampleActivity);
console.log (sampleActivity);
console.log(Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k));
if (!isNaN(sampleActivity) && sampleActivity>0 && sampleActivity<15) {
console.log (Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k)
return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k);
}
return false;
};  