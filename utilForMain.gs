// for utilities (for main process and others)

/**
   * @param {string} folderId
   * @param {string[]} mimeTypes
   * @return {string[]} fileIdArray
*/
function getFileIdArrayInTheFolder(folderId, mimeTypes=["text/plain"]) {
  const funcName = "getFileIdArrayInTheFolder";
  const folder = DriveApp.getFolderById(folderId);
  let filesList = [];

  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  mimeTypes.forEach(mimeType => {
    filesList = filesList.concat(folder.getFilesByType(mimeType));
  });

  let fileInfoArray = [];
  let fileIdArray = [];
  const urlOfTemporaryFolder = folder.getUrl();
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  console.log(`Url of temporary folder is "${urlOfTemporaryFolder}"`);

  filesList.forEach(files => {
    while(files.hasNext()) {
      let file = files.next();
      fileInfoArray.push([file.getId(), Utilities.formatDate(file.getLastUpdated(), "JST", "yyyy/MM/dd")]);
    }
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);
  console.log(fileInfoArray);

  fileInfoArray.sort(function(a,b){
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("d")}: `);
  console.log(fileInfoArray);

  fileInfoArray.forEach(info => {
    fileIdArray.push(info[0]);
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("e")}: `);
  console.log(fileIdArray);

  return fileIdArray;
}

// from file id array functions: start ------------------------------------------------------------------------------------------------------------------------

/**
   * @param {string[]} fileIdArray
   * @return {string[]} fileNames
*/
function getFileNameArrayFromFileIdArray(fileIdArray) {
  const funcName = "getFileNameArrayFromFileIdArray";
  let fileNames = [];
  let file;
  fileIdArray.forEach(id => {
    file = DriveApp.getFileById(id);
    fileNames.push(file.getName());
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  return fileNames;
}

/**
   * @param {string[]} fileIdArray
   * @return {Date} dates
*/
function getDateArrayFromFileIdArray(fileIdArray) {
  const funcName = "getDateArrayFromFileIdArray";
  let dates = [];
  let file;
  fileIdArray.forEach(id => {
    file = DriveApp.getFileById(id);
    dates.push(Utilities.formatDate(file.getLastUpdated(), "JST", "yyyy/MM/dd"));
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(dates);
  return dates;
}

/**
   * @param {string[]} fileIdArray
   * @return {string[]} texts
*/
function getTextArrayFromFileIdArray(fileIdArray) {
  const funcName = "getTextArrayFromFileIdArray";
  let texts = [];
  let file;
  fileIdArray.forEach(id => {
    file = DriveApp.getFileById(id);
    let text = file.getBlob().getDataAsString("utf-8");
    texts.push(text);
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(texts);
  console.log("#################################")
  return texts;
}

// from file id array functions: end ------------------------------------------------------------------------------------------------------------------------


/**
   * @param {number} columnIndex
   * * @param {any[]} infoArray
   * @return {string[]} texts
*/
function applyColumnIndexToInfoArray(columnIndex, infoArray) {
  const funcName = "applyColumnIndexToInfoArray";
  const indexToString = String(columnIndex)
  const appliedObj = {};
  appliedObj[indexToString] = infoArray;
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  return appliedObj;
}

/**
   * @param {Object} objects
   * @return {string} returnString
*/
function integrateObjToWriteGSS(...objects) {
  const funcName = "integrateObjToWriteGSS";
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(objects);

  // Length of object in objects must be same each other: Start ----------------------------------------------------
  console.log(Object.keys(objects))
  let arrayOfKey = [];
  for(let j = 0; j < objects.length; j++){
    arrayOfKey.push(Object.keys(objects[j])[0]);
  }
  let lengthOfObject1;
  let lengthOfObject2;
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  console.log("arrayOfKey: [ " + arrayOfKey + " ]");

  let objWithoutArray = {};
  objects.forEach(obj => {
    for (let j in obj){
      objWithoutArray[j] = obj[j];
    }
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);
  console.log(objWithoutArray);

  for(let j = 0; j < arrayOfKey.length; j++){
    lengthOfObject1 = objWithoutArray[arrayOfKey[j]].length;
    console.log("L1: " + lengthOfObject1)

    for(let k = j + 1; k < arrayOfKey.length; k++){
      lengthOfObject2 = objWithoutArray[arrayOfKey[k]].length;
      console.log("L2: " + lengthOfObject2)

      if(lengthOfObject1 !== lengthOfObject2){
        console.log(`${funcName}: ${getStrRepeatedToMark("d")}: `);
        console.log(`Length of objects is different: lengthOfObject1: ${lengthOfObject1} != lengthOfObject2: ${lengthOfObject2}`);
        return {"2": [[]]};
      }

    }
  }

  console.log(`${funcName}: ${getStrRepeatedToMark("e")}: `);
  // Length of object in objects must be same each other: End ----------------------------------------------------

  // Data processing: Start --------------------------------------------------------------------------------------
  let arrayOfColumnsIndex = [];
  let i = 0;
  let indexOfArrayOfColumnsIndex = 0;
  while(i < objects.length){
    console.log(objects[i]);
    if(i === 0){
      for (let j in objects[i]){
        arrayOfColumnsIndex.push([j]);
      }
    }
    if(i > 0){
      let k = 0;
      let l = 0;
      for (let j in objects[i]){
        k = Number(JSON.parse(JSON.stringify(j)));
      }
      for (let j in objects[i-1]){
        l = Number(JSON.parse(JSON.stringify(j)));
      }
      console.log(l)
      if(k - l === 1){
        for (let j in objects[i]){
          arrayOfColumnsIndex[indexOfArrayOfColumnsIndex].push(j);
        }
      }else{
        indexOfArrayOfColumnsIndex++;
        for (let j in objects[i]){
          arrayOfColumnsIndex.push([j]);
        }
      }
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("f")}: `);
    console.log(objects.length);
    i++;
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("g")}: `);
  console.log(arrayOfColumnsIndex);

  let recordsArray = [];
  console.log(`${funcName}: ${getStrRepeatedToMark("h")}: `);
  console.log(objects[0])
  arrayOfColumnsIndex.forEach(columnsIndex => {
    let records = [];
    for (let data of Object.values(objects[0])){
      console.log("============ data ================")
      console.log(data)
      console.log("============ data ============================")
      for (let j = 0; j < data.length; j++){
        let record = [];
        columnsIndex.forEach(columnIndex => {
          record.push(objWithoutArray[columnIndex][j])
        });
        records.push(record);
      }
    }
    recordsArray.push(records);
  });

  console.log(`${funcName}: ${getStrRepeatedToMark("i")}: `);
  console.log(recordsArray);

  let objRecordsArray = {};
  for(let i = 0; i < arrayOfColumnsIndex.length; i++){
    objRecordsArray[arrayOfColumnsIndex[i][0]] = recordsArray[i]
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("j")}: `);
  console.log(objRecordsArray);

  // Data processing: End --------------------------------------------------------------------------------------

  // Data processing in the case that record is empty: Start ----------------------------------------------------
  const recordsForWriting = objRecordsArray[Object.keys(objRecordsArray)[0]];
  console.log(`${funcName}: ${getStrRepeatedToMark("k")}: `);
  console.log(`recordsForWriting: ${recordsForWriting}`);
  if(recordsForWriting.length === 0){
    return {"2": [[]]};
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("l")}: `);
  // Data processing in the case that record is empty: End ----------------------------------------------------

  return objRecordsArray;
}

/**
   * @param {Object} obj
   * @return {boolean} isWritten
*/
function writeInfoToGSS(obj) {
  const funcName = "writeInfoToGSS";
  const sheetName = SHEET_NAME_DISSEMINATING_1ST;

  // evaluate writable or not.
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(obj)

  let arrayOfKey = Object.keys(obj);
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
  console.log(arrayOfKey);
  console.log(obj[arrayOfKey[0]]);

  let isWritten = false;
  if(obj[arrayOfKey[0]][0].length === 0){
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);
    console.log("records to write is nothing.");
    return isWritten;
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("d")}: `);

  // decide start row to write info
  const id_to_read_actual = getIdToReadActualInGss(sheetName, 1, ROW_NUMS_TO_READ_ACTUAL);
  if(id_to_read_actual === 0){
    console.log(`${funcName}: ${getStrRepeatedToMark("e")}: `);
    console.log("id_to_read_actual: " + id_to_read_actual);
    return isWritten;
  }
  const startRow = id_to_read_actual + HEIGHT_HEADER_1ST + 1;
  console.log(`${funcName}: ${getStrRepeatedToMark("f")}: `);
  console.log("startRow: " + startRow);

  // write info(id)
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet       = spreadsheet.getSheetByName(sheetName);
  console.time(`INSERT \"${sheetName}\"Sheet SET \"id\" = *;`);
  sheet.getRange(startRow, COLUMN_FOR_ID_1ST, obj[arrayOfKey[0]].length, 1).setFormula("=ROW()-1");
  console.timeEnd(`INSERT \"${sheetName}\"Sheet SET \"id\" = *;`);
  console.log(`${funcName}: ${getStrRepeatedToMark("g")}: `);

  // write info(except id)
  console.time(`UPSERT \"${sheetName}\"Sheet SET \"clipDate\"~\"URL\" = * WHERE \"id\" = ${startRow - 1}~${startRow - 1 + obj[arrayOfKey[0]].length};`);
  for(let i = 0; i < arrayOfKey.length; i++){
    console.log(`${funcName}: ${getStrRepeatedToMark("h")}: `);
    console.log(`i : ${arrayOfKey[i]}`);
    console.log(`obj[arrayOfKey[i]]: ${obj[arrayOfKey[i]]}`);
    sheet.getRange(startRow, arrayOfKey[i], obj[arrayOfKey[i]].length, obj[arrayOfKey[i]][0].length).setValues(obj[arrayOfKey[i]]);
  }
  console.timeEnd(`UPSERT \"${sheetName}\"Sheet SET \"clipDate\"~\"URL\" = * WHERE \"id\" = ${startRow - 1}~${startRow - 1 + obj[arrayOfKey[0]].length};`);
  console.log(`${funcName}: ${getStrRepeatedToMark("i")}: `);

  isWritten = true;
  return isWritten;
}

/**
   * @param {string[]} fileIdArray
   * @param {string[]} mimeTypes
   * @return {boolean} isRemovedAll
*/
function removeFilesFromFileIdArray(fileIdArray, mimeTypes){
  const funcName = "removeFilesFromFileIdArray";
  let isRemovedAll = true;
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(fileIdArray)
  fileIdArray.forEach(id => {
    DriveApp.getFileById(id).setTrashed(true);
  })
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);

  let isExistFileArray = [];
  fileIdArray.forEach(id => {
    let isExistFile = isExistFileViaFileIdInFolder(id, TEMPORARY_TEXT_FOLDER_ID, mimeTypes);
    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);
    console.log(`isExistFile is ${isExistFile}`);
    isExistFileArray.push(isExistFile);
    if(isExistFile === true){
      isRemovedAll = false;
    }
  })
  console.log(`${funcName}: ${getStrRepeatedToMark("d")}: `);
  console.log(`isRemovedAll is ${isRemovedAll}`);

  if(isRemovedAll === false){
    let removeResultArray = [];
    for(let i = 0; i < fileIdArray.length; i++){
      removeResultArray.push([fileIdArray[i], isExistFileArray[i], DriveApp.getFileById(fileIdArray[i]).getName()]);
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("e")}: `);
    console.log(removeResultArray);
  }

  return isRemovedAll;
}

/**
   * @param {string} fileId
   * @param {string} folderId
   * @param {string} mimeTypes
   * @return {boolean} return
*/
function isExistFileViaFileIdInFolder(fileId, folderId, mimeTypes) {
  let folder = DriveApp.getFolderById(folderId);
  // let files = [];
  // mimeTypes.forEach(mimeType => {
  //   files = files.concat(folder.getFilesByType(mimeType));
  // });
  let filesList = [];
  mimeTypes.forEach(mimeType => {
    filesList = filesList.concat(folder.getFilesByType(mimeType));
  });
  let nowFile = "";

  filesList.forEach(files => {
    while (files.hasNext()) {
      nowFile = files.next();
      if (nowFile.getId() === fileId) {
        return true;
      }
    }
  });
  return false;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


//  main purpose is for writeSheetAndRemoveFilesIos() function. --------------------------------------------------------------------------------------

// by dom struct functions: start ------------------------------------------------------------------------------------------------------------------

/**
   * @param {string[]} dosStructArray
   * @return {string[]} urls
*/
function getUrlArrayByFileDomStructArray(dosStructArray) {
  const funcName = "getUrlArrayByFileDomStructArray";
  let urls = [];
  let file;
  let url;
  dosStructArray.forEach(domStruct => {
    // file = DriveApp.getFileById(domStruct);
    // let text = file.getBlob().getDataAsString("utf-8");
    // let url = String(Parser.data(domStruct).from("<meta property=\"og:url\" content=\"").to("\"/>").iterate())
    url = getUrlByDomStruct(domStruct);
    urls.push(url);
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(urls);
  return urls;
}

/**
   * @param {string[]} dosStructArray
   * @return {string[]} urls
*/
function getSiteTitleArrayFromFileDomStructArray(dosStructArray) {
  const funcName = "getSiteTitleArrayFromFileDomStructArray";
  let siteTitles = [];
  let file;
  let siteTitle;
  dosStructArray.forEach(domStruct => {
    // file = DriveApp.getFileById(domStruct);
    // let text = file.getBlob().getDataAsString("utf-8");
    // let siteTitle = String(Parser.data(domStruct).from("<title>").to("</title>").iterate())
    siteTitle = getSiteTitleByDomStruct(domStruct);
    siteTitles.push(siteTitle);
  });
  console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
  console.log(siteTitles);
  return siteTitles;
}

// sub routine: start ---------------------------------------------------------------------

/**
   * @param {string} domStruct
   * @return {string} url
*/
function getUrlByDomStruct(domStruct){
  const funcName = "getUrlByDomStruct";

  let url = "";
  if(domStruct.length < MARGIN_FOR_CHECK_HTML_PARSING){
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    console.log(domStruct);
    console.log(domStruct.indexOf(URL_KEYWORD) , domStruct.length);
    url = domStruct.substring(domStruct.indexOf(URL_KEYWORD), domStruct.length);
    return url;
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);

  let textPair1 = {};
  textPair1["startText"] = "<link rel=\"canonical\" href=\"";
  textPair1["endTexts"] = ["\"/>", "\">", "\"/ >", "\" />"];
  let textPair2 = {};
  textPair2["startText"] = "<meta property=\"og:url\" content=\"";
  textPair2["endTexts"] = ["\"/>", "\">", "\"/ >", "\" />"];
  const textPairs = [textPair1, textPair2];
  const banInitialWords = ["head><meta charset=\"", "<!DOCTYPE html>", "head><meta "];
  url = getTextByDomStruct(domStruct, textPairs, banInitialWords);
  console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);

  return url;
}

/**
   * @param {string} domStruct
   * @return {string} siteTitle
*/
function getSiteTitleByDomStruct(domStruct){
  const funcName = "getSiteTitleByDomStruct";
  let siteTitle = "";

  if(domStruct.length < MARGIN_FOR_CHECK_HTML_PARSING){
    console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
    console.log(domStruct);
    console.log(domStruct.indexOf(URL_KEYWORD) , domStruct.length);

    // if initial characters are "https://..."
    if (domStruct.indexOf(URL_KEYWORD) !== 0){
      siteTitle = domStruct.substring(0, domStruct.indexOf(URL_KEYWORD));
      return siteTitle;
    }
    console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);

    // TODO: 関数内の処理を非同期でもできるように直す。
    siteTitle = getSiteTitleByResponse();

    console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);
    return siteTitle;
  }
  console.log(`${funcName}: ${getStrRepeatedToMark("d")}: `);

  let textPair1 = {};
  textPair1["startText"] = "<title>";
  textPair1["endTexts"] = ["</title>"];
  let textPair2 = {};
  textPair2["startText"] = "<meta property=\"og:title\" content=\"";
  textPair2["endTexts"] = ["\"/>", "\">", "\"/ >", "\" />"];
  let textPairForMedium = {};
  textPairForMedium["startText"] = "<title data-rh=\"true\">";
  textPairForMedium["endTexts"] = ["</title>"];
  const textPairs = [textPair1, textPair2, textPairForMedium];
  const banInitialWords = ["head><meta charset=\"", "<!DOCTYPE html>", "head><meta "];
  siteTitle = getTextByDomStruct(domStruct, textPairs, banInitialWords);
  // const siteTitle = getTextByDomStruct(domStruct, startText, endTexts);
  console.log(`${funcName}: ${getStrRepeatedToMark("e")}: `);

  return siteTitle;
}

/**
   * @param {string} domStruct
   * @param {string} startText
   * @param {string[]} endTexts
   * @param {number} marginForCheck
   * @return {string) returnText
*/
function getTextByDomStruct(domStruct, textPairs, banInitialWords, marginForCheck=MARGIN_FOR_CHECK_HTML_PARSING){
  const funcName = "getTextByDomStruct";
  let returnText = "";
  let text = "";
  let isBanned = false;
  textPairs.forEach(textPair => {
    textPair["endTexts"].forEach(endText => {
      text = String(Parser.data(domStruct).from(textPair["startText"]).to(endText).iterate());
      if(text.length - returnText.length > marginForCheck || text > marginForCheck){
        // nothing to do
        console.log(`${funcName}: ${getStrRepeatedToMark("a")}: `);
      }else{
        console.log(`${funcName}: ${getStrRepeatedToMark("b")}: `);
        for(let i = 0; i < banInitialWords.length; i++){
          if(text.indexOf(banInitialWords[i]) === 0){
            console.log(`${funcName}: ${getStrRepeatedToMark("c")}: `);
            console.log(text)
            isBanned = true;
            break;
          }
        }
        if(isBanned === false){
          returnText = text;
        }
        console.log(`${funcName}: ${getStrRepeatedToMark("d")}: returnText is ${returnText}`);
        isBanned = false;
      }
    });
  });
  return returnText;
}

// sub routine: end ---------------------------------------------------------------------

// by dom struct functions: end ------------------------------------------------------------------------------------------------------------------
