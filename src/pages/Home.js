import React, {useState, useEffect} from 'react';
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function GetData() {
  const base_url = 'https://demoapi-hilmy.sanbercloud.com/api/news-all';
  const token_api =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtb2FwaS1oaWxteS5zYW5iZXJjbG91ZC5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2NzYzMjk1NzEsImV4cCI6MTczNjMyOTUxMSwibmJmIjoxNjc2MzI5NTcxLCJqdGkiOiJwZHBacUVacTV6ME93amUyIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EOuQmqnBXi84NSw82IDZTliRA0lv6b4WgyIA-XhJ6pk';
  const url_delete = 'https://demoapi-hilmy.sanbercloud.com/api/news-remove';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getNews = async () => {
    try {
      const respone = await fetch(base_url, {
        headers: {
          Authorization: `Bearer ${token_api}`,
        },
      });
      const json = await respone.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onDeleteEvent = async item => {
    console.log(item.id);
    try {
      const respone = await fetch(`${url_delete}/${item.id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token_api}`,
        },
      });
      const json = await respone.json();
      console.log('Data berhasil dihapus', json);
      getNews();
    } catch (error) {
      console.log('error nya : ', error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={{flex: 1, padding: 24, backgroundColor: 'white'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <>
              <TouchableOpacity onPress={() => onDeleteEvent(item)}>
                <Text style={{color: 'red'}}>X Delete</Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  borderWidth: 0.5,
                  marginBottom: 5,
                  paddingLeft: 10,
                  paddingBottom: 10,
                  paddingTop: 10,
                }}>
                <Text>{item.title}</Text>
                <Text>{item.country}</Text>
              </View>
            </>
          )}
        />
      )}
    </View>
  );
}
