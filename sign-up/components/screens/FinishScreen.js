import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from '../Card';
import Button from '../Button';
import colors from '../../helpers/colors';

const FinishScreen = ({ isConfirmed, phoneNumber, onStartAgain }) => {
  return (
    <Card>
      <Text style={styles.title}>
        {isConfirmed ? 'Thank You!' : 'Sorry to see you go!'}
      </Text>
      <Image
        source={
          isConfirmed
            ? { uri: `https://picsum.photos/id/${phoneNumber.slice(-1)}/100/100` }
            : require('./sad_face.png')
        }
        style={styles.image}
      />
      <Button title="Start Again" onPress={onStartAgain} />
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
});

export default FinishScreen;