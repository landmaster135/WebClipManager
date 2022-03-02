// util general

/**
   * @param {string} repeatStr
   * @param {number} repeatNumberToMark
   * @return {string} returnStr
*/
function getStrRepeatedToMark(repeatStr, repeatNumberToMark=15){
  const returnStr = repeatStr.repeat(repeatNumberToMark);
  return returnStr;
};

/**
   * @template T
   * @param {T[]} listReadFromGss
   * @return {T[]} listFormated
*/
function listFormated(listReadFromGss) {
  var listFormated = [];
  for (let j = 0; j < listReadFromGss.length; j++) {
    // "if" statement in one liner. If "", nothing to do.
    listReadFromGss[j][0]=="" ? true : listFormated.push(listReadFromGss[j][0]);
  }
  return listFormated
}

/**
   * Get number of record in Google Spreadsheet.
   *
   * @param {string} sheetName - Name of sheet that you wanna know number of record.
   * @param {number} columnForId - Column index of ID.
   * @param {number} idToRead - Number of read last row to decide last row.
   * @return {number} Number of record.
   * @customfunction
*/
function getIdToReadActualInGss(sheetName, columnForId, idToRead=801) {
  const funcName = "get_id_to_read_actual_in_GSS";

  // declare list for warning message.
  const warningMessage = "Warning: Number of row passing over \"id_to_read\". Tweak me.";
  const errorMessage   = "RowIndexOutOfBoundsError: Number of row reached \"id_to_read\". Tweak me.";

  // get sheet.
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName(sheetName);

  // memorize number of row to read
  console.time(`${funcName}: SELECT TOP ${idToRead - 1} id FROM \"${sheetName}\"`);
  let idList = sheet.getRange(2, columnForId, idToRead - 1, 1).getValues();
  console.timeEnd(`${funcName}: SELECT TOP ${idToRead - 1} id FROM \"${sheetName}\"`);
  let idList_formated = listFormated(idList);
  
  // warning message. If condition is false, nothing to do.
  let idToReadActual = Number(idList_formated.reduce((a,b)=>Math.max(a,b)));
  idToRead - idToReadActual <= 2 ? console.warn(warningMessage) : false;
  if(idToReadActual >= idToRead - 1){
    console.error(errorMessage);
    return 0;
  }
  console.log(`${funcName}: id_to_read_actual is ${idToReadActual}`);
  return idToReadActual;
}
