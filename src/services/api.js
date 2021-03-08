import { server } from "@/services/constants";
import router from "@/router";


const isLoggedIn = () => {
  let token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
};
const login =  values => {
    localStorage.setItem(server.USERNAME, values.username);
    localStorage.setItem(server.TOKEN_KEY,"1234");
   return true;
};

const logoff = () => {
  localStorage.removeItem(server.TOKEN_KEY);
  router.push("/login");
};


export default {
  login,
  isLoggedIn,
  logoff

};



