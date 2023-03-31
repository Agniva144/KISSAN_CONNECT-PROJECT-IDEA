import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (text) => {
    setValue(text);
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={value}
        onChangeText={handleChange}
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#e6e6e6',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
    color: '#333',
  },
});

export default SearchBar;
