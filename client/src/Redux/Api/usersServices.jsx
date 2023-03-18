import Axios from "./axios";

//llamada de nuevo usuario registrado de la Api

const registerService = async (user) => {
const { data }= await Axios.post("/users", user);
    if (data) {
    localStorage. setItem("userInfo", JSON.stringify(data));
    }
return data;
};

// logout funcion user

const logoutService = () => {
    localStorage. removeltem("userInfo");
return null
}

// Login llamada de usuario APi

const loginService = async (user) => {
const { data } = await Axios.post("/users/login", user);
    if (data) {
    localStorage. setItem("userInfo", JSON.stringify(data));
}

return data;

};

export {registerService, logoutService, loginService};

