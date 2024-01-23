import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { fetchUserData } from "../../services/GitHubUsers";
import ProfileDetails from "../../components/ProfileDetails";

const ProfileScreen = ({ route }) => {
  const { username } = route.params;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await fetchUserData(username);
        setUserData(data);
      } catch (error) {
        setError("Error al cargar datos del usuario.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [username]);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <ProfileDetails userData={userData} loading={loading} error={error} />
    </ScrollView>
  );
};

export default ProfileScreen;