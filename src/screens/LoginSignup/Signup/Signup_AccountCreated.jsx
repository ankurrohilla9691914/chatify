import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { containerFull, logo1, row } from "../../../globalStyle/pagecss";
import chatify_logo from "./../../../../assets/Chatify_logo.png";
import { formbtn, formHead2 } from "../../../globalStyle/formcss";
import { MaterialIcons } from "@expo/vector-icons";
import MainPage from "../../MainPage/MainPage";
import Login from "../Login/Login"
import { PRIMARY_COLOR } from "../../../constants";
const Signup_AccountCreated = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={chatify_logo} style={logo1} />
      <View style={row}>
        <MaterialIcons name="check-circle" size={40} color={PRIMARY_COLOR} />
        <Text style={formHead2}>Account created successfully</Text>
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

export default Signup_AccountCreated;

const styles = StyleSheet.create({});
