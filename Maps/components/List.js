import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  Dimensions,
} from "react-native";

export default ({ puntos, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 250,
  },

  item: {
    borderBottomWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderColor: "#ccc",
  },

  text: {
    fontSize: 20,
  },

  button: {
    padding: 20,
  },
});
