const axios = require("axios");


export async function loginUser(login) {
  console.log(login, "from API JS");
  return axios.post(`/api/login`, login);
}

export async function loginInfo(login) {
  console.log(login, "from API JS");
  return axios.get(`/api/login`, login);
}
