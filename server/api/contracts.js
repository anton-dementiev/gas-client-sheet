//CONTRACTS

function createContract(contractData) {
  Logger.log("create contract");
  Logger.log(contractData);
  let newContract = sendRequest("contracts", "POST", contractData);
  return newContract;
}

function getAllContracts() {
let contracts = sendRequest("contracts", "GET");
contracts.data = contracts.data.map( contract => {
  contract.date_signed = contract.date_signed.split("T")[0];
  contract.date_closed = contract.date_signed.split("T")[0];
  return contract;
});
return contracts;
}

function getAllContractsView() {
let contracts = sendRequest("contracts_view", "GET");
contracts.data = contracts.data.map( contract => {
  contract.date_signed = contract.date_signed.split("T")[0];
  contract.date_closed = contract.date_signed.split("T")[0];
  return contract;
});
return contracts;
}


function getContractById(contractId) {
    let contract = sendRequest(`contracts/${contractId}`, "GET");
    // contract.data = contract.data.map( contract => {
    //   contract.date_signed = contract.date_signed.split("T")[0];
    //   contract.date_closed = contract.date_signed.split("T")[0];
    //   return contract;
    // });

  return contract.data[0];
}
