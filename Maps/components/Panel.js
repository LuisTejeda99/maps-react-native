import React from "react";
import { StyleSheet, View, Button, Dimensions } from "react-native";

export default ({ onPressLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button title="Listado" onPress={onPressLeft} />
      <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
