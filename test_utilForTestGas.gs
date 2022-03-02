// test_utilForTestGas.gs


// TODO: assertEqualみたいな感じにしたい。
/**
   * Test codes for utilities  to test Google Apps Script.
*/
class test_utilForTestGas{
  /**
     * @param {string} funcName
     * @return {boolean} isPassedFlag
  */
  // noraml systems
  test_isSame_1_1(funcName = "test_isSame_1_1"){
    const var1 = 3;
    const var2 = 3;
    const actual = isSame(var1, var2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isSame_1_2(funcName = "test_isSame_1_2"){
    const var1 = 3;
    const var2 = 3;
    const actual = isSame(var1, var2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isLengthOfBothArraySame_1_1(funcName = "test_isLengthOfBothArraySame_1_1"){
    const array1 = [1, 4, 6, 4, 5];
    const array2 = [1, 4, 6, 4, 5];
    const actual = isLengthOfBothArraySame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isLengthOfBothArraySame_1_2(funcName = "test_isLengthOfBothArraySame_1_2"){
    const array1 = ["a", "b", "c", "d", "e", "f"];
    const array2 = ["a", "b", "c", "d", "e", "f"];
    const actual = isLengthOfBothArraySame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isLengthOfBothArraySame_1_3(funcName = "test_isLengthOfBothArraySame_1_3"){
    const array1 = ["", "b", "c", "d", "", "f"];
    const array2 = ["a", "b", "", "", "", "f"];
    const actual = isLengthOfBothArraySame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isLengthOfBothArraySame_1_4(funcName = "test_isLengthOfBothArraySame_1_4"){
    const array1 = ["", "b", "c", "d", "", "f"];
    const array2 = ["a", "b", "", "", "", "f"];
    const actual = isLengthOfBothArraySame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isLengthOfBothArraySame_1_5(funcName = "test_isLengthOfBothArraySame_1_5"){
    const array1 = ["", "b", "c", "d", "", "f"];
    const array2 = ["a", "b", "", "", "", "f"];
    const actual = isLengthOfBothArraySame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isLengthOfBothArraySame_1_6(funcName = "test_isLengthOfBothArraySame_1_5"){
    const array1 = ["", "", "f"];
    const array2 = ["a", "b", "", "", "", "f"];
    const actual = isLengthOfBothArraySame(array1, array2);
    const expected = false;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isLengthOfBothArraySame_1_7(funcName = "test_isLengthOfBothArraySame_1_5"){
    const array1 = ["", "", "f"];
    const array2 = [];
    const actual = isLengthOfBothArraySame(array1, array2);
    const expected = false;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isLengthOfBothArraySame_1_8(funcName = "test_isLengthOfBothArraySame_1_5"){
    const array1 = [];
    const array2 = [];
    const actual = isLengthOfBothArraySame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_1(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = ["a", "b", "c", "d", "e", "f"];
    const array2 = ["a", "b", "c", "d", "e", "f"];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_2(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = ["a", 2, 3, "d", 4, "f"];
    const array2 = ["a", 2, 3, "d", 4, "f"];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_3(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = ["a", 2, 3];
    const array2 = ["a", 4, "f"];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = false;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_4(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = ["a", 2, 3];
    const array2 = ["a", 2, "f"];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = false;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_5(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = ["1", 2, 3];
    const array2 = [1, 2, 3];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = false;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_6(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = ["", "b", "c", "d", "", "f"];
    const array2 = ["a", "b", "", "", "", "f"];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = false;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_7(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = [];
    const array2 = ["1", "2", "3"];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = false;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_8(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = ["1", "2", "3"];
    const array2 = [];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = false;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
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
  // noraml systems
  test_isElementInBothArrayAllTheSame_1_9(funcName = "test_isElementInBothArrayAllTheSame_1_5"){
    const array1 = [];
    const array2 = [];
    const actual = isElementInBothArrayAllTheSame(array1, array2);
    const expected = true;
    let isPassedFlag = false;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

    if(actual !== expected){
      return isPassedFlag;
    }
    isPassedFlag = true;
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: All Passed`);

    return isPassedFlag;
  }

}


function execute_test_utilForTestGas(){
  const funcName = "executeTests";
  let descriptorObj = Object.getOwnPropertyDescriptors(test_utilForTestGas.prototype);
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