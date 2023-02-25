import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Example() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            // alt=""
            // source={{
            //   uri: '',
            // }}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileName}>Adib Niatno</Text>

          <Text style={styles.profileEmail}>adib@mail.com</Text>

          <View style={styles.profileAction}>
            <Text style={styles.profileActionText}>React Native Developer</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.profileName}>Portofolio</Text>
        <View style={styles.contentSkill}>
          <View style={styles.SubContentSkill}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../assets/images/github.png')}
            />
            <Text style={{paddingHorizontal: 2}}>Github</Text>
          </View>
          <View style={styles.SubContentSkill}>
            <Image
              style={{height: 50, width: 45}}
              source={require('../assets/images/gitlab.png')}
            />
            <Text style={{paddingHorizontal: 6}}>Gitlab</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.profileName}>Hubungi Saya</Text>
        <View style={styles.contentSkill}>
          <View style={styles.SubContentSkill}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../assets/images/fb.png')}
            />
            <Text style={{paddingHorizontal: 2}}>Facebook</Text>
          </View>
          <View style={styles.SubContentSkill}>
            <Image
              style={{height: 50, width: 45}}
              source={require('../assets/images/twitter.png')}
            />
            <Text style={{paddingHorizontal: 2}}>Twitter</Text>
          </View>
          <View style={styles.SubContentSkill}>
            <Image
              style={{height: 50, width: 45}}
              source={require('../assets/images/instagram.jpg')}
            />
            <Text style={{paddingHorizontal: 2}}>Instagram</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
    textAlign: 'center',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },

  contentSkill: {
    // padding: 16,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // height: 90,
    // marginTop: 10,
    // backgroundColor: '#fff',

    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  SubContentSkill: {
    flexDirection: 'column',
    paddingBottom: 5,
  },

  contentMediaSocial: {
    padding: 8,
  },
  contentMediaSosialDown: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  subContentMediaSosialDown: {
    marginTop: 10,
    alignSelf: 'center',
  },
});
