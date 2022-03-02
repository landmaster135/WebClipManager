// util for sub for memorandum column and todo column.

/**
   * @template T
   * @param {any[]} srcArray
   * @param {T} value
   * @return {T[]} returnArray
   */
function getAllSameValueArrayByArray(srcArray, value){
  returnArray = [];
  for (let i = 0; i < srcArray.length; i++) {
    returnArray.push(value);
  }
  return returnArray;
}
