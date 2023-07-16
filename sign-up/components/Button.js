import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../helpers/colors';

const Button = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
  textDisabled: {
    color: colors.white,
  },
});

export default Button;