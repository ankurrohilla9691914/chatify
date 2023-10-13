import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { containerFull, logo2, logo3 } from "../globalStyle/pagecss";
import chatify_logo from "./../../assets/Chatify_logo.png";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../constants";
import All_Chats from "../screens/ChatSection/All_Chats";
import Settings1 from "../screens/Settings/Settings1";
const TopNavBar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
      <Image source={chatify_logo} style={logo3} backgroundColor={"white"} />
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "monospace",
        }}
      >
        Chatify
      </Text>

      {page === "MyProfile" ? (
        <Ionicons
          name="settings"
          size={24}
          color={"white"}
          onPress={() => {
            navigation.navigate(Settings1);
          }}
        />
      ) : (
        <AntDesign
          name={"message1"}
          size={24}
          color="white"
          onPress={() => {
            navigation.navigate(All_Chats);
          }}
        />
      )}
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    top: 0,
    position: "absolute",
    // borderRadius: 10,
    zIndex: 10,
  },
});
