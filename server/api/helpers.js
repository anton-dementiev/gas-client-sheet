
//Get CB Rate
function getRateCB(formattedDate, charCode) {
  let rate = sendRequest(`helpers/cbr?date=${formattedDate}&charcode=${charCode}`, "GET")
  console.log(rate);
  return rate.data;
}
