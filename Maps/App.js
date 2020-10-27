import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { Map, Panel, Modal, Input, List } from "./components";

export default function App() {
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFiler] = useState("new_point");
  const [name, setName] = useState("");
  const [puntos, setPuntos] = useState([]);
  const [temporal, setTemporal] = useState({});
  const [togglePoints, setTogglePoints] = useState(true);

  const onLongPress = ({ nativeEvent }) => {
    setTemporal(nativeEvent.coordinate);
    setVisibilityFiler("new_point");
    setVisibility(true);
  };

  const onPressLeft = () => {
    setVisibilityFiler("all_points");
    setVisibility(true);
  };

  const closeModal = () => {
    setVisibility(false);
  };

  const getPoint = (text) => {
    setName(text);
  };

  const savePoint = () => {
    const newPoint = { name: name, coordinate: temporal };
    setPuntos(puntos.concat(newPoint));
    setVisibility(false);
    setName("");
  };

  const togglePointsFilter = () => {
    setTogglePoints(!togglePoints);
  };

  return (
    <View style={styles.container}>
      <Map
        onLongPress={onLongPress}
        togglePoints={togglePoints}
        puntos={puntos}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <View>
            <Input
              title="Punto"
              placeholder="Nombre del punto"
              onChangeText={getPoint}
            />
            <Button title="Guardar" onPress={savePoint} />
          </View>
        ) : (
          <List puntos={puntos} closeModal={closeModal} />
        )}
      </Modal>
      <Panel
        onPressLeft={onPressLeft}
        togglePointsFilter={togglePointsFilter}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
