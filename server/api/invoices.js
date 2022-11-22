//INVOICES

//Get All Invoices
function getAllInvoices() {
  //implement
   let response = sendRequest("invoices", "GET");
  response.data = response.data.map(invoice => {
    return {...invoice, date: invoice["date"].split("T")[0], due_date: invoice["due_date"].split("T")[0]};
  });

  Logger.log(response);
  return response;
}


function getAllInvoicesView() {
  let response = sendRequest("invoices_view", "GET");
  response.data = response.data.map(invoice => {
    return {...invoice, date: invoice["date"].split("T")[0], due_date: invoice["due_date"].split("T")[0]};
  });

  Logger.log(response);
  return response;
}