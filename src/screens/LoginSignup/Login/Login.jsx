import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import chatify_logo from "./../../../../assets/Chatify_logo.png";
import { containerFull, hr80, logo1 } from "../../../globalStyle/pagecss";
import {
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
const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleOnSubmit = () => {
    navigation.navigate(MainPage);
  };

  const handleOnSignup = () => {
    navigation.navigate(Signup_EnterEmail);
  };

  return (
    <View style={containerFull}>
      <Image
        source={chatify_logo}
        style={logo1}
      />
      <TextInput placeholder="Enter your email..." style={formInput} />
      <View style={passwordInputContainer}>
        <TextInput
          placeholder="Enter yorur password..."
          style={formInput}
          secureTextEntry={!showPassword}
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
      <Text style={formbtn} onPress={handleOnSubmit}>
        Submit
      </Text>
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
