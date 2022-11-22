/*
 * Constants
 */
/*
 * DOM Elements
 */
/*
 * Event Listeners
 */

//TODO delete
console.log("picker is running");
/* exported gapiLoaded */ /* exported handleAuthClick */ /* exported handleSignoutClick */ // Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";
// TODO(developer): Set to client ID and API key from the Developer Console
const API_KEY = "AIzaSyDq7951DWzX7tyRgnZo1bTyk_5t9Q7UZf4";
let tokenClient;
let picker;
let accessToken = null;
let pickerInited = false;
//Initialize API after page loads
document.addEventListener("DOMContentLoaded", gapiLoaded);
/**
 * Callback after api.js is loaded.
 */ function gapiLoaded() {
  gapi.load("picker", intializePicker);
}
/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */ function intializePicker() {
  pickerInited = true;
}
/**
 *  Sign in the user upon button click.
 */ async function handleAuthClick(onResult, onError) {
  return await new Promise((res, rej) =>
    google.script.run
      .withSuccessHandler((token) => res(onResult(token)))
      .withFailureHandler((error) => {
        rej(onError(error));
      })
      .getOauthToken()
  );
}

//set token
function onToken(token) {
  console.log("here is the token", token);
  accessToken = token;
  return accessToken;
}
function onTokenError(error) {
  console.log(error);
}

export async function createPicker() {
  await handleAuthClick(onToken, onTokenError);
  if (!accessToken) {
    console.log("Picker authorization error. Access token not set");
    return;
  }
  const view = new google.picker.View(google.picker.ViewId.DOCS);
  view.setMimeTypes("image/png,image/jpeg,image/jpg");
  const picker = new google.picker.PickerBuilder()
    .enableFeature(google.picker.Feature.NAV_HIDDEN)
    .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
    .setOAuthToken(accessToken)
    .setOrigin(google.script.host.origin)
    .addView(view)
    .addView(new google.picker.DocsUploadView())
    .setCallback(pickerCallback)
    .build();
  picker.setVisible(true);
}
/**
 * Displays the file details of the user's selection.
 * @param {object} data - Containers the user selection from the picker
 */ function pickerCallback(data) {
  if (data.action === google.picker.Action.PICKED)
    document.getElementById("content").innerText = JSON.stringify(
      data,
      null,
      2
    );
}
