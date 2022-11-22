//Imports

import { getAllClients, getAllProjects } from "./api";
import { createPicker } from "./google_picker";

console.log("contract is loaded");

//CONSTANTS
//CACHED DOM ELEMENTS
const $clientDropdown = document.querySelector("[name='client_id']");
const $projectDropdown = document.querySelector("[name='project_id']");
const $fileInput = document.querySelector("[name='file_id']");

/* Contract Form */ let formPage = 0;
//form sections
const $contractSection = document.querySelector("#contract-main");
const $contractItemsSection = document.querySelector("#contract-items");
const $contractFileSection = document.querySelector("#contract-file");
const formPages = [
  $contractSection,
  $contractItemsSection,
  $contractFileSection,
];

//form controls
const $nextBtn = document.querySelector("#next-btn");
const $prevBtn = document.querySelector("#prev-btn");
const $subBtn = document.querySelector("#sub-btn");

//Event Listeners
document.addEventListener("DOMContentLoaded", onPageLoad);

$fileInput.addEventListener("click", showContractFilePicker);
$nextBtn.addEventListener("click", onClickNext);
$prevBtn.addEventListener("click", onClickNext);

//Render Form after page is Loaded
function onPageLoad() {
  renderNewContractForm();
}

/* Renders Contract form with Dropdowns */
function renderNewContractForm() {
  renderClientsDropdown();
  renderProjectsDropdown();
}

/* renderClientsDropdown */
async function renderClientsDropdown() {
  let clients = await getAllClients();
  if (!clients.error && clients.data) {
    //Remove Loading... message
    $clientDropdown.querySelector("option:checked").remove();
    clients.data.forEach((client) => {
      let $option = document.createElement("option");
      $option.setAttribute("value", client.client_id);
      $option.innerText = client.name;
      $clientDropdown.appendChild($option);
    });
  } else console.log("error getting clients dropdown", clients.error);
}

/* renderProjectsDropdown */
async function renderProjectsDropdown() {
  let projects = await getAllProjects();
  if (!projects.error && projects.data) {
    //Remove Loading.. message
    $projectDropdown.querySelector("option:checked").remove();

    projects.data.forEach((project) => {
      let $option = document.createElement("option");
      $option.setAttribute("value", project.project_id);
      $option.innerText = project.title;
      $projectDropdown.appendChild($option);
    });
  } else console.log("error getting projects dropdown", projects.error);
}

//Displays a picker for the contract file
//Upload, select, create from template
function showContractFilePicker(e) {
  console.log("Picker inited");
  e.preventDefault();
  createPicker();
}

// Form navigation
function onClickNext(e) {
  let activePage = formPages[formPage];
  let nextPage =
    e.target.id === "next-btn" ? formPages[++formPage] : formPages[--formPage];
  if (formPage === formPages.length - 1) {
    $nextBtn.classList.add("custom-hidden");
    $prevBtn.classList.remove("custom-hidden");
    $subBtn.classList.remove("custom-hidden");
  } else if (formPage === 0) {
    $nextBtn.classList.remove("custom-hidden");
    $prevBtn.classList.add("custom-hidden");
    $subBtn.classList.add("custom-hidden");
  } else {
    $nextBtn.classList.remove("custom-hidden");
    $prevBtn.classList.remove("custom-hidden");
    $subBtn.classList.add("custom-hidden");
  }
  activePage.classList.add("custom-hidden");
  nextPage.classList.remove("custom-hidden");
}
