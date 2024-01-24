import React from "react";
import { ScrollView, Text, ActivityIndicator, Image, StyleSheet, View } from "react-native";
import ErrorComponent from "../ErrorComponent";

const renderProfileDetails = (userData, loading, error) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  } else if (error) {
    return <ErrorComponent messages={[error]} />;
  } else if (userData) {
    return (
      <View style={styles.card}>
        <Image style={styles.avatar} source={{ uri: userData.avatar_url }} />
        <View style={styles.details}>
          <View style={styles.row}>
            <Text style={styles.title}>{`Username:`}</Text>
            <Text style={styles.text}>{userData.login}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{`Followers:`}</Text>
            <Text style={styles.text}>{userData.followers}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const ProfileDetails = ({ userData, loading, error }) => (
  <ScrollView contentContainerStyle={styles.container}>
    {renderProfileDetails(userData, loading, error)}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "60%",
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  details: {
    width: "100%",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default ProfileDetails;
