import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Latihan = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Text style={styles.label}>Nama</Text>
      <TextInput placeholder="Masukkan Nama" style={styles.textInput} />
      <Text style={styles.label}>Nomor HP</Text>
      <TextInput
        placeholder="Nomor HP"
        style={styles.textInput}
        keyboardType={'number-pad'}
      />

      <Text style={styles.label}>Alamat</Text>
      <TextInput
        placeholder="Masukkan Alamat"
        style={styles.textInput}
        multiline={true}
      />

      <TouchableOpacity style={styles.tombol}>
        <Text style={styles.textTombol}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Latihan;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  tombol: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
