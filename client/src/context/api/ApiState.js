import ApiContext from './ApiContext';
import Axios from 'axios'

const ApiState = (props) => {
    const host = 'http://localhost:5000';

    const login = async (isadmin,creds) => {
        await Axios.post(`${host}/api/auth/loginuser`, creds, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(isadmin)
        }).then(function (response) {
            localStorage.setItem("token", response.data.token)
            return [response.status,false];
        })
            .catch(function (error) {
                console.log(error)
                return [error.response.status,true];
            });
    }

    const signup = async (creds) =>{
        await Axios.post(`${host}/api/auth/createuser`, creds, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(function (response) {
            localStorage.setItem("token", response.data.token)
            return [response.status,false];
        })
            .catch(function (error) {
                console.log(error)
                return [error.response.status,true];
            });
    }

    return (
        <ApiContext.Provider value={{ login, signup }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState;