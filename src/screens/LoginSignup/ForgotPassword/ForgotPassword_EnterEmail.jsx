import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
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
import { formbtn, formHead2, formInput } from "../../../globalStyle/formcss";
import { MaterialIcons } from "@expo/vector-icons";
import ForgotPassword_EnterVerificationCode from "./ForgotPassword_EnterVerficationCode";
import Login from "../Login/Login";
const ForgotPassword_EnterEmail = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate(Login)}
        style={goback}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
        <Text style={goBackContainer}>Go Back</Text>
      </TouchableOpacity>

      <Image source={chatify_logo} style={logo1} />
      <Text style={formHead2}>Enter your email</Text>

      <TextInput
        placeholder="Enter Your Email..."
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
            console.log("hello 1");
            navigation.navigate(ForgotPassword_EnterVerificationCode);
            console.log("hello 2");
          }}
        >
          Next
        </Text>
      )}
    </View>
  );
};

export default ForgotPassword_EnterEmail;

const styles = StyleSheet.create({});
