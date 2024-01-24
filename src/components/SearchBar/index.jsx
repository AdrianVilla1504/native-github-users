import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Ingrese un nombre de usuario"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={styles.input}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
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
  input: {
    flex: 1,
    height: 40,
    marginRight: 8,
  },
});

export default SearchBar;
