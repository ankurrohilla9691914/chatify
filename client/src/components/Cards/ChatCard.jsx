import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { PRIMARY_COLOR } from "../../constants";

const ChatCard = ({ navigation, chat }) => {
  const { username, id, lastMessage, time, profileImage } = chat;
  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.image} />
      <View styles={styles.userDataContainer} style={styles.userDataContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  userDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  lastMessage: {
    color: "white",
  },
  timeContainer: {
    color: "gray",
    marginRight: 10,
  },
  time: {
    color: "white",
  },
  leftContainer: {
    marginLeft: 10,
  },
});
