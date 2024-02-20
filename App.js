import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';
export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: "plum" }}>

    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: 'silver', alignSelf: 'flex-start' }}>Box 1</Box>
      <Box style={{ backgroundColor: 'green', alignSelf: 'flex-end' }}>Box 2</Box>
      <Box style={{ backgroundColor: 'purple', alignSelf: 'center' }}>Box 3</Box>
      <Box style={{ backgroundColor: 'orange', alignSelf: 'stretch' }}>Box 4</Box>
      <Box style={{ backgroundColor: 'blue' /** the default value is the same of the value of alignItems parent property*/  }}>Box 5</Box>
      <Box style={{ backgroundColor: 'yellow' }}>Box 6</Box>
      <Box style={{ backgroundColor: 'pink' }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   // set the direction of the main axis
   flexDirection: 'column', //column (default), column-reverse, row, row-reverse 
   // defines the alignment along the main axis
   justifyContent: 'flex-start', //flex-start (default), flex-end, center, space-between, space-around, space-evenly
   //defines the alignment along the cross axis
   alignItems: 'flex-start', //flex-start, flex-end, center, baseline, stretch (default)
   marginTop: 20,
   borderWidth: 6,
   borderColor: 'red',
  },
});
