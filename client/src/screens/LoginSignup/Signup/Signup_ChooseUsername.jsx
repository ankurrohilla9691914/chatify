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
import Signup_EnterEmail from "./Signup_EnterEmail";
import { verifyUserName } from "../../../service/api";
import { PRIMARY_COLOR } from "../../../constants";

const Signup_ChooseUsername = ({ navigation, route }) => {
  const { email } = route.params;
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserName = async () => {
    setLoading(true);

    const data = await verifyUserName({ userName: userName, email: email });
    if (userName == "") {
      setErrorMessage("please enter username");
      setShowError(true);
      setLoading(false);
    } else if (data.message == "userName not available") {
      setLoading(false);
      setShowError(true);
      setErrorMessage("userName not available");
    } else {
      navigation.navigate("Signup_ChoosePassword", {
        email: email,
        userName: userName,
      });
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
      <Text style={formHead3}>Choose username</Text>
      <TextInput
        placeholder="choose username  ..."
        style={formInput}
        onChangeText={(text) => {
          setUserName(text);
        }}
        onChange={() => {
          setLoading(false);
          setShowError(false);
        }}
      />
      {showError && <Text style={errorText}>{errorMessage} </Text>}

      {loading ? (
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      ) : (
        <Text style={formbtn} onPress={handleUserName}>
          Next
        </Text>
      )}
    </View>
  );
};

export default Signup_ChooseUsername;

const styles = StyleSheet.create({});
