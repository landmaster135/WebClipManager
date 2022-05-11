/**
   * onOpen
*/
function onOpen() {
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu('一括入力処理', [
      {name: "空白タイトルに一括入力", functionName: "inputTitlesToEmptyCell"},
      {name: "空白セルにfalseを一括入力", functionName: "inputFalseToEmptyCell"},
    ]);
}

/**
   * Get
   * @param {} e
   * @return {HtmlOutput}
*/
function doGet(e){
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle(SITE_TITLE)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

/**
   * Get
   * @param {} e
   * @return {void}
*/
function doGetTestWithGssModelessDialog(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const html = HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle(SITE_TITLE)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
  ss.show(html);
}

/**
   * Get
   * @param {} e
   * @return {void}
*/
function doGetTestWithGssSidebar(e) {
  const html = HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle(SITE_TITLE)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
   * Get
   * @param {} e
   * @return {void}
*/
function doGetTestWithGssModalDialog(e) {
  const html = HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle(SITE_TITLE)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
  SpreadsheetApp.getUi().showModalDialog(html, "Test dialog");
}

