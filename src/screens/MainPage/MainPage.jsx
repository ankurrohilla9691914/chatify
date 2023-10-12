import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { containerFull } from "../../globalStyle/pagecss";
import { formHead } from "../../globalStyle/formcss";
import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";
import FollowersRandomPost from "../../components/FollowersRandomPost";

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <FollowersRandomPost />
      <BottomNavBar />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    paddingVertical: 50,
  },
});
