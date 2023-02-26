// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import login from '../pages/login';
// import About from '../pages/AboutScreen';
// // import home from '../pages/home';

// export default Router = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={login}
//         options={{headerShown: false}}
//         // screenOptions={{headerShown: false}}
//       />
//       <Stack.Screen name="MyTabs" component={MyTabs} />
//     </Stack.Navigator>
//   );
// };

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const MyTabs = () => {
//   return (
//     <Tab.Navigator>
//       {/* <Tab.Screen name="Home" component={home} />
//       <Tab.Screen name="Data" component={GetData} />
//       <Tab.Screen name="Post" component={PostData} />
//       <Tab.Screen name="Account" component={account} />
//       <Tab.Screen name="Setting" component={setting} /> */}
//       <Tab.Screen name="Tentang" component={About} />
//     </Tab.Navigator>
//   );
// };

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import login from '../pages/login';
import registrasi from '../pages/registrasi';
import about from '../pages/AboutScreen';
import latihan from '../pages/latihan';
import buat from '../pages/buat';
import home from '../pages/Home';
import splash from '../pages/splash';

export default Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="splash"
        component={splash}
      />
      <Stack.Screen
        name="Login"
        component={login}
        options={{headerShown: false}}
        // screenOptions={{headerShown: false}}
      />
      <Stack.Screen
        name="Registrasi"
        component={registrasi}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={home} />

      {/* <Tab.Screen name="Latihan" component={latihan} /> */}
      <Tab.Screen name="Buat" component={buat} />
      <Tab.Screen name="Tentang Saya" component={about} />
    </Tab.Navigator>
  );
};
