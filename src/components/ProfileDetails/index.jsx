import React from "react";
import { ScrollView, Text, ActivityIndicator } from "react-native";
import ErrorComponent from "../ErrorComponent";

const ProfileDetails = ({ userData, loading, error }) => (
  
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    {console.log("userData => ", userData)}
    {loading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : error ? (
      <ErrorComponent messages={[error]} />
    ) : (
      userData && (
        <>
          <Text>{`Username: ${userData.login}`}</Text>
          <Text>{`Followers: ${userData.followers}`}</Text>
        </>
      )
    )}
  </ScrollView>
);

export default ProfileDetails;