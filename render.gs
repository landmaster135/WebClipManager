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
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function doGetTestWithGssModelessDialog(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const html = HtmlService.createTemplateFromFile("index").evaluate();
  ss.show(html);
}

function doGetTestWithGssSidebar(e) {
  const html = HtmlService.createTemplateFromFile("index").evaluate();
  SpreadsheetApp.getUi().showSidebar(html);
}

function doGetTestWithGssModalDialog(e) {
  const html = HtmlService.createTemplateFromFile("index").evaluate();
  SpreadsheetApp.getUi().showModalDialog(html, "Test dialog");
}

