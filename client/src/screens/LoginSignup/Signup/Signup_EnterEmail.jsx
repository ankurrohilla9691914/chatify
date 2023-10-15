import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
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
  formInput,
} from "../../../globalStyle/formcss";
import { MaterialIcons } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../../../constants";
import { verifyEmail } from "../../../service/api";

const Signup_EnterEmail = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleEmail = async () => {
    setLoading(true);
    setShowError(false);
    if (email == "") {
      setErrorMessage("please enter email");
      setShowError(true);
      setLoading(false);
    } else {
      setLoading(true);
      try {
        const data = await verifyEmail({ email: email });
        if (
          data.error == "Invalid email" ||
          data.error == "User exist with this mail"
        ) {
          setLoading(false);
          setShowError(true);
          setErrorMessage(data.error);
        } else {
          setLoading(false);
          navigation.navigate("Signup_EnterVerification", {
            email: data.email,
            verificationCode: data.verificationCode,
          });
        }
      } catch (error) {
        setShowError(true);
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
  };
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
        <Text style={goBackContainer}>Go Back</Text>
      </TouchableOpacity>

      <Image source={chatify_logo} style={logo1} />
      <Text style={formHead2}>Create a new account</Text>
      <TextInput
        placeholder="Enter Your Email"
        style={formInput}
        onChangeText={(text) => {
          setEmail(text);
        }}
        onChange={() => {
          setShowError(false);
          setLoading(false);
        }}
      />
      {showError && <Text style={errorText}>{errorMessage} </Text>}
      {loading ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : (
        <Text style={formbtn} onPress={() => handleEmail()}>
          Next
        </Text>
      )}
    </View>
  );
};

export default Signup_EnterEmail;

const styles = StyleSheet.create({});
