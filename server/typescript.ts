type Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;

function testFunction(message: string): Spreadsheet {
  return SpreadsheetApp.getActiveSpreadsheet();
}
