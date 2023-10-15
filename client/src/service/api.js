import axios from "axios";

export const verifyEmail = async ({ email }) => {
  try {
    /** using fetch */
    //   const response = await fetch("http://192.168.31.130:8000/auth/verify", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //     }),
    //   });
    //   // console.log("response ->", response);
    //   const data = await response.json();
    //   console.log("data insie ->", data);
    //   return data;
    // } catch (error) {
    //   console.log("error inside ->", error);
    // }

    const response = await axios.post(
      "http://192.168.31.130:8000/auth/verify",
      {
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response?.data);
    return response.data;
  } catch (e) {
    // console.log("error in calling verify api  ->", e.response.data);
    return e.response.data;
  }
};

export const verifyUserName = async ({ userName, email }) => {
  try {
    const response = await axios.post(
      "http://192.168.31.130:8000/auth/changeUserName",
      {
        userName: userName,
        email: email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("error in calling username api  ->", e.response.data);
    return e.response.data;
  }
};

export const handleSignup = async ({ userName, email, password }) => {
  try {
    const response = await axios.post(
      "http://192.168.31.130:8000/auth/signup",
      {
        userName: userName,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response.data");

    return response.data;
  } catch (e) {
    console.log("error in calling username api  ->", e.response.data);
    return e.response.data;
  }
};
