import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
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
const Signup_ChoosePassword = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
        />
        <Icon
          name={showPassword ? "eye" : "eye-slash"}
          size={20}
          onPress={togglePasswordVisibility}
        />
      </View>
      {/* {false ? (
        <ActivityIndicator size="large" color="white" />
      ) : ( */}
      <Text
        style={formbtn}
        onPress={() => {
          navigation.navigate(Signup_AccountCreated);
        }}
      >
        Next
      </Text>
      {/* )} */}
    </View>
  );
};

export default Signup_ChoosePassword;

const styles = StyleSheet.create({});
