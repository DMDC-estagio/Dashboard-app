import * as React from 'react';
import { Text, View } from 'react-native';
import { style } from '../styles'

export function LogsScreen() {
    return (
      <View style={ style.tabDefaults }>
        <Text> This will be the logs screen... </Text>
        <Text> Stay tuned for changes! </Text>
      </View>
    );
}

// const getData = async () => {
//   try {
//     var response = await fetch('https://dmdc-stagging.herokuapp.com/api/logs');
//     var json = await Promise.resolve(response.json());
//     console.log(json);
//     return json
//   } catch(err) { console.log(err); }
// }
// console.log(json.logs[0].voltageMed) { json.logs[0].voltageMed.toString() }