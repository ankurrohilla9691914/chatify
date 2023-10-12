import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { containerFull, logo1, row } from "../../../globalStyle/pagecss";
import chatify_logo from "./../../../../assets/Chatify_logo.png";
import { formbtn, formHead2 } from "../../../globalStyle/formcss";
import { MaterialIcons } from "@expo/vector-icons";
import MainPage from "../../MainPage/MainPage";
import Login from "../Login/Login";
const ForgotPassword_AccountRecovered = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={chatify_logo} style={logo1} />
      <View style={row}>
        <MaterialIcons name="check-circle" size={40} color={"#0C6C9F"} />
        <Text style={formHead2}>Account recovered successfully</Text>
      </View>

      <Text
        style={formbtn}
        onPress={() => {
          navigation.navigate(Login);
        }}
      >
        Let's Roll
      </Text>
    </View>
  );
};

export default ForgotPassword_AccountRecovered;

const styles = StyleSheet.create({});
