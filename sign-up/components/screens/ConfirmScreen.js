import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../Card';
import Button from '../Button';

const ConfirmScreen = ({ email, phoneNumber, onConfirm, onEdit, onFinish }) => {
  return (
    <Card>
      <Text style={styles.title}>Confirm Information</Text>
      <Text>Email: {email}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <Button title="Confirm" onPress={onConfirm} />
      <Button title="Go back" onPress={onEdit} />
      <Button title="Finish Later" onPress={onFinish} />
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

export default ConfirmScreen;