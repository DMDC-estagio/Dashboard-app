import React, { useEffect, useState } from 'react';
import { View, StatusBar, Text, ScrollView } from 'react-native';
import { ListItem, Avatar } from "@rneui/themed";

import { style } from '../styles'

const list = [
  {
    name: '2022-07-30 14:09:51',
    subtitle: '221.7' + ' V',
    sub2: '1.5' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
  {
    name: '2022-07-27 13:04:05',
    subtitle: '219.2' + ' V',
    sub2: '3.7' + ' A'
  },
];



export function LogsScreen() {
  const [isLoading, setLoading] = useState(true);
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dmdc-stagging.herokuapp.com/api/logs')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if(isLoading){
    return(
    <View style={ style.loadingScreen }>
        <StatusBar  barStyle="dark-content" translucent={true} />
        <Text> Loading... </Text>
    </View>
    );
  } else { console.log(data);
    return(
      <View>
        <ScrollView>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={ require('../../assets/lightning.png') } />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.sub2}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
        </ScrollView>
      </View>
    );
  }
}