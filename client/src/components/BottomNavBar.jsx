import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../constants";
import MainPage from "../screens/MainPage/MainPage";
import SearchUserPage from "../screens/MainPage/SearchUserPage";
import NotificationsPage from "../screens/MainPage/NotificationsPage";
import MyProfile from "../screens/Profile/MyProfile";

const BottomNavBar = ({ navigation, activePage }) => {
  return (
    <View style={styles.container}>
      <Entypo
        name="home"
        size={24}
        color="white"
        style={activePage === "MainPage" ? styles.activeIcon : null}
        onPress={() => {
          navigation.navigate(MainPage);
        }}
      />
      <FontAwesome
        name="search"
        size={24}
        color="white"
        style={activePage === "SearchUserPage" ? styles.activeIcon : null}
        onPress={() => {
          navigation.navigate(SearchUserPage);
        }}
      />
      <Entypo
        name="heart"
        size={24}
        color="white"
        style={activePage === "NotificationsPage" ? styles.activeIcon : null}
        onPress={() => {
          navigation.navigate(NotificationsPage);
        }}
      />

      <Entypo
        name="user"
        size={24}
        color="white"
        style={activePage === "MyProfile" ? styles.activeIcon : null}
        onPress={() => {
          navigation.navigate(MyProfile);
        }}
      />
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  activeIcon: {
    backgroundColor: "white",

    color: PRIMARY_COLOR,
    borderRadius: 50,
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
});
