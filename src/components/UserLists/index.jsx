import React from "react";
import { View, Text, Button, FlatList } from "react-native";

const UserList = ({ users, navigation }) => (
  <FlatList
    data={users}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={{ marginVertical: 10 }}>
        <Text>{`ID: ${item.id}`}</Text>
        <Text>{`Username: ${item.login}`}</Text>
        <Text>{`Followers: ${item.followers}`}</Text>
        <Button
          title="Ver perfil"
          onPress={() =>
            navigation.navigate("Profile", { username: item.login })
          }
        />
      </View>
    )}
  />
);

export default UserList;
