import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { formHead2 } from "../../globalStyle/formcss";
import ChatCard from "../../components/Cards/ChatCard";
import { searchbar } from "../../globalStyle/pagecss";
import MainPage from "../MainPage/MainPage";
import { PRIMARY_COLOR } from "../../constants";
const All_Chats = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  let chats = [
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

  const filteredChats = useMemo(() => {
    const searchedChats = chats.filter((chat) => {
      if (keyword == "") {
        return chat;
      } else if (
        chat.username.toLowerCase().includes(keyword.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return chat;
      }
    });
    return searchedChats;
  }, [chats]);

  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back-circle"
        size={24}
        color={PRIMARY_COLOR}
        style={styles.gohomeicon}
        onPress={() => navigation.navigate(MainPage)}
      />

      <View style={styles.c1}>
        <Text style={styles.title}>Your Chats</Text>
        <TextInput
          style={searchbar}
          placeholder="Search"
          onChangeText={(text) => setKeyword(text)}
        />
      </View>

      <View style={styles.c2}>
        {true && (
          <FlatList
            data={filteredChats}
            renderItem={({ item }) => (
              <ChatCard key={item.id} chat={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default All_Chats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  gohomeicon: {
    position: "absolute",
    top: 15,
    left: 20,
    zIndex: 10,
    color: "white",
    fontSize: 30,
  },
  c1: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: PRIMARY_COLOR,
    alignSelf: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
  searchbar: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 18,
  },
  c2: {
    width: "100%",
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
