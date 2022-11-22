const ENDPOINT = 'https://www.fundemic.party/api/';


//SENT REQUEST 
function sendRequest (route, method, data) {

  Logger.log(data);

    let options = {
      method: method,
      muteHttpExceptions: true,
    };

   if (data) {
     options.contentType = 'application/json';
     options.payload = JSON.stringify(data);
   } 

   Logger.log("OPTIONS");
   Logger.log(options);

    let response = UrlFetchApp.fetch(`${ENDPOINT}${route}`, options);
    Logger.log(response);
    if (response.getResponseCode() === 200) {
      Logger.log(response);
      return parseJson(response.getContentText());
    } 

    return {error: `Server responded with a status code of ${response.getResponseCode()}`};

}





//Get OAuth token for Google picker
function getOauthToken() {
DriveApp.getFiles();
return ScriptApp.getOAuthToken();
}


//Helper function to parse JSON
 function parseJson(jsonAsText) {
  try {
    let parsedJson = JSON.parse(jsonAsText);
    return parsedJson;
  } catch(e) {
      return {error: e};
  }
}





