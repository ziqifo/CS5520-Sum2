import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function Input({ changeTextCallBack, modalVisible, hideModal }) {
  const [text, setText] = useState("");

  function storeText(changedText) {
    setText(changedText);
  }
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={storeText}
          value={text}
          placeholder="Enter your goal here..."
        />
        <View style={styles.buttonContainer}>
          <Button
            disabled={!text}
            title="Confirm"
            color="green"
            onPress={() => {
              changeTextCallBack(text);
              setText("");
            }}
          />
          <Button
            title="Cancel"
            color="red"
            onPress={() => {
              setText("");
              hideModal();
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
});