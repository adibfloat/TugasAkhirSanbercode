import react, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import logo from '../assets/images/Logobook.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        alt=""
        resizeMode="contain"
        style={styles.headerImg}
        source={logo}
      />
      <Text style={styles.tulisan}>Aplikasiku</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  tulisan: {
    marginTop: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
