const apiURL = "http://192.168.1.109/gkd_servicontrol_api/";

function getApiURL(recurso, id = null) {
  return id ? apiURL + recurso + "/" + id : apiURL + recurso;
}

function getHeaders(token = "") {
  let headers = { "Content-Type": "aplication/json" };
  if (token) {
    headers = {
      "Content-Type": "aplication/json",
      "GKD-Token": token,
    };
  }
  return headers;
}

export const getLogin = async (loginData) => {
  const response = await fetch(getApiURL("login"), {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: getHeaders(),
  });
  return await response.json();
};

export const getRecurso = async (recurso, token, id = null) => {
  const response = await fetch(getApiURL(recurso, id), { headers: getHeaders(token) });
  return await response.json();
};
