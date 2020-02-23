
  module.exports = function getSeason(date) {
    if (!date) {
    return 'Unable to determine the time of year!'
    }
    if (isNaN(date.getTime())) {
    return 'invalid date'
    }
    if (!(date instanceof Date)) {
    return 'invalid date'
    }
    function month(month) {
    if (month==12 || month==1 || month==2){
    return 'winter';
    }
    if (month >=3 && month <= 5) {
    return 'spring';
    }
    if (month>=6 && month <= 8) {
    return 'summer';
    }
    if (month>=9 && month <= 11) {
    return 'fall';
    }
    }
    return month(date.getMonth()+1)
    };
