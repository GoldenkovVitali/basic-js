module.exports = function repeater(str, options) {
    let result = ''  
    let resultOll ='';
    if(!options.additionSeparator){
    options.additionSeparator = '|';
    }
    if(!options.separator){
    options.separator = '+';
    }
    for(let i=0; i< options.additionRepeatTimes; i++){
    result = result + options.addition;
    if(i+1 !== options.additionRepeatTimes){
    result = result + options.additionSeparator;
    }
    }
    for(let i=0; i<options.repeatTimes; i++){
    resultOll = resultOll + str + result;
    if(i+1 !== options.repeatTimes){
    resultOll = resultOll + options.separator;
    }
    }
    if(!options.repeatTimes && !options.additionRepeatTimes){
    resultOll = str + options.addition;
    }
    return resultOll
};
  