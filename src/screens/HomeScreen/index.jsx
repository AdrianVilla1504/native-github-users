import React, { useState, useCallback } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { fetchUserData, fetchUsersList } from "../../services/GitHubUsers";
import BarChart from "../../components/BarChart";
import UserList from "../../components/UserLists";
import ErrorComponent from "../../components/ErrorComponent";
import SearchBar from "../../components/SearchBar";

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchFollowersForUsers = async (users) => {
    try {
      const usersWithFollowers = await Promise.all(
        users.map(async (user) => {
          const userData = await fetchUserData(user.login);
          return {
            ...user,
            followers: userData.followers || 0,
          };
        })
      );
      setUsers(usersWithFollowers);
    } catch (error) {
      setErrors([`Se produjo un error al buscar seguidores: ${error}`]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(async (searchText) => {
    const newErrors = [];

    if (searchText.length < 4) {
      newErrors.push("El texto de búsqueda debe tener al menos 4 caracteres.");
    }

    if (searchText.toLowerCase() === "doublevpartners") {
      newErrors.push('La búsqueda de "doublevpartners" no está permitida.');
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetchUsersList(searchText);
      fetchFollowersForUsers(response); // Llamada para obtener seguidores
      setSearched(true);
    } catch (error) {
      setErrors([`Se produjo un error al buscar usuarios: ${error}`]);
    }
  }, []);

  const renderUsersList = () => {
    if (errors.length > 0) {
      return <ErrorComponent messages={errors} />;
    } else if (loading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else if (searched && users && users.length > 0) {
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <UserList users={[item]} navigation={navigation} />
            )}
          />
          <BarChart users={users} />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchBar onSearch={handleSearch} />
      {renderUsersList()}
    </View>
  );
};

export default HomeScreen;
