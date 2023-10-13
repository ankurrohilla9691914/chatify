import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { PRIMARY_COLOR } from "../../constants";

const UserCard = ({ user }) => {
  return (
    <View style={styles.UserCard}>
      <Image source={{ uri: user.profileImage }} style={styles.image} />

      <View style={styles.c1}>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  UserCard: {
    backgroundColor: PRIMARY_COLOR,
    width: "100%",
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  username: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  c1: {
    marginLeft: 20,
  },
  lastmessage: {
    color: "gray",
    fontSize: 19,
  },
});
