import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import chatify_logo from "./../../../../assets/Chatify_logo.png";
import { containerFull, hr80, logo1 } from "../../../globalStyle/pagecss";
import {
  errorText,
  formInput,
  formTextLink,
  formTextLinkCenter,
  formTextLinkRight,
  formbtn,
  passwordInputContainer,
} from "../../../globalStyle/formcss";
import Icon from "react-native-vector-icons/FontAwesome";
import ForgotPassword_EnterEmail from "../ForgotPassword/ForgotPassword_EnterEmail";
import MainPage from "../../MainPage/MainPage";
import Signup_EnterEmail from "../Signup/Signup_EnterEmail";
import { login } from "../../../service/api";
import { PRIMARY_COLOR } from "../../../constants";
const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleOnSubmit = async () => {
    setLoading(true);
    if (email == "" || password == "") {
      setShowError(true);
      setErrorMessage("please enter valid email and password");
      setLoading(false);
    } else {
      try {
        const data = await login({ email: email, password: password });
        if (data.error) {
          setLoading(false);
          setShowError(true);
          setErrorMessage("invalid credentials");
        } else {
          navigation.navigate(MainPage);
          setLoading(false);
          setShowError(false);
        }
      } catch (error) {
        setShowError(true);
        setErrorMessage(error.message);
      }
    }
  };

  const handleOnSignup = () => {
    navigation.navigate(Signup_EnterEmail);
  };

  return (
    <View style={containerFull}>
      <Image source={chatify_logo} style={logo1} />
      <TextInput
        placeholder="Enter your email..."
        style={formInput}
        onChangeText={(text) => {
          setEmail(text);
        }}
        onChange={() => {
          setLoading(false);
          setShowError(false);
        }}
      />
      <View style={passwordInputContainer}>
        <TextInput
          placeholder="Enter your password..."
          style={formInput}
          secureTextEntry={!showPassword}
          onChangeText={(text) => {
            setPassword(text);
          }}
          onChange={() => {
            setLoading(false);
            setShowError(false);
          }}
        />
        <Icon
          name={showPassword ? "eye" : "eye-slash"}
          size={20}
          onPress={togglePasswordVisibility}
        />
      </View>
      <Text
        style={formTextLinkRight}
        onPress={() => {
          navigation.navigate(ForgotPassword_EnterEmail);
        }}
      >
        Forgot Password?
      </Text>
      {showError && <Text style={errorText}>{errorMessage} </Text>}
      {loading ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : (
        <Text style={formbtn} onPress={handleOnSubmit}>
          Next
        </Text>
      )}
      <View style={hr80}></View>
      <Text style={formTextLinkCenter}>
        Don't have an account ?{" "}
        <Text style={formTextLink} onPress={handleOnSignup}>
          Signup
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
