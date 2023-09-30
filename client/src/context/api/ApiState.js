import ApiContext from "./ApiContext";
// import axios from 'axios'
import axios from "axios";

const ApiState = (props) => {
  const host = "http://localhost:8000";

  const login = async (isadmin, creds) => {
    let reqBody = {
      email: creds.email,
      password: creds.password,
      role: isadmin ? "admin" : "user",
    };
    return axios
      .post(`${host}/api/auth/login`, reqBody, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", isadmin ? "admin" : "user");
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        return [error, true];
      });
  };

  const signup = async (creds) => {
    return axios
      .post(`${host}/api/auth/signup`, creds, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        return [error, true];
      });
  };

  const addItem = async (item) => {
    console.log(item);
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("description", item.description);
    formData.append("price", item.price);
    formData.append("quantity", item.quantity);
    formData.append("category", item.category);
    item.images.forEach((file) => {
      formData.append(`images`, file)
    });
    return axios
      .post(`${host}/api/admin/additem`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        console.log(response);
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        return [error, true];
      });
  };

  return (
    <ApiContext.Provider value={{ login, signup, addItem }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
