//CLIENTS

function getAllClients () {
  let clients = sendRequest("clients", "GET");
  console.log(clients);
  return clients;
}

function updateClient (clientId, updatedClient) {
  let updatedRows = sendRequest(`clients/${clientId}`, "PUT", updatedClient);
  console.log(updatedRows);
  return updatedRows;
}
