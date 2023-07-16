import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const appName = "CS 5220";
  function hideModal() {
    setModalVisible(false);
  }

  function handleChangeText(changedText) {
    const newGaol = { text: changedText, id: Math.random() };
    setGoals((prevGoals) => {
      return [...prevGoals, newGaol];
    });
    hideModal();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header name={appName} />
        <Button
          title="Add A Goal"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <Input
        changeTextCallBack={handleChangeText}
        modalVisible={modalVisible}
        hideModal={hideModal}
      />
      <View style={styles.bottomContainer}>
        <FlatList
          contentContainerStyle={styles.scrollViewContent}
          data={goals}
          renderItem={({ item }) => {
            return (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
                <Button color="black" title="X"/>
              </View>
            );
          }}
        />
        {/* <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {goals.map((goalItem) => {
            return (
              <View key={goalItem.id} style={styles.textContainer}>
                <Text style={styles.text}>{goalItem.text}</Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dca",
    //alignItems: "stretch",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  text: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "#a11",
    padding: 5,
    fontSize: 30,
  },
  textContainer: {
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 5,
    flexDirection: "row",
    alignItems:"center",
  },
});