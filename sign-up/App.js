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
}

export default App;