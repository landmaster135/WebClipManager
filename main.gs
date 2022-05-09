// main process

/**
   * @param {string} folderId
   * @param {string[]} mimeTypes
   * @return {null} return
*/
async function writeSheetAndRemoveFiles(folderId=LandGasterId.TEMPORARY_TEXT_FOLDER_ID(), mimeTypes=["text/plain"]){
  const funcName = "writeSheetAndRemoveFiles";
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  const textFileIdArray = getFileIdArrayInTheFolder(folderId, mimeTypes);
  // const textFileIdArray = getFileIdArrayInTheFolder(folderId, "text/plain");
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  let dateArray      = getDateArrayFromFileIdArray(textFileIdArray);
  console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);
  let urlArray       = getTextArrayFromFileIdArray(textFileIdArray);
  console.log(`${funcName}: ${getStrRepeatedToMark("d")}: `);
  let siteTitleArray = await getSiteTitleArrayFromUrlArray(urlArray);
  console.log(`${funcName}: ${getStrRepeatedToMark("e")}: `);

  // TODO:URLでヒットしなかった要素のインデックスを消す処理（utilToManipulateArray.gsにある処理を使う）
  // manipulate arrays if an element in siteTitleArray is replaced by REPLACING_WORD_WHEN_TITLE_IS_NULL.
  // replacedIndices = getIndicesByReplacingWord(siteTitleArray);
  // console.log(`${funcName}: ${getStrRepeatedToMark("f")}: `);
  // dateArrayRemoved      = getArrayRemovedElementsByIndices(dateArray, replacedIndices);
  // urlArrayRemoved       = getArrayRemovedElementsByIndices(urlArray, replacedIndices);
  // siteTitleArrayRemoved = getArrayRemovedElementsByIndices(siteTitleArray, replacedIndices);
  // console.log(`${funcName}: ${getStrRepeatedToMark("g")}: `);

  // console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
  // console.log(dateArrayRemoved.length)
  // console.log(urlArrayRemoved.length)
  // console.log(siteTitleArrayRemoved.length)
  // console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")

  // for test
  // dateArray      = [0,1,2,4];
  // siteTitleArray = [2,4,8,9];
  // urlArray       = [5,7,1,5];

  const dateObj  = applyColumnIndexToInfoArray(COLUMN_FOR_DATE_1ST, dateArray);
  const titleObj = applyColumnIndexToInfoArray(COLUMN_FOR_TITLE_1ST, siteTitleArray);
  const urlObj   = applyColumnIndexToInfoArray(COLUMN_FOR_URL_1ST, urlArray);
  // const dateObj  = applyColumnIndexToInfoArray(COLUMN_FOR_DATE_1ST, dateArrayRemoved);
  // const titleObj = applyColumnIndexToInfoArray(COLUMN_FOR_TITLE_1ST, siteTitleArrayRemoved);
  // const urlObj   = applyColumnIndexToInfoArray(COLUMN_FOR_URL_1ST, urlArrayRemoved);
  const integratedObj = integrateObjToWriteGSS(dateObj, titleObj, urlObj);
  const isWritten    = writeInfoToGSS(integratedObj);
  let isRemovedAll = false;
  if(isWritten === true){
    isRemovedAll = removeFilesFromFileIdArray(textFileIdArray, mimeTypes);
  }
  return isRemovedAll;
}

/**
   * @param {string} folderId
   * @param {string[]} mimeTypes
   * @return {null} return
*/
async function writeSheetAndRemoveFilesIos(folderId=LandGasterId.TEMPORARY_TEXT_FOLDER_ID_OF_IOS(), mimeTypes=["text/plain", "text/html"]){
  const funcName = "writeSheetAndRemoveFilesIos";
  const textFileIdArray = getFileIdArrayInTheFolder(folderId, mimeTypes); // できた
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);

  let dateArray = getDateArrayFromFileIdArray(textFileIdArray); // できた
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);

  let domStructArray = getTextArrayFromFileIdArray(textFileIdArray); // できた
  console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);

  let urlArray = getUrlArrayByFileDomStructArray(domStructArray); // できた
  console.log(`${funcName}: ${getStrRepeatedToMark("d")}: `);

  let siteTitleArray = getSiteTitleArrayFromFileDomStructArray(domStructArray); // できた
  console.log(`${funcName}: ${getStrRepeatedToMark("e")}: `);

  // for test
  // dateArray      = [0,1,2,4];
  // siteTitleArray = [2,4,8,9];
  // urlArray       = [5,7,1,5];

  const dateObj  = applyColumnIndexToInfoArray(COLUMN_FOR_DATE_1ST, dateArray); // できた
  const titleObj = applyColumnIndexToInfoArray(COLUMN_FOR_TITLE_1ST, siteTitleArray); // できた
  const urlObj   = applyColumnIndexToInfoArray(COLUMN_FOR_URL_1ST, urlArray); // できた
  const integratedObj = integrateObjToWriteGSS(dateObj, titleObj, urlObj); // できた
  const isWritten    = writeInfoToGSS(integratedObj);
  let isRemovedAll = false;
  if(isWritten === true){
    isRemovedAll = removeFilesFromFileIdArray(textFileIdArray, mimeTypes);
  }
  return isRemovedAll;
}

// main execution for main process.
/**
   * @return {null} return
*/
async function main() {
  const isRemovedAllInGeneralFolder = writeSheetAndRemoveFiles(LandGasterId.TEMPORARY_TEXT_FOLDER_ID(), ["text/plain"])
  const isRemovedAllInIosFolder = writeSheetAndRemoveFilesIos(LandGasterId.TEMPORARY_TEXT_FOLDER_ID_OF_IOS(), ["text/plain", "text/html"]);
}

// main execution for the other supplimental process.
/**
   * @return {null} return
*/
async function inputTitlesToEmptyCell(){
  const funcName = "inputTitlesToEmptyCell";
  // Get array of rows
  const inputter = inputterValueToEmptyCell("inputTitlesToEmptyCell", SHEET_NAME_DISSEMINATING_1ST, COLUMN_FOR_TITLE_1ST);
  const rowArray = inputter.next().value;

  // Process array to write
  const urlArray = getValueArrayFromRowArray(SHEET_NAME_DISSEMINATING_1ST, rowArray, COLUMN_FOR_URL_1ST);
  const siteTitleArray = await getSiteTitleArrayFromUrlArray(urlArray);

  // Write array
  const isInputed = inputter.next(siteTitleArray).value;
}

/**
   * @param {string} sheetName
   * @return {null} return
*/
function inputFalseMemorandumToEmptyCell(sheetName){
  const funcName = "inputFalseMemorandumToEmptyCell";
  // Get array of rows
  const inputter = inputterValueToEmptyCell(funcName, sheetName, COLUMN_FOR_MEMORANDUM_1ST);
  const memorandumEmptyRowArray = inputter.next().value;

  // Process array to write
  const memorandumFalseArray = getAllSameValueArrayByArray(memorandumEmptyRowArray, "FALSE");

  // Write array
  const isInputed = inputter.next(memorandumFalseArray).value;
}

/**
   * @param {string} sheetName
   * @return {null} return
*/
function inputFalseTodoToEmptyCell(sheetName){
  const funcName = "inputFalseTodoToEmptyCell";
  // Get array of rows
  const inputter = inputterValueToEmptyCell(funcName, sheetName, COLUMN_FOR_TODO_1ST);
  const todoEmptyRowArray = inputter.next().value;

  // Process array to write
  const todoFalseArray = getAllSameValueArrayByArray(todoEmptyRowArray, "FALSE");

  // Write array
  const isInputed = inputter.next(todoFalseArray).value;
}

// main execution for the other supplimental process.
/**
   * @return {null} return
*/
function inputFalseToEmptyCell(){
  inputFalseMemorandumToEmptyCell(SHEET_NAME_DISSEMINATING_1ST);
  inputFalseTodoToEmptyCell(SHEET_NAME_DISSEMINATING_1ST);
}
