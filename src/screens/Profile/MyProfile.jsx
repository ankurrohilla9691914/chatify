import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopNavBar from "../../components/TopNavBar";
import BottomNavBar from "../../components/BottomNavBar";

const MyProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <Text>MyProfile</Text>
      <BottomNavBar navigation={navigation} activePage={"MyProfile"} />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
});
