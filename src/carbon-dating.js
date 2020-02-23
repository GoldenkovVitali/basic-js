const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k= 0.693/HALF_LIFE_PERIOD;
module.exports = function dateSample(sampleActivity) {
sampleActivity = typeof sampleActivity === "string" && parseFloat(sampleActivity);
if (!isNaN(sampleActivity) && sampleActivity>0 && sampleActivity<15) {
let sample = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k)
return sample;
}
return false;
};  