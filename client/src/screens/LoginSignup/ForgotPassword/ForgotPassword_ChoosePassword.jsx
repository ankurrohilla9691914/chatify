import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import {
  containerFull,
  goBackContainer,
  goback,
  logo1,
} from "../../../globalStyle/pagecss";
import chatify_logo from "./../../../../assets/Chatify_logo.png";
import {
  errorText,
  formbtn,
  formHead2,
  formHead3,
  formInput,
  passwordInputContainer,
} from "../../../globalStyle/formcss";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import ForgotPassword_EnterVerificationCode from "./ForgotPassword_EnterVerficationCode";
import ForgotPassword_AccountRecovered from "./ForgotPassword_AccountRecovered";
import { PRIMARY_COLOR } from "../../../constants";
import { resetPassword } from "../../../service/api";
const ForgotPassword_ChoosePassword = ({ navigation, route }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { userName, email } = route.params;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setNewPassword = async () => {
    setLoading(true);
    setShowError(false);
    if (password == "" && confirmPassword == "") {
      setShowError(true);
      setErrorMessage("please choose a strong password");
      setLoading(false);
    } else if (password !== confirmPassword) {
      setShowError(true);
      setErrorMessage("password didn't match");
      setLoading(false);
    } else {
      try {
        const data = await resetPassword({
          email: email,
          password: password,
        });
        if (data.error) {
          setLoading(false);
          setShowError(true);
          setErrorMessage(data.error);
        } else {
          navigation.navigate(ForgotPassword_AccountRecovered);
          setLoading(false);
          setShowError(false);
        }
      } catch (error) {
        setShowError(true);
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ForgotPassword_EnterVerificationCode)
        }
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
        <Text style={goBackContainer}>Go Back</Text>
      </TouchableOpacity>

      <Image source={chatify_logo} style={logo1} />
      <Text style={formHead3}>Set password</Text>
      <View style={passwordInputContainer}>
        <TextInput
          placeholder="Enter your password..."
          style={formInput}
          secureTextEntry={!showPassword}
          onChangeText={(text) => {
            setPassword(text);
          }}
          onChange={() => {
            setShowError(false);
            setLoading(false);
          }}
        />
        <Icon
          name={showPassword ? "eye" : "eye-slash"}
          size={20}
          onPress={togglePasswordVisibility}
        />
      </View>
      <View style={passwordInputContainer}>
        <TextInput
          placeholder="Confirm your password..."
          style={formInput}
          secureTextEntry={!showPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
          }}
          onChange={() => {
            setShowError(false);
            setLoading(false);
          }}
        />
        <Icon
          name={showPassword ? "eye" : "eye-slash"}
          size={20}
          onPress={togglePasswordVisibility}
        />
      </View>
      {showError && <Text style={errorText}>{errorMessage} </Text>}
      {loading ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : (
        <Text style={formbtn} onPress={setNewPassword}>
          Next
        </Text>
      )}
    </View>
  );
};

export default ForgotPassword_ChoosePassword;

const styles = StyleSheet.create({});

//$2b$08$JInNN0F4xoHeLrNYJaUWjOgX4oAQ534wEmHNoh5KbNrLXOorYVH5K
//$2b$08$JInNN0F4xoHeLrNYJaUWjOgX4oAQ534wEmHNoh5KbNrLXOorYVH5K"
