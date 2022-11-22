//CURRENCIES

//Get currency Data
function getAllCurrencies() {

    let currencies = sendRequest("currencies", "GET");
    console.log(currencies);
    return currencies;

}
