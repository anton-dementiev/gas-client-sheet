//PAYMENTS

function createPayment(paymentData) {
  //Implement validation of form fields;
    let newPayment = sendRequest(`payments`, "POST", paymentData);
    Logger.log(newPayment);
    return newPayment;
 
}


function getAllPayments() {

  let response = sendRequest("payments", "GET");
  response.data.payments = response.data.payments.map(payment => {
    payment.currency_id = payment.currency_id ? `${payment.currency_id}` : "";
    payment.client_id = payment.client_id ? `${payment.client_id}` : "";
    payment.date = payment.date.split("T")[0];
    return payment;
  })

  response.data.currenciesDropdown = response.data.currenciesDropdown.reduce((acc, c) => {
    console.log(c);
    console.log(acc);

   acc[`${c.currency_id}`] = c.title;
   return acc;
  }, {});


 response.data.clientsDropdown = response.data.clientsDropdown.reduce((acc, c) => {
    console.log(c);
    console.log(acc);

   acc[`${c.client_id}`] = c.name;
   return acc;
  }, {});

  
  //response.data.currenciesDropdown = currenciesDropdown;
  
 
  return response.data;
  
}

// Get All Payments as a View 
function getAllPaymentsView(){
  let response = sendRequest("payments_view","GET");
  response.data = response.data.map(payment => {
      return {...payment, date: payment["date"].split("T")[0]};
  });

  Logger.log(response);
  return response;
}