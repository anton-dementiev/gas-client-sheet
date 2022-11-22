const EXPENSES_SHEET = "expenses_raw";


function writeExpensesToSheet () {

   //Fetch expenses data
    let response = getAllExpensesView();

    if (response.error === false && response.message === "Success" && response.data) {

      let expenses =  response.data;
      Logger.log(expenses);
      let ss = SpreadsheetApp.getActiveSpreadsheet();
      let expensesSheet = ss.getSheetByName(EXPENSES_SHEET);

      //clear range
      expensesSheet.getDataRange().clear();

      //convert array of objects to array of arrays for writing 
      let rows = convertToRows(expenses);
      Logger.log(rows);
      let range = expensesSheet.getRange(1,1, rows.length, rows[0].length);
      range.setValues(rows);

    } else {
      showToast(response.error, "Error writing expenses to sheet", 3);
    }

   

}



