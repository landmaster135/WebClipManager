// util for sub to input title

// for inputterValueToEmptyCell --------------------------------------------------------------------------------------------------------------------

/**
   * @param {string} srcFuncName
   * @param {string} sheetName
   * @param {number} targetColIndex
   * @return {boolean} isInputed
   */
function* inputterValueToEmptyCell(srcFuncName, sheetName, targetColIndex){
  const funcName = "inputterValueToEmptyCell";

  // Get array of rows
  const row_to_read_actual = getIdToReadActualInGss(sheetName, 1, ROW_NUMS_TO_READ_ACTUAL);
  const rowArray = getRowsEmptyCell(sheetName, targetColIndex, row_to_read_actual + 1);
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(`${srcFuncName}------------------------\n\n` + rowArray);

  // return array of rows to src function at once and recieve array of values.
  const valueArray = yield rowArray;
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  console.log(valueArray);

  // Write value to worksheet.
  const isInputed = inputValuesToEmptyCell(sheetName, valueArray, rowArray, targetColIndex);
  console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);
  console.log(isInputed);

  return isInputed;
}

/**
   * @param {string} sheetName
   * @param {number} targetColumn
   * @param {number} rowToRead
   * @return {number[]} rowArray
  */
function getRowsEmptyCell(sheetName, targetColumn, rowToRead){
  const funcName = "getRowsEmptyCell";
  // get sheet.
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(sheetName);
  const targetValueArray = sheet.getRange(HEIGHT_HEADER_1ST, targetColumn, rowToRead, 1).getValues();
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(targetValueArray);

  let rowArray = [];
  for(let i = 0; i < targetValueArray.length; i++){
    if (targetValueArray[i][0] === ""){
      rowArray.push(i+1);
    }
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  console.log(rowArray);
  return rowArray;
}

// for utilities (for other process)
/**
   * @param {string} sheetName
   * @param {string[]} valueArray
   * @param {number[]} rowArray
   * @param {number} inputingColumn
   * @return {boolean} isInputed
  */
function inputValuesToEmptyCell(sheetName, valueArray, rowArray, inputingColumn) {
  const funcName = "inputValuesToEmptyCell";
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(sheetName);
  let isInputed = false;
  for(let i = 0; i < valueArray.length; i++){
    sheet.getRange(rowArray[i], inputingColumn, 1, 1).setValue(valueArray[i]);
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    isInputed = true;
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  console.log(isInputed);

  return isInputed;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------


// for getValueArrayFromRowArray --------------------------------------------------------------------------------------------------------------------

/**
   * @param {string} sheetName
   * @param {number[]} rowArray
   * @param {number} targetColumn
   * @return {string[]} valueArray
  */
function getValueArrayFromRowArray(sheetName, rowArray, targetColumn){
  const funcName = "getValueArrayFromRowArray";
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(sheetName);
  let valueArray = [];
  rowArray.forEach(row => {
    valueArray.push(sheet.getRange(row, targetColumn, 1, 1).getValue());
  })
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(valueArray);
  return valueArray;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------


// for getSiteTitleArrayFromUrlArray --------------------------------------------------------------------------------------------------------------------

/**
   * @param {string[]} urlArray
   * @return {string[]} siteTitles
*/
async function getSiteTitleArrayFromUrlArray(urlArray) {
  const funcName = "getSiteTitleArrayFromUrlArray";
  let siteTitles = [];
  let executionTime = 0;
  const maxExecutionTime = 300 * 1000; // 5 minutes. (max time of standard GAS is 6 minutes.)
  await Promise.all(
    urlArray.map(async url => {
      let exeStart = new Date();

      let res = getResponseUntilMaxRetries(url, 5);
      if (res === null){
        return [];
      }
      let contentText = res.getContentText("UTF-8");
      let siteTitle = String(Parser.data(contentText).from("<title>").to("</title>").iterate());
      console.log(siteTitle);
      siteTitle = siteTitle.replace(/\r?\n/g, "");
      siteTitle = getStringWithFilters(siteTitle, url);

      // TODO: 上の処理をこの関数で実行されるようにする。
      // siteTitle = getSiteTitleByResponse(url);

      siteTitles.push(siteTitle);
      let exeEnd = new Date();
      executionTime += exeEnd - exeStart;
      if(executionTime > maxExecutionTime){
        console.log(`${funcName}: executionTime is over maxExecutionTime.`)
        return false;
      }
    })
  );
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(siteTitles);
  return siteTitles;
}

// request functions: start ------------------------------------------------------------------------------------------------------------------

/**
   * @param {string} url
   * @param {number} maxRetries
   * @return {UrlFetchApp.HTTPResponse} res
*/
function getResponseUntilMaxRetries(url, maxRetries=5){
  // This function is to avoid 403 Forbidden Error.
  const funcName = "getResponseUntilMaxRetries";
  let res = null;
  for (let i = 0; i < maxRetries; i++) {
    res = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    if (res.getResponseCode() == 200) break;
    res = null;
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: countOfRetries = ${i}`);
    Utilities.sleep(5000);
  }
  if (res === null){
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: No response are gotten from ${url}`);
  }
  return res;
}

// TODO: この関数を非同期処理内で使えるようにする。。
/**
   * @param {string} url
   * @return {string} siteTitle
*/
function getSiteTitleByResponse(url){
  // TODO: 非同期処理の内容はこれ。
  // const funcName = "getSiteTitleByResponse";
  // let res = getResponseUntilMaxRetries(url, 5);
  // if (res === null){
  //   return [];
  // }
  // let contentText = res.getContentText("UTF-8");
  // let siteTitle = String(Parser.data(contentText).from("<title>").to("</title>").iterate());
  // console.log(siteTitle);
  // siteTitle = siteTitle.replace(/\r?\n/g, "");
  // siteTitle = getStringWithFilters(siteTitle, url);

  // TODO: 暫定処理
  let siteTitle = "★★★★★★WebClipManager★★★★★★";

  return siteTitle;
}

// request functions: end ------------------------------------------------------------------------------------------------------------------

// filter functions: start ------------------------------------------------------------------------------------------------------------------

/**
   * @param {string} targetString
   * @param {string} targetUrl
   * @return {string} returnString
*/
function getStringWithFilters(targetString, targetUrl){
  let returnString = "";
  returnString = getStringWithLettersFileter(targetString, targetUrl);
  returnString = getStringWithKeywordFilter(returnString, "GIGAZINE");
  // returnString = await getStringWithYoutubeFilter(returnString, url);
  return returnString;
}

/**
   * @param {string} targetString
   * @param {string} url
   * @param {number} letters
   * @return {string} returnString
*/
function getStringWithLettersFileter(targetString, url, letters=200){
  const funcName = "getStringWithLettersFileter";
  let returnString = "";
  if (targetString.length > 200){
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: url is "${url}"`);
    returnString = targetString.substring(0, letters);
  }else{
    returnString = targetString;
  }
  return returnString;
}

/**
   * @param {string} targetString
   * @param {string} keyword
   * @return {string} returnString
*/
function getStringWithKeywordFilter(targetString, keyword){
  const indexOfRemoving = targetString.indexOf(keyword);
  if(indexOfRemoving === -1){
    return targetString;
  }
  const removingString = targetString.substring(indexOfRemoving);
  const returnString = targetString.replace(removingString, "");
  return returnString;
}

/**
   * @param {string} targetString
   * @param {string} url
   * @return {string} targetString
*/
function getStringWithYoutubeFilter(targetString, url){
  const isOnlyYoutube = targetString === "YouTube";
  if(isOnlyYoutube === false){
    return targetString;
  }
  let res = getResponseUntilMaxRetries(url, 5);
  if (res === null){
    return targetString;
  }

  // TODO
  // let contentText = res.getContentText("UTF-8");
  // let siteH1 = String(Parser.data(contentText).from("<h1 class=\"title style-scope ytd-video-primary-info-renderer\">").to("</h1>").iterate());
  // const filteredString = `${siteH1} - ${targetString}`;
  return targetString;
  // return filteredString;
}

// filter functions: end ------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------------------------


