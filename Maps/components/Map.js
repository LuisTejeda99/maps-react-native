import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default ({ onLongPress, togglePoints, puntos }) => {
  return (
    <MapView onLongPress={onLongPress} style={styles.map}>
      {togglePoints &&
        puntos.map((x) => (
          <Marker key={x.name} coordinate={x.coordinate} title={x.name} />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150,
  },
});
