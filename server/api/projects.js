//PROJECTS
function getAllProjects() {
  let projects = sendRequest("projects", "GET");
  return projects;
}
