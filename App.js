import { StyleSheet, Text, View } from "react-native";
import Box from "./components/Box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "silver", flexShrink: 1  }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: "green", flexShrink: 1  }}>Box 2 shrink</Box>
      {/* <Box style={{ backgroundColor: "purple" }}>Box 3</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 4</Box>
      <Box style={{ backgroundColor: "blue" }}>Box 5</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 6</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
});
