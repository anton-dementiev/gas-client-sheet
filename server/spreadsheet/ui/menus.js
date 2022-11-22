//Show Menu
function showMenu() {
  let ui = SpreadsheetApp.getUi();
  ui.createMenu("Fundemic").addItem("New contract", "newContractClicked")
                           .addToUi();
}



//Contracts
//New Contract
function newContractClicked() {

  let newContractHtml = buildHtml("client/contract_new", null, 600, 600);
  showModalDialog(newContractHtml, "New contract");

}



//Show dialog
function showModalDialog(htmlOutput, title) {

  let ui = SpreadsheetApp.getUi();
  ui.showModalDialog(htmlOutput, title);
  
  
}

//show Toast
function showToast(msg, title, timeInSec) {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.toast(msg, title, timeInSec);
}

//Create HTML Output 

function buildHtml (path, data, width, height) {

  let template = HtmlService.createTemplateFromFile(path);

  //Assign data to template if present
  if (data && typeof(data) === 'object') {
    for (let key in data) {
      template[key] = data[key];
    }
  }
 
 return template.evaluate().setWidth(width).setHeight(height);

}