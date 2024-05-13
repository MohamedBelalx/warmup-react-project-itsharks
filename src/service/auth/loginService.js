import axios from "axios";
const loginService = (body) => {
  return axios.post("http://127.0.0.1:8000/api/auth/login", {
    body: body,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });
};

export default loginService;
