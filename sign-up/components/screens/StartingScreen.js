import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../Card';
import Input from '../Input';
import Button from '../Button';
import colors from '../../helpers/colors';

const StartingScreen = ({ onSignUp, onReset }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    return phoneNumber.length === 10;
  };

  return (
    <Card>
      <Text style={styles.title}>Sign Up</Text>
      <Input
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
        keyboardType="email-address"
        validationFunction={isEmailValid}
        errorMessage="Please enter a valid email."
      />
      <Input
        value={phoneNumber}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        validationFunction={isPhoneNumberValid}
        errorMessage="Please enter a valid phone number."
      />
      <Button
        title="Sign Up"
        onPress={() => onSignUp(email, phoneNumber)}
        disabled={!isEmailValid(email) || !isPhoneNumberValid(phoneNumber)}
      />
      <Button title="Reset" onPress={() => { setEmail(''); setPhoneNumber(''); onReset(); }} />
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default StartingScreen;