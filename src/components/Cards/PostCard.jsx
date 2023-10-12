import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../../constants";
import Comment from "./Comment";

const PostCard = ({ postData }) => {
  const { id, userName, postImage, likes, comments, profileImage } = postData;
  const [showComments, setShowComments] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };
  const toggleCommentVisibility = () => {
    setShowComments((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image source={{ uri: profileImage }} style={styles.profilePic} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={{ uri: postImage }} style={styles.postImage} />

      <View style={styles.bottomSection}>
        <View style={styles.likesContainer}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={24}
            color={PRIMARY_COLOR}
            onPress={toggleLike}
          />
          {likes.length ? (
            <Text style={styles.likesCount}>{likes.length}</Text>
          ) : null}
        </View>
        <View style={styles.commentsIconContainer}>
          <FontAwesome
            name="comment-o"
            size={24}
            color={PRIMARY_COLOR}
            onPress={toggleCommentVisibility}
          />
          {comments.length ? (
            <Text style={styles.likesCount}>{comments.length}</Text>
          ) : null}
        </View>
      </View>
      <View>
        {showComments
          ? comments.map((comment) => {
              return <Comment commentData={comment} key={comment.id} />;
            })
          : null}
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: PRIMARY_COLOR,
    width: "100%",
    marginVertical: 10,
    borderRadius: 10,
  },
  profilePicContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
  },
  postImage: { width: "100%", aspectRatio: 1 },
  userName: { fontSize: 17, fontWeight: "bold" },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  likesCount: {
    fontSize: 18,
    marginLeft: 2,
    color: PRIMARY_COLOR,
  },
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  commentsIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});
