import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';
export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: "plum" }}>

    // </View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: 'silver', /*alignSelf: 'flex-start'*/ }}>Box 1</Box>
      <Box style={{ backgroundColor: 'green', /*alignSelf: 'flex-end'*/ }}>Box 2</Box>
      <Box style={{ backgroundColor: 'purple', /*alignSelf: 'center'*/ }}>Box 3</Box>
      <Box style={{ backgroundColor: 'orange', /*alignSelf: 'stretch'*/ }}>Box 4</Box>
      <Box style={{ backgroundColor: 'blue' /** the default value is the same of the value of alignItems parent property*/  }}>Box 5</Box>
      <Box style={{ backgroundColor: 'yellow' }}>Box 6</Box>
      <Box style={{ backgroundColor: 'pink' }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   //flex: 1,
   height: 300,
   flexWrap: 'wrap', //wrap, nowrap, wrap-reverse
  //  rowGap: 20,
  //  columnGap: 20,
   gap: 10,
   //alignContent: 'space-around',
   // set the direction of the main axis
   flexDirection: 'column', //column (default), column-reverse, row, row-reverse 
   // defines the alignment along the main axis
   justifyContent: 'flex-start', //flex-start (default), flex-end, center, space-between, space-around, space-evenly
   //defines the alignment along the cross axis
   alignItems: 'stretch', //flex-start, flex-end, center, baseline, stretch (default)
   marginTop: 64,
   borderWidth: 6,
   borderColor: 'red',
  },
});
