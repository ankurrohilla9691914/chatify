import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <Entypo name="home" size={24} color="white" />
      <Entypo name="heart" size={24} color="white" />
      <FontAwesome name="search" size={24} color="white" />
      <Entypo name="user" size={24} color="white" />
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C6C9F",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
  },
});
