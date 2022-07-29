import * as React from 'react';
import { Text, View } from 'react-native';
import { style } from '../styles'


export function HomeScreen() {
    return (
      <View style={ style.tabDefaults }>
        <Text> This will be the home screen... </Text>
        <Text> Stay tuned for changes! </Text>
      </View>
    );
}