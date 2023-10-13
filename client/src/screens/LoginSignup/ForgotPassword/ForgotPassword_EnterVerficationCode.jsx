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
  hr80,
  logo1,
} from "../../../globalStyle/pagecss";
import chatify_logo from "./../../../../assets/Chatify_logo.png";
import {
  formbtn,
  formHead3,
  formInput,
} from "../../../globalStyle/formcss";
import { MaterialIcons } from "@expo/vector-icons";
import ForgotPassword_ChoosePassword from "./ForgotPassword_ChoosePassword";
import ForgotPassword_EnterEmail from "./ForgotPassword_EnterEmail";
const ForgotPassword_EnterVerificationCode = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate(ForgotPassword_EnterEmail)}
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
        placeholder="Enter verification code"
        style={formInput}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      {false ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text
          style={formbtn}
          onPress={() => {
            navigation.navigate(ForgotPassword_ChoosePassword);
          }}
        >
          Next
        </Text>
      )}
    </View>
  );
};

export default ForgotPassword_EnterVerificationCode;

const styles = StyleSheet.create({});
