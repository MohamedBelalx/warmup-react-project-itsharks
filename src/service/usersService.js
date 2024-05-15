import axios from "axios";
function usersService() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

export default usersService;
