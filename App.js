import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

export default App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

// export default function card() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <View style={styles.inner}>
//           <Image style={styles.headerImg} source={logo} />
//           <Text>Box 1</Text>
//         </View>
//       </View>

//       <View style={styles.box}>
//         <View style={styles.inner}>
//           <Text>Box 2</Text>
//         </View>
//       </View>

//       <View style={styles.box}>
//         <View style={styles.inner}>
//           <Text>Box 3</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 200,
//     padding: 5,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   box: {
//     width: '50%',
//     height: '100%',
//     padding: 8,
//   },
//   inner: {
//     flex: 1,
//     backgroundColor: '#eee',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 40,
//   },
//   headerImg: {
//     width: 80,
//     height: 80,
//     alignSelf: 'center',
//     marginBottom: 36,
//   },
// });
