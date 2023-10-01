import ApiContext from "./ApiContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ApiState = (props) => {
  console.log(process.env.REACT_APP_SERVER_URL);
  const host = process.env.REACT_APP_SERVER_URL || "http://localhost:8000";

  const [profile, setProfile] = useState(null);
  const [city, setCity] = useState(null);
  const [loginStatus, setLoginStatus] = useState(true);
  const [cartitems, setCartitems] = useState([]);
  const [totalprice, setTotalprice] = useState(0)
	const [totalquantity, setTotalquantity] = useState(0)
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile();
    } else {
      setLoginStatus(false);
    }
  }, []);

  const addToCart = async (id, city) => {
    console.log(id, city,"from api state");
    return axios
      .post(
        `${host}/api/user/addtocart`,
        { item: id, city: city },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        return [error, true];
      });
  };

  const getProfile = async () => {
    return axios
      .get(`${host}/api/user/profile`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        setProfile(response.data);
        toast.dismiss();
        toast(`you are logged in as ${response.data.email}`);
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        return [error, true];
      });
  };

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
        getProfile();
        setLoginStatus(true);
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

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setLoginStatus(false);
    setProfile(null);
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
      formData.append(`images`, file);
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

  const getStats = async () => {
    return axios
      .get(`${host}/api/admin/getStats`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        return [error, true];
      });
  };

  const getItems = async (params) => {
    return axios
      .get(`${host}/api/user/items`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: params,
      })
      .then(function (response) {
        console.log(response.data.results);
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        return [error, true];
      });
  };

  const addCityListing = async (city, id) => {
    return axios
      .post(
        `${host}/api/admin/addCityListing`,
        { city: city, id: id },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        return [response, false];
      })
      .catch(function (error) {
        console.log(error);
        return [error, true];
      });
  };

  const getCartItems = async () => {
    return axios
    .get(`${host}/api/user/getcartItems`,{
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(function (response) {
      var temp = 0;
      console.log(response);
      cartitems = response.data;
			for (let i=0; i<cartitems.length; i++) {
        console.log(cartitems[i]['item']['price']);
				temp += (cartitems[i]['item']['price'] * cartitems[i]['quantity']);
			}
      console.log(temp);;
      setCartitems(response.data);
			setTotalprice(temp);
      return [response, false];
    })
    .catch(function (error) {
      console.log(error);
      return [error, true];
    });
  }

  const handlePriceChange = (increase,price) => {
		if (increase) {
			setTotalquantity(totalquantity + 1);
			setTotalprice(totalprice + price);
		} else {
			if (totalquantity > 1) {
				setTotalquantity(totalquantity - 1);
				setTotalprice(totalprice - price);
			}
		}
	}



  return (
    <ApiContext.Provider
      value={{
        addToCart,
        login,
        signup,
        addItem,
        getStats,
        city,
        setCity,
        getItems,
        getProfile,
        profile,
        loginStatus,
        logout,
        addCityListing,
        getCartItems,
        cartitems,
        handlePriceChange,
        totalprice
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
