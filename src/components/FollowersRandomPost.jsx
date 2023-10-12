import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PostCard from "./Cards/PostCard";
import { SafeAreaView } from "react-native-safe-area-context";

const FollowersRandomPost = () => {
  let data = [
    {
      id: 1,
      userName: "Hinata shoyo",
      postImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
      likes: ["Tobio kageyama", "Yu  NishiNoya"],
      comments: [
        {
          id: 1,
          username: "Hinata",
          comment: "nice",
        },
        {
          id: 2,
          username: "Hinata2",
          comment:
            "1 2 3 4 5 6 7 8 9 fdklgnvfkdjsngvkjdfnvkjdfnv dsjnfvkjdsfng11 12 1 13 14 15 15 26 17 18 19 s",
        },
        {
          id: 3,
          username: "Hinata3",
          comment: "nice3",
        },
      ],
    },
    {
      id: 2,
      userName: "Tobio kageyama",
      postImage:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/10-Harsh-Realities-Of-Being-Tobio-Kageyama-In-Haikyuu!-.jpg",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
      likes: ["Tobio kageyama", "Yu  NishiNoya"],
      comments: [
        {
          id: 1,
          username: "Hinata",
          comment: "nice",
        },
      ],
    },
    {
      id: 3,
      userName: "Yu  NishiNoya",
      postImage:
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/0b610475-09a9-4161-3d0d-9c2c002d7c00/width=1200/0b610475-09a9-4161-3d0d-9c2c002d7c00.jpeg",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
      likes: ["Tobio kageyama", "Yu  NishiNoya"],
      comments: [
        {
          id: 1,
          username: "Hinata",
          comment: "nice",
        },
      ],
    },
    {
      id: 4,
      userName: "Asahi Azumane",
      postImage:
        "https://i.pinimg.com/474x/c1/13/84/c1138479941ab722cf9f98e67ac18fab.jpg",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
      likes: ["Tobio kageyama", "Yu  NishiNoya"],
      comments: [
        {
          id: 1,
          username: "Hinata",
          comment: "nice",
        },
      ],
    },
    {
      id: 5,
      userName: "Diachi Sawamura",
      postImage:
        "https://static.wikia.nocookie.net/haikyuu/images/a/a5/Daichi_s4-e11-2.png/revision/latest?cb=20200519171030",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
      likes: ["Tobio kageyama", "Yu  NishiNoya"],
      comments: [
        {
          id: 1,
          username: "Hinata",
          comment: "nice",
        },
      ],
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <PostCard postData={item} key={item.id} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FollowersRandomPost;

const styles = StyleSheet.create({});
