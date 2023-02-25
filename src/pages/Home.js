import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Buat Data</Text>
      {/* <Text>Masukkan Anggota</Text> */}
      <TextInput placeholder="Nama Lengkap" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Bidang" style={styles.input} />
      <Button title="Simpan" />
      <View style={styles.line} />
    </View>
  );
};

export default Home;
