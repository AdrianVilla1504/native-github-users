import React, { useState, useCallback } from "react";
import { ScrollView, TextInput, Button, View, ActivityIndicator } from "react-native";
import { fetchUserData, fetchUsersList } from "../../services/GitHubUsers";
import BarChart from "../../components/BarChart";
import UserList from "../../components/UserLists";
import ErrorComponent from "../../components/ErrorComponent";

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
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
            followers: userData.followers,
          };
        })
      );
      setUsers(usersWithFollowers);
    } catch (error) {
      setErrors(`Se produjo un error al buscar seguidores: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(async () => {
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
  }, [searchText]);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <TextInput
        placeholder="Ingrese un nombre de usuario"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={{ marginBottom: 10 }}
      />
      <Button title="Buscar" onPress={handleSearch} />

      {errors.length > 0 ? <ErrorComponent messages={errors} /> : null}

      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : searched && users && users.length > 0 ? (
        <>
          <UserList users={users} navigation={navigation} />
          <BarChart users={users} />
        </>
      ) : null}
    </ScrollView>
  );
};

export default HomeScreen;
