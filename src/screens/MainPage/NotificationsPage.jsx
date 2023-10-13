import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopNavBar from "../../components/TopNavBar";
import BottomNavBar from "../../components/BottomNavBar";
import { PRIMARY_COLOR } from "../../constants";
import { formHead } from "../../globalStyle/formcss";

const NotificationsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopNavBar navigation={navigation} />
      <Text style={formHead}>hii</Text>
      <BottomNavBar navigation={navigation} activePage={"NotificationsPage"} />
    </View>
  );
};

export default NotificationsPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
 
  },
});
