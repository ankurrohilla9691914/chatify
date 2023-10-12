import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Comment = ({ commentData }) => {
  const { username, comment } = commentData;
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 3,
    marginLeft: 3,
    marginTop: 4,
  },
  username: {
    marginRight: 10,
    fontWeight: "bold",
  },
  comment: {
    flexShrink: 1,
  },
});
