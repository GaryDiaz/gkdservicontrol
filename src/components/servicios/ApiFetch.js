const apiURL = "http://192.168.1.109/gkd_servicontrol_api/";

function getApiURL(recurso) {
  return apiURL + recurso;
}

function getHeaders(token = "") {
  let headers = { "Content-Type": "aplication/json" };
  if (token) {
    headers = { "Content-Type": "aplication/json", "GKD-Token": token };
  }
  return headers;
}

export const getLogin = async (loginData) => {
  const response = await fetch(getApiURL("login"), {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "aplication/json",
    },
  });
  return await response.json();
};

export const getList = async (nombreLista, token) => {
  const response = await fetch(getApiURL(nombreLista), { headers: getHeaders(token) });
  return await response.json();
};
