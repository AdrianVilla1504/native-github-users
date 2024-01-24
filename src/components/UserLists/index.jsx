import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const UserList = ({ users, navigation }) => (
  <View style={styles.container}>
    {users.map((item) => (
      <View key={item.id} style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>{`ID:`}</Text>
          <Text>{item.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{`Username:`}</Text>
          <Text>{item.login}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{`Followers:`}</Text>
          <Text>{item.followers}</Text>
        </View>
        <Button
          title="Ver perfil"
          onPress={() =>
            navigation.navigate("Profile", { username: item.login })
          }
          buttonStyle={styles.button}
        />
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    marginRight: 8,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    paddingVertical: 12,
  },
});

export default UserList;
