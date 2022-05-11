/**
   * Get
   * @param {string} param
   * @return {HtmlOutput}
*/
function getData(param){
  if(param == "title"){
    return "WebClipManager";
  }else if(param == "summary") {
    return "ビートルズのメンバーを紹介します";
  }
}

/**
   * Return HtmlOutput by HTML files.(role of CSS or JavaScript)
   * @param {string} fileName
   * @return {HtmlOutput}
*/
function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
