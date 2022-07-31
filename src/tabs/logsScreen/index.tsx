import React, { useEffect, useState } from 'react';
import { View, StatusBar, Text, ScrollView } from 'react-native';
import { ListItem, Avatar } from "@rneui/themed";

import { style } from '../styles'

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
      <ScrollView>
      <View>
        {data.logs.map((l, i) => (
          <View>
            <ListItem key={i} >
              <ListItem.Title style={ {fontWeight: 'bold'} }>{data.logs[i].date}</ListItem.Title>
            </ListItem>
            <ListItem key={i} >
              <Avatar source={ require('../../assets/lightning.png') } />
              <ListItem.Content>
                <ListItem.Subtitle>{ 'Tensão Média: ' + data.logs[i].voltage.med.toString() + ' V' }</ListItem.Subtitle>
                <ListItem.Subtitle>{ 'Tensão Mínima: ' + data.logs[i].voltage.min.toString() + ' V' }</ListItem.Subtitle>
                <ListItem.Subtitle>{ 'Tensão Máxima: ' + data.logs[i].voltage.max.toString() + ' V' }</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>

            <ListItem key={i} bottomDivider>
              <Avatar source={ require('../../assets/current.png') } />
              <ListItem.Content>
                <ListItem.Subtitle>{ 'Corrente Média: ' + data.logs[i].current.med.toString() + ' A' }</ListItem.Subtitle>
                <ListItem.Subtitle>{ 'Corrente Mínima: ' + data.logs[i].current.min.toString() + ' A' }</ListItem.Subtitle>
                <ListItem.Subtitle>{ 'Corrente Máxima: ' + data.logs[i].current.max.toString() + ' A' }</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
        ))}
        </View>
        </ScrollView>
    );
  }
}