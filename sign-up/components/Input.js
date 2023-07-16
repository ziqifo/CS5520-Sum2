// components/Input.js
import React, { useState } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import colors from '../helpers/colors';

const Input = ({ value, placeholder, onChangeText, keyboardType, validationFunction, errorMessage }) => {
  const [isValid, setIsValid] = useState(true);

  const handleTextChange = (text) => {
    onChangeText(text);
    setIsValid(validationFunction(text));
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={handleTextChange}
        keyboardType={keyboardType}
      />
      {!isValid && <Text style={styles.error}>{errorMessage}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  error: {
    color: colors.error,
  },
});

export default Input;
