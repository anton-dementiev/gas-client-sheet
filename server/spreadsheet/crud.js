

//Get sheet by name
function getSheetByName (sheetName) {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  return sheet;
  
}

//Write array of values to sheet
function writeToSheet(sheetName, values, includeHeader) {

  let sheet = getSheetByName(sheetName);
  //clear old values from the sheet
  clearDataRange(sheet);
  let range = sheet.getRange(1,1, values.length, values[0].length);
  range.setValues(values);
}

//Append row 
function appendRow(sheetName, values) {
  let sheet = getSheetByName(sheetName);
  sheet.appendRow(values);
}

//Clear data range for a sheet
function clearDataRange(sheet) {
  sheet.getDataRange().clearDataRange();
}


/* Convert array of objects to array of arrays writable to sheet */
function convertToRows(arr) {
  
  //Object.keys(arr[0]) - get header and contatenate with the rest of the array
  return [Object.keys(arr[0])].concat(arr.map(entry => [...Object.values(entry)]));


}