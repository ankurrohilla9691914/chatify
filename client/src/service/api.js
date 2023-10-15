import axios from "axios";
import { errorText } from "../globalStyle/formcss";

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
    return response.data;
  } catch (e) {
    console.log("error in calling verifyEmail api", error);
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
    console.log("error in calling verifyUserName api", error);

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

    return response.data;
  } catch (e) {
    console.log("error in calling handleSignup api", error);

    return e.response.data;
  }
};

export const verifyForgotPasswordEmail = async ({ email }) => {
  try {
    const response = await axios.post(
      "http://192.168.31.130:8000/auth/verifyForgotPassword",
      {
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
    console.log("error in calling verifyForgotPassword api", error);

    return e.response.data;
  }
};

export const resetPassword = async ({ email, password }) => {
  try {
    const response = await axios.post(
      "http://192.168.31.130:8000/auth/resetPassword",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("error in calling resetPassword api", error);

    return e.response.data;
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(
      "http://192.168.31.130:8000/auth/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("error in calling login api", error);

    return e.response.data;
  }
};
