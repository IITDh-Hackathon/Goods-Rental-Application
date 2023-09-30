import ApiContext from "./ApiContext";
// import axios from 'axios'
import axios from "axios";

const ApiState = (props) => {
  const host = "http://localhost:8000";

    const login = async (isadmin,creds) => {
        let reqBody = {
            "email": creds.email,
            "password": creds.password,
            "role": isadmin ? "admin" : "user"
        }
        return axios.post(`${host}/api/auth/login`, reqBody, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("role", isadmin ? "admin" : "user")
            return [response,false];
        })
            .catch(function (error) {
                console.log(error)
                return [error,true];
            });
    }

    const signup = async (creds) =>{
        return axios.post(`${host}/api/auth/signup`, creds, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(function (response) {
            localStorage.setItem("token", response.data.token)
            return [response,false];
        })
            .catch(function (error) {
                console.log(error)
                return [error,true];
            });
    }

  return (
    <ApiContext.Provider value={{ login, signup }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
