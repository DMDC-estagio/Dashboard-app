import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { style } from '../styles'


export function HomeScreen() {
    return (
      <View style={ style.tabDefaults }>
        <StatusBar  barStyle="dark-content" translucent={true} />
        <Text> This will be the home screen... </Text>
        <Text> Stay tuned for changes! </Text>
      </View>
    );
}