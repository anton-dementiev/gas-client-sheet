const INVOICES_SHEET = "invoices_raw";


function writeInvoicesToSheet () {

   //Fetch payments data
    let response = getAllInvoicesView();

    if (response.error === false && response.message === "Success" && response.data) {

      let invoices =  response.data;
      Logger.log(invoices);
      let ss = SpreadsheetApp.getActiveSpreadsheet();
      let invoicesSheet = ss.getSheetByName(INVOICES_SHEET);

      //clear range
      invoicesSheet.getDataRange().clear();

      //convert array of objects to array of arrays for writing 
      let rows = convertToRows(invoices);
      Logger.log(rows);
      let range = invoicesSheet.getRange(1,1, rows.length, rows[0].length);
      range.setValues(rows);

    } else {
      showToast(response.error, "Error writing invoices to sheet", 3);
    }

   

}



