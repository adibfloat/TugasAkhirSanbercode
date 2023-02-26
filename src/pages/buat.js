import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert, TextInput, Button} from 'react-native';

export default function PostData() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [button, setButton] = useState('simpan');

  const base_url = 'https://demoapi-hilmy.sanbercloud.com/api/news-created';
  const token_api =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtb2FwaS1oaWxteS5zYW5iZXJjbG91ZC5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2NzYzMjk1NzEsImV4cCI6MTczNjMyOTUxMSwibmJmIjoxNjc2MzI5NTcxLCJqdGkiOiJwZHBacUVacTV6ME93amUyIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EOuQmqnBXi84NSw82IDZTliRA0lv6b4WgyIA-XhJ6pk';

  const submit = async () => {
    const data = {
      title: title,
      description: description,
      country: country,
      author: author,
    };
    console.log(data);
    try {
      const respone = await fetch(base_url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token_api}`,
        },
        body: JSON.stringify(data),
      });
      const json = await respone.json();
      console.log('Data berhasil disimpan', json);
      setTitle('');
      setCountry('');
      setDescription('');
      setAuthor('');
      Alert.alert('Data berhasil disimpan');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Post Data</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Masukkan Author"
            value={author}
            onChangeText={value => setAuthor(value)}
            style={styles.input}
          />
          <TextInput
            placeholder="Masukkan title"
            value={title}
            onChangeText={value => setTitle(value)}
            style={styles.input}
          />
          <TextInput
            placeholder="Masukkan description"
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.input}
          />
          <TextInput
            placeholder="Masukkan country"
            value={country}
            onChangeText={value => setCountry(value)}
            style={styles.input}
          />

          <Button title={button} onPress={submit} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 10,
  },
});

// import React from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   Image,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Button,
// } from 'react-native';
// import logo from '../assets/images/user.png';

// const Buat = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textTitle}>Buat Data</Text>
//       {/* <Text>Masukkan Anggota</Text> */}
//       <TextInput placeholder="Nama Lengkap" style={styles.input} />
//       <TextInput placeholder="Email" style={styles.input} />
//       <TextInput placeholder="Bidang" style={styles.input} />
//       <Button title="Simpan" />
//       <View style={styles.line} />

//       <View style={styles.itemContainer}>
//         <Image source={logo} style={styles.avatar} />
//         <View style={styles.desc}>
//           <Text style={styles.descName}>Nama Lengkap</Text>
//           <Text style={styles.descEmail}>Email</Text>
//           <Text style={styles.descBidang}>Bidang</Text>
//         </View>
//         <Text style={styles.delete}>X</Text>
//       </View>

//       <View style={styles.itemContainer}>
//         <Image source={logo} style={styles.avatar} />
//         <View style={styles.desc}>
//           <Text style={styles.descName}>Nama Lengkap</Text>
//           <Text style={styles.descEmail}>Email</Text>
//           <Text style={styles.descBidang}>Bidang</Text>
//         </View>
//         <Text style={styles.delete}>X</Text>
//       </View>
//     </View>
//   );
// };

// export default Buat;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   textTitle: {
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   line: {
//     height: 2,
//     backgroundColor: 'black',
//     marginVertical: 20,
//   },
//   input: {
//     borderWidth: 1,
//     marginBottom: 12,
//     borderRadius: 25,
//     paddingHorizontal: 18,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 100,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   desc: {
//     marginLeft: 18,
//     flex: 1,
//   },
//   descName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   descEmail: {
//     fontSize: 16,
//   },
//   descBidang: {
//     fontSize: 12,
//     marginTop: 8,
//   },
//   delete: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'red',
//   },
// });
