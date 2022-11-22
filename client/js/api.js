//API

//Get all Clients
export async function getAllClients() {
  return await new Promise((res, rej) =>
    google.script.run
      .withSuccessHandler(res)
      .withFailureHandler(rej)
      .getAllClients()
  );
}

//Get All Projects
export async function getAllProjects() {
  return await new Promise((res, rej) => {
    google.script.run
      .withSuccessHandler(res)
      .withFailureHandler(rej)
      .getAllProjects();
  });
}
