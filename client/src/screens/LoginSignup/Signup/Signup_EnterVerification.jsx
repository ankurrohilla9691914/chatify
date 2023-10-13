import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
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
} from "../../../globalStyle/formcss";
import { MaterialIcons } from "@expo/vector-icons";
import Signup_ChoosePassword from "./Signup_ChoosePassword";
import Signup_EnterEmail from "./Signup_EnterEmail";
import Signup_ChooseUsername from "./Signup_ChooseUsername";
const Signup_EnterVerification = ({ navigation }) => {
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
          // setEmail(text);
        }}
      />
      {/* {false ? (
        <ActivityIndicator size="large" color="white" />
      ) : ( */}
      <Text
        style={formbtn}
        onPress={() => {
          navigation.navigate(Signup_ChooseUsername);
        }}
      >
        Next
      </Text>
      {/* )} */}
    </View>
  );
};

export default Signup_EnterVerification;

const styles = StyleSheet.create({});
