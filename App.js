import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';
export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: "plum" }}>

    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: 'silver', flex: 0 }}>Box 1</Box>
      <Box style={{ backgroundColor: 'green', flex: 0 }}>Box 2</Box>
      <Box style={{ backgroundColor: 'purple', flex: 0 }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: 'orange' }}>Box 4</Box>
      <Box style={{ backgroundColor: 'blue' }}>Box 5</Box>
      <Box style={{ backgroundColor: 'yellow' }}>Box 6</Box>
      <Box style={{ backgroundColor: 'pink' }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   // set the direction of the main axis
   flexDirection: 'row-reverse', //column, column-reverse, row, row-reverse 
   marginTop: 20,
   borderWidth: 6,
   borderColor: 'red',
  },
});
