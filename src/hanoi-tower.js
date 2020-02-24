module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turns= Math.pow(2, disksNumber) - 1; // 2^N - 1
  seconds = turns / (turnsSpeed / 3600); //speed
  return {turns, seconds}
}