// util to manipulate array

/**
   * @param {string[]} targetArray
   * @param {string} replacingWord
   * @return {number[]} indices
*/
function getIndicesByReplacingWord(targetArray, replacingWord=REPLACING_WORD_WHEN_TITLE_IS_NULL){
  const funcName = "getIndicesByReplacingWord";
  const indices = [];
  for(let i = 0; i < targetArray.length; i++){
    if(targetArray[i] === replacingWord){
      indices.push(i);
    }
  }
  return indices;
}

/**
   * @param {string[]} targetArray
   * @param {number[]} srcIndices
   * @return {number[]} indices
*/
function getArrayRemovedElementsByIndices(targetArray, srcIndices){
  const funcName = "getSplicedArrayByIndices";
  let indices = [];
  for(let i = 0; i < srcIndices.length; i++){
    indices = targetArray.splice(srcIndices[i] - i, 1);
  }
  console.log(targetArray);
  const returnArray = targetArray;
  return returnArray;
}
