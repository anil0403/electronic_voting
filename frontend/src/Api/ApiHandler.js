import axios from "axios";
const baseurl = "http://localhost:3001";

// admin login
export const adminLogin = async (username, password) => {
  return await axios({
    method: "POST",
    url: baseurl + "/admin-login",
    data: {
      username: username,
      password: password,
    },
  }).then((response) => {
    return response.data;
  });
};
