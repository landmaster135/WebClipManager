// test_utilForManipulateArray.gs

// TODO: assertEqualみたいな感じにしたい。
/**
   * Test codes for utilToManipulateArray.gs.
*/
class test_utilToManipulateArray{
  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getIndicesByReplacingWord_1_1(funcName = "test_getIndicesByReplacingWord_1_1"){
    const replacingWord = REPLACING_WORD_WHEN_TITLE_IS_NULL
    const array = ["a", "b", "", "d", "", "f"];
    const actual = getIndicesByReplacingWord(array, "");
    const expected = [2, 4];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getIndicesByReplacingWord_1_2(funcName = "test_getIndicesByReplacingWord_1_1"){
    // const replacingWord = REPLACING_WORD_WHEN_TITLE_IS_NULL
    const replacingWord = "qwerthfasd__444123___wqertesttest"
    const array = ["a", "b", "qwerthfasd__444123___wqertesttest", "d", "qwerthfasd__444123___wqertesttest", "f"];
    const actual = getIndicesByReplacingWord(array, replacingWord);
    const expected = [2, 4];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getIndicesByReplacingWord_1_3(funcName = "test_getIndicesByReplacingWord_1_1"){
    const array = ["", "b", "c", "d", "", ""];
    const actual = getIndicesByReplacingWord(array, "");
    const expected = [0, 4, 5];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getIndicesByReplacingWord_1_4(funcName = "test_getIndicesByReplacingWord_1_1"){
    const array = ["e", "b", "c", "d", "d", "w"];
    const actual = getIndicesByReplacingWord(array, "");
    const expected = [];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getIndicesByReplacingWord_1_5(funcName = "test_getIndicesByReplacingWord_1_1"){
    const array = ["", "", ""];
    const actual = getIndicesByReplacingWord(array, "");
    const expected = [0, 1, 2];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getArrayRemovedElementsByIndices_1_1(funcName = "test_getArrayRemovedElementsByIndices_1_1"){
    const array = ["a", "b", "c", "d", "e", "f"];
    const removingIndices = [1, 3];
    const actual = getArrayRemovedElementsByIndices(array, removingIndices);
    const expected = ["a", "c", "e", "f"];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getArrayRemovedElementsByIndices_1_2(funcName = "test_getArrayRemovedElementsByIndices_1_2"){
    const array = ["a", "b", "c", "d", "e", "f"];
    const removingIndices = [];
    const actual = getArrayRemovedElementsByIndices(array, removingIndices);
    const expected = ["a", "b", "c", "d", "e", "f"];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getArrayRemovedElementsByIndices_1_3(funcName = "test_getArrayRemovedElementsByIndices_1_3"){
    const array = [1, 4, 6, "ty", 4, "qwer"];
    const removingIndices = [0, 1, 2, 5];
    const actual = getArrayRemovedElementsByIndices(array, removingIndices);
    const expected = ["ty", 4];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_getArrayRemovedElementsByIndices_1_4(funcName = "test_getArrayRemovedElementsByIndices_1_3"){
    const array = [];
    const removingIndices = [];
    const actual = getArrayRemovedElementsByIndices(array, removingIndices);
    const expected = [];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === false){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === false){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // abnoraml systems
  test_getArrayRemovedElementsByIndices_1_5(funcName = "test_getArrayRemovedElementsByIndices_1_3"){
    const array = [1, 4, 6, "ty", 4, "qwer"];
    const removingIndices = [];
    const actual = getArrayRemovedElementsByIndices(array, removingIndices);
    const expected = [1, 4, 6, "ty", 4];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === true){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);
    return isPassedFlag;
  }

  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // abnoraml systems
  test_getArrayRemovedElementsByIndices_1_6(funcName = "test_getArrayRemovedElementsByIndices_1_3"){
    const array = [1, 4, 6, "ty", 4, "qwer"];
    const removingIndices = [1, 3];
    const actual = getArrayRemovedElementsByIndices(array, removingIndices);
    const expected = [1, 4, 4];
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    if(isLengthOfBothArraySame(actual, expected) === true){
      return isPassedFlag;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
    if(isElementInBothArrayAllTheSame(actual, expected) === true){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: All Passed`);
    return isPassedFlag;
  }
}

function execute_test_utilToManipulateArray(){
  const funcName = "executeTests";
  let descriptorObj = Object.getOwnPropertyDescriptors(test_utilToManipulateArray.prototype);
  console.log(descriptorObj);
  const descriptorKeys = Object.keys(descriptorObj);
  console.log(descriptorKeys);

  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: Test starts.`);
  for(let i = 0; i < descriptorKeys.length; i++){
    if(descriptorKeys[i] !== "constructor"){
      descriptorObj[descriptorKeys[i]].value(descriptorKeys[i]);
    }
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: Test terminated.`);

}
