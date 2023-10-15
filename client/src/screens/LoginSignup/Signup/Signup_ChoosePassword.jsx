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
import Signup_ChooseUsername from "./Signup_ChooseUsername";
import Signup_AccountCreated from "./Signup_AccountCreated";
import { handleSignup } from "../../../service/api";
import { PRIMARY_COLOR } from "../../../constants";
const Signup_ChoosePassword = ({ navigation, route }) => {
  const { userName, email } = route.params;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCreatingNewuser = async () => {
    setLoading(true);
    setShowError(false);
    if (password == "" &&  confirmPassword == "") {
      setShowError(true);
      setErrorMessage("please choose a strong password");
      setLoading(false);
    } else if (password !== confirmPassword) {
      setShowError(true);
      setErrorMessage("password didn't match");
      setLoading(false);
    } else {
      const data = await handleSignup({
        email: email,
        userName: userName,
        password: password,
      });

      navigation.navigate(Signup_AccountCreated);
      setLoading(false);
      setShowError(false);
    }
  };
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate(Signup_ChooseUsername)}
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
        <Text style={goBackContainer}>Go Back</Text>
      </TouchableOpacity>

      <Image source={chatify_logo} style={logo1} />
      <Text style={formHead3}>Choose password</Text>
      <View style={passwordInputContainer}>
        <TextInput
          placeholder="Enter your password..."
          style={formInput}
          secureTextEntry={!showPassword}
          onChangeText={(text) => {
            setPassword(text);
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
        <Text style={formbtn} onPress={handleCreatingNewuser}>
          Next
        </Text>
      )}
    </View>
  );
};

export default Signup_ChoosePassword;

const styles = StyleSheet.create({});
