import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartingScreen from './components/screens/StartingScreen';
import ConfirmScreen from './components/screens/ConfirmScreen';
import FinishScreen from './components/screens/FinishScreen';
import colors from './helpers/colors';

const App = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [screenState, setScreenState] = useState('starting');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSignUp = (email, phoneNumber) => {
    setEmail(email);
    setPhoneNumber(phoneNumber);
    setScreenState('confirm');
  };

  const handleReset = () => {
    setEmail('');
    setPhoneNumber('');
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setScreenState('finish');
  };

  const handleEdit = () => {
    setScreenState('starting');
  };

  const handleFinish = () => {
    setIsConfirmed(false);
    setScreenState('finish');
  };

  const handleStartAgain = () => {
    setEmail('');
    setPhoneNumber('');
    setScreenState('starting');
  };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
  });
  
  export default App;