import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useMemo } from "react";
import TopNavBar from "../../components/TopNavBar";
import BottomNavBar from "../../components/BottomNavBar";
import { PRIMARY_COLOR } from "../../constants";
import { formHead } from "../../globalStyle/formcss";
import { searchbar } from "../../globalStyle/pagecss";
import UserCard from "../../components/Cards/UserCards";

const SearchUserPage = ({ navigation }) => {
  let users = [
    {
      username: "user1",
      id: 1,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user2",
      id: 2,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 3,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 4,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 5,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 6,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 7,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 8,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 9,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 10,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 11,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 12,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 13,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 14,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 15,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
    {
      username: "user3",
      id: 16,
      lastMessage: "hello",
      time: "12:00",
      profileImage:
        "https://static.wikia.nocookie.net/haikyuu/images/d/d2/Hinata_s4-e1-4.png/revision/latest/scale-to-width/360?cb=20200506183149",
    },
  ];
  const [keyword, setKeyword] = useState("");

  const filteredUsers = useMemo(() => {
    const searched = users.filter((user) => {
      if (keyword == "") {
        return user;
      } else if (
        user?.username?.toLowerCase().includes(keyword?.toLowerCase())
      ) {
        return user;
      }
    });
    return searched;
  }, [users]);

  return (
    <View style={styles.container}>
      <TopNavBar navigation={navigation} />
      <TextInput
        placeholder="search By UserName ..."
        style={searchbar}
        onChangeText={(text) => setKeyword(text)}
      ></TextInput>
      <FlatList
        data={filteredUsers}
        renderItem={({ item }) => <UserCard user={item} />}
        keyExtractor={(item) => item.id}
      />
      <BottomNavBar navigation={navigation} activePage={"SearchUserPage"} />
    </View>
  );
};

export default SearchUserPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
});
