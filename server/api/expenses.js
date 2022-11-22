//Expenses 
function getAllExpenses() {

 let response = sendRequest("expenses", "GET");

 response.data = response.data.map(expense => {
    return {...expense, date: expense["date"].split("T")[0]};
  });

  Logger.log(response);

  return response;

}

//Get expenses as a View 
function getAllExpensesView() {
  let response = sendRequest("expenses_view", "GET");
  response.data = response.data.map(expense => {
    return {...expense, date: expense["date"].split("T")[0]};
  });
  Logger.log(response);
  return response;
}