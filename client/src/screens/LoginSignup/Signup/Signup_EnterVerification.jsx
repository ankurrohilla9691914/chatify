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
} from "../../../globalStyle/formcss";
import { MaterialIcons } from "@expo/vector-icons";
import Signup_ChoosePassword from "./Signup_ChoosePassword";
import Signup_EnterEmail from "./Signup_EnterEmail";
import Signup_ChooseUsername from "./Signup_ChooseUsername";
import { PRIMARY_COLOR } from "../../../constants";
const Signup_EnterVerification = ({ navigation, route }) => {
  const { email, verificationCode } = route.params;

  const [enteredVerificationCode, setEnteredVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerficationCode = () => {
    setLoading(true);

    if (enteredVerificationCode !== verificationCode.toString()) {
      setShowError(true);
      setErrorMessage("Incorrect verification code");
      setLoading(false);
    } else {
      navigation.navigate("Signup_ChooseUsername", { email: email });
      setLoading(false);
    }
  };
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate(Signup_EnterEmail)}
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
        <Text style={goBackContainer}>Go Back</Text>
      </TouchableOpacity>

      <Image source={chatify_logo} style={logo1} />
      <Text style={formHead3}>
        A verification code has been sent to your email
      </Text>
      <TextInput
        placeholder="Enter verification code ..."
        style={formInput}
        onChangeText={(text) => {
          setEnteredVerificationCode(text);
        }}
        onChange={() => {
          setShowError(false);
        }}
      />
      {showError && <Text style={errorText}>{errorMessage} </Text>}
      {loading ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : (
        <Text style={formbtn} onPress={handleVerficationCode}>
          Next
        </Text>
      )}
    </View>
  );
};

export default Signup_EnterVerification;

const styles = StyleSheet.create({});
