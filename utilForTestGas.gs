// utilForTestGas.gs


// TODO: assertEqualみたいな感じにしたい。
/**
   * @param {any[]} actual
   * @param {any[]} expected
   * @return {boolean} isPassedFlag
*/
function isSame(actual, expected){
  if(actual !== expected){
    return false;
  }
  return true;
}

/**
   * @param {any[]} actual
   * @param {any[]} expected
   * @return {boolean} isPassedFlag
*/
function isLengthOfBothArraySame(actual, expected){
  if(actual.length !== expected.length){
    return false;
  }
  return true;
}

/**
   * @param {any[]} actual
   * @param {any[]} expected
   * @return {boolean} isPassedFlag
*/
function isElementInBothArrayAllTheSame(actual, expected){
  if(isLengthOfBothArraySame(actual, expected) === false){
    return false;
  }
  for(let i = 0; i < expected.length; i++){
    if(actual[i] !== expected[i]){
      return false;
    }
  }
  return true;
}
