import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { containerFull } from "../../globalStyle/pagecss";
import { formHead } from "../../globalStyle/formcss";
import BottomNavBar from "../../components/BottomNavBar";
import TopNavBar from "../../components/TopNavBar";

const MainPage = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TopNavBar />
      <Text style={formHead}>MainPage</Text>
      <BottomNavBar />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
